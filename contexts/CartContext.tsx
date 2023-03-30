import { Product as TProduct } from '@prisma/client';
import {
  ReactElement,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react';

export type TCartItem = {
  product: TProduct;
  quantity: number;
};

interface ICartContext {
  cart: TCartItem[];
  addProduct: (product: TProduct, quantity?: number) => void;
  removeProduct: (product: TProduct, quantity?: number) => void;
  totalItems: () => number;
  removeAll: () => void;
  subtotal: () => number;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
  totalItems: () => 0,
  removeAll: () => {},
  subtotal: () => 0,
});

const CartProvider = ({ children }: { children: ReactNode | ReactElement }) => {
  const [cart, setCart] = useState<TCartItem[]>(
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart') || '') || []
      : []
  );

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
          cart = cart.slice(idx + 1);
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

  const removeAll = () => {
    setCart([]);
  };

  const subtotal = () => {
    return cart
      .map((item) => item.product.price * item.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        totalItems,
        removeAll,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
