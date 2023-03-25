import { Product as TProduct } from '@prisma/client';
import { createContext, ReactElement, ReactNode, useState } from 'react';

type TCartItem = {
  product: TProduct;
  quantity: number;
};

interface ICartContext {
  cart: TCartItem[];
  addProduct: (product: TProduct, quantity?: number) => void;
  removeProduct: (product: TProduct, quantity?: number) => void;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
});

const CartProvider = ({ children }: { children: ReactNode | ReactElement }) => {
  const [cart, setCart] = useState<TCartItem[]>([]);

  const addProduct = (product: TProduct, quantity = 1) => {
    if (quantity < 1) return;
    setCart((prevCart) => {
      let cart = [...prevCart];
      const idx = cart.findIndex((item) => item.product.slug === product.slug);
      if (idx < 0) {
        return [{ product, quantity }].concat(cart);
      } else {
        cart[idx].quantity += quantity;
        return cart;
      }
    });
  };

  const removeProduct = (product: TProduct, quantity = 1) => {
    if (quantity < 1) return;
    setCart((prevCart) => {
      let cart = [...prevCart];
      const idx = cart.findIndex((item) => item.product.slug === product.slug);
      if (idx < 0) {
        return cart;
      } else {
        cart[idx].quantity -= quantity;
        if (cart[idx].quantity <= 0) {
          cart = cart.slice(idx);
        }
        return cart;
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
