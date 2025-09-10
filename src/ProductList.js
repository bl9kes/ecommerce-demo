import React from 'react'; // Import React

// Component receives a list of products and an addToCart function as props
function ProductList({ products, addToCart }) {
  return (
    <div className="products"> {/* Container for all product items */}
      {products.map((product) => ( // Loop through each product
        <div key={product.id} className="product"> {/* Unique key for React, individual product block */}
          <h3>{product.name}</h3> {/* Show product name */}
          <p>${product.price}</p> {/* Show product price */}
          <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Button adds product to cart */}
        </div>
      ))}
    </div>
  );
}

export default ProductList; // Export the component so it can be used elsewhere (e.g. in App.jsx)
