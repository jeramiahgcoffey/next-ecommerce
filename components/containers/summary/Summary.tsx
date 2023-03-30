import Button from '@/components/inputs/button/Button';
import useCart from '@/hooks/useCart';
import { formatter } from '@/lib/currencyFormatter';
import CartItem from '../cart/CartItem';
import styles from './Summary.module.scss';

const Summary = () => {
  const { cart, subtotal } = useCart();

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
      <div className={styles.costs}>
        <div className={styles.row}>
          <span className={styles.label}>Total</span>
          <span className={styles.value}>{formatter.format(+subtotal())}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Shipping</span>
          <span className={styles.value}>{formatter.format(50)}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>VAT (included)</span>
          <span className={styles.value}>
            {formatter.format(+subtotal() * 0.2)}
          </span>
        </div>
        <div className={`${styles.row} ${styles.bottom}`}>
          <span className={styles.label}>Grand total</span>
          <span className={styles.total}>
            {formatter.format(+subtotal() + 50)}
          </span>
        </div>
      </div>
      <div className={styles.button}>
        <Button handleClick={() => console.log('click')}>Continue & Pay</Button>
      </div>
    </div>
  );
};

export default Summary;
