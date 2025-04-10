import React, { useState } from 'react';
import './CreateProductPage.css';

const CreateProductPage = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    sku: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Product submitted:', product);
  };

  return (
    <div className="create-product-page">
      <h1>CREATE NEW PRODUCT</h1>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={product.name} onChange={handleChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={product.description} onChange={handleChange} />
          </label>
          <label>
            Price:
            <input type="number" name="price" value={product.price} onChange={handleChange} />
          </label>
          <label>
            Category:
            <input type="text" name="category" value={product.category} onChange={handleChange} />
          </label>
          <label>
            SKU:
            <input type="text" name="sku" value={product.sku} onChange={handleChange} />
          </label>
          <label>
            Image:
            <input type="text" name="image" value={product.image} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductPage;
