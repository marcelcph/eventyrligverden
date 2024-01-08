import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1, selectedSize = null,) => {
    setCartItems(prevItems => {
      // Tjek om produktet allerede findes i kurven
      const existingItem = prevItems.find(item => item.id === product.id && item.selectedSize === selectedSize );
      if (existingItem) {
        // Opdater antallet
        return prevItems.map(item =>
          item.id === product.id && item.selectedSize === selectedSize 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      // Tilføj det nye produkt til kurven
      return [...prevItems, { ...product, quantity, selectedSize, }];
    });
  };

  const updateQuantity = (productId, newSize, newQuantity) => {
    setCartItems(prevItems => prevItems.map(item =>
      item.id === productId && item.selectedSize === newSize
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const removeItem = (productId, selectedSize) => {
    setCartItems(prevItems => prevItems.filter(item => !(item.id === productId && item.selectedSize === selectedSize)));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
