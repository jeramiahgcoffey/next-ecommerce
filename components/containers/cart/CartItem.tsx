import NumberField from '@/components/inputs/numberField/NumberField';
import { TCartItem } from '@/contexts/CartContext';
import useCart from '@/hooks/useCart';
import { formatter } from '@/lib/currencyFormatter';
import Image from 'next/image';
import styles from './CartItem.module.scss';

interface ICartItemProps {
  cartItem: TCartItem;
  isStatic?: boolean;
}

const CartItem = ({ cartItem, isStatic = false }: ICartItemProps) => {
  const { addProduct, removeProduct } = useCart();

  const shortenName = (name: string): string => {
    return name.replace('Mark', 'MK').split(' ').slice(0, -1).join(' ');
  };

  return (
    <div className={styles.item}>
      <div className={styles.product}>
        <div className={styles.image}>
          <Image
            src={cartItem.product.image.mobile.slice(1)}
            alt={cartItem.product.name}
            fill
          />
        </div>
        <div className={styles.info}>
          <h6>{shortenName(cartItem.product.name)}</h6>
          <span>{formatter.format(cartItem.product.price)}</span>
        </div>
      </div>
      <div className={styles.input}>
        {isStatic ? (
          <span className={styles.quantity}>x{cartItem.quantity}</span>
        ) : (
          <NumberField
            dense
            value={cartItem.quantity}
            handleIncrement={() => addProduct(cartItem.product)}
            handleDecrement={() => removeProduct(cartItem.product)}
            handleChangeEvent={(e) => {
              console.log('change');
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CartItem;
