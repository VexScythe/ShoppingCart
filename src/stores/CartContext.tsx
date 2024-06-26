import React, { createContext, useContext, useState } from 'react';

type ProductDetail = {
  id: number;
  name: string;
  localQuantity: number;
  localPrice: number;
};

type CartData = {
  productDetail: ProductDetail[];
  totalQuantity: number;
  totalPrice: number;
};

const CartContext = createContext<
  | {
      cartData: CartData;
      setCartData: React.Dispatch<React.SetStateAction<CartData>>;
    }
  | undefined
>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [cartData, setCartData] = useState<CartData>({
    productDetail: [],
    totalQuantity: 0,
    totalPrice: 0,
  });

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart need to be used inside CartProvider');
  }
  return context;
};
