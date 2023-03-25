import { CartContext } from '@/contexts/CartContext';
import { useContext } from 'react';

const useCart = () => {
  const { cart, addProduct, removeProduct, totalItems } =
    useContext(CartContext);
  return { cart, addProduct, removeProduct, totalItems };
};

export default useCart;
