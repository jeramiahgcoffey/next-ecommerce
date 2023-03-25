import { Product as TProduct } from '@prisma/client';
import { createContext, ReactElement, ReactNode, useState } from 'react';

export type TCartItem = {
  product: TProduct;
  quantity: number;
};

interface ICartContext {
  cart: TCartItem[];
  addProduct: (product: TProduct, quantity?: number) => void;
  removeProduct: (product: TProduct, quantity?: number) => void;
  totalItems: () => number;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
  totalItems: () => 0,
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

  const totalItems = () => {
    return cart
      .map((item) => item.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
