import { CartContext } from '@/contexts/CartContext';
import { useContext } from 'react';

const useCart = () => {
  const { cart, addProduct, removeProduct, totalItems, removeAll, subtotal } =
    useContext(CartContext);
  return { cart, addProduct, removeProduct, totalItems, removeAll, subtotal };
};

export default useCart;
