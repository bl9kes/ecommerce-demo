import React, { useState } from 'react'; // Import React and useState for managing state
import ProductList from './ProductList'; // Import component to display products
import Cart from './Cart'; // Import component to show cart items
import products from './products'; // Import static list of products
import './App.css'; // Import global styles

function App() {
  const [cartItems, setCartItems] = useState([]); // Track the items currently in the cart

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(p => p.id === product.id); // Check if product is already in the cart
      if (exists) {
        // If it exists, increase the quantity by 1
        return prev.map(p =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      // If not, add the product with a quantity of 1
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Function to handle checkout
  const checkout = () => {
    alert('Payment successful! Thank you for your order.'); // Show confirmation message
    setCartItems([]); // Clear the cart
  };

  return (
    <div className="App"> {/* Main app container */}
      <h1>Simple eCommerce Demo</h1>

      {/* Render product list and pass product data + addToCart handler */}
      <ProductList products={products} addToCart={addToCart} />

      {/* Render cart and pass cart items + checkout handler */}
      <Cart cartItems={cartItems} checkout={checkout} />
    </div>
  );
}

export default App; // Export the App component as the root of the app

// This is the main component of your eCommerce demo app. 
// It manages the shopping cart, adds items, and handles checkout.