import React from 'react';
import './ProductPage.css'; // Assuming you have a CSS file for styling

const ProductPage = ({ product }) => {
  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <div className="product-details">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <div className="product-info">
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <button className="edit-button">Edit Product</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
