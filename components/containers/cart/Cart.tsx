import Button from '@/components/inputs/button/Button';
import useCart from '@/hooks/useCart';
import useModal from '@/hooks/useModal';
import { formatterWithCents } from '@/lib/currencyFormatter';
import { useRouter } from 'next/router';
import styles from './Cart.module.scss';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, totalItems, removeAll, subtotal } = useCart();
  const router = useRouter();
  const { toggleModal } = useModal();

  return (
    <div className={styles.cart}>
      <div className={styles.heading}>
        <h5>cart ({totalItems()})</h5>
        <span
          className={styles.removeAll}
          onClick={() => {
            removeAll();
            toggleModal();
          }}
        >
          Remove all
        </span>
      </div>
      <div className={styles.items}>
        {cart.map((item) => (
          <CartItem key={item.product.id} cartItem={item} />
        ))}
      </div>
      <div className={styles.total}>
        <span className="subtitle">total</span>
        <div className={styles.price}>
          {formatterWithCents.format(subtotal())}
        </div>
      </div>
      <div className={styles.button}>
        <Button
          handleClick={() => {
            router.push('/checkout');
            toggleModal();
          }}
        >
          checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
