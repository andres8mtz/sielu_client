import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css'; // Assuming you have a CSS file for styling

const API_URL = "https://sielu-backend.onrender.com";

const AdminPage = ({ onCreateNewProduct, onEditProduct }) => {
    const [products, setProducts] = useState([]);

    // const navigate = useNavigate();

    const getAllProducts = () => {
        axios
        .get(`${API_URL}/api/products`)
        .then((response) => setProducts(response.data))
        .catch((error) => console.error(error));
    };

    useEffect(() => {
        getAllProducts();
    }, []);


  return (
    <div className="admin-page">
      <div className="header">
        <h1>Product Assortment</h1>
        <button onClick={onCreateNewProduct} className="create-button">CREATE NEW PRODUCT</button>
      </div>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => onEditProduct(product.id)} className="edit-button">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
