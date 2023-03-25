import Button from '@/components/inputs/button/Button';
import useCart from '@/hooks/useCart';
import styles from './Cart.module.scss';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, addProduct, removeProduct } = useCart();

  const totalItems = () => {
    return cart
      .map((item) => item.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.heading}>
        <h5>cart ({totalItems()})</h5>
        <a href="">Remove all</a>
      </div>
      <div className={styles.items}>
        {cart.map((item) => (
          <CartItem key={item.product.id} cartItem={item} />
        ))}
      </div>
      <div className={styles.total}>
        <span className="subtitle">total</span>
        <div className={styles.price}>$0.00</div>
      </div>
      <div className={styles.button}>
        <Button handleClick={() => console.log('click')}>checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
