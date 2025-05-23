import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import products from './products';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const checkout = () => {
    alert('Payment successful! Thank you for your order.');
    setCartItems([]);
  };

  return (
    <div className="App">
      <h1>Simple eCommerce Demo</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} checkout={checkout} />
    </div>
  );
}

export default App;
