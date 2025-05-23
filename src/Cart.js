import React from 'react';

function Cart({ cartItems, checkout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} x {item.qty} - ${item.price * item.qty}
              </li>
            ))}
          </ul>
          <p><strong>Total: ${total}</strong></p>
          <button onClick={checkout}>Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
