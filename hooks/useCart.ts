import { CartContext } from '@/contexts/CartContext';
import { useContext } from 'react';

const useCart = () => {
  const { cart, addProduct, removeProduct } = useContext(CartContext);
  return { cart, addProduct, removeProduct };
};

export default useCart;
