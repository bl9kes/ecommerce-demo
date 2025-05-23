import React from 'react'; // Import React

function Cart({ cartItems, checkout }) { // Props: list of cart items and checkout function
  // Calculate the total price of all items in the cart
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart"> {/* Cart container */}
      <h2>🛒 Cart</h2>

      {cartItems.length === 0 ? ( // If cart is empty
        <p>Your cart is empty.</p>
      ) : ( // If there are items in the cart
        <>
          <ul>
            {cartItems.map(item => ( // Loop through each cart item
              <li key={item.id}>
                {item.name} x {item.qty} - ${item.price * item.qty} {/* Show item name, quantity, and total price */}
              </li>
            ))}
          </ul>
          
          <p><strong>Total: ${total}</strong></p> {/* Show total cost */}
          <button onClick={checkout}>Checkout</button> {/* Checkout button triggers the provided function */}
        </>
      )}
    </div>
  );
}

export default Cart; // Export the component so it can be used in the app

// This component displays the items in the shopping cart. 
// It calculates the total cost, shows each item with quantity and price, 
// and provides a checkout button. If the cart is empty, it shows a message instead.