import useCart from '@/hooks/useCart';
import CartItem from '../cart/CartItem';
import styles from './Summary.module.scss';

const Summary = () => {
  const { cart } = useCart();

  return (
    <div className={styles.summary}>
      <h4>Summary</h4>
      <div className={styles.items}>
        {cart.map((item) => (
          <div key={item.product.id} className={styles.item}>
            <CartItem cartItem={item} isStatic />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
