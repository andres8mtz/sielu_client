import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./AdminPage.css";

const API_URL = "https://sielu-backend.onrender.com";

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const getAllProducts = () => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/api/products`)
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/api/products/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        alert("Failed to delete the product. Please try again.");
      });
  };

  const navigateToCreateProduct = () => {
    navigate("/CreateProduct");
  };

  const navigateToEditProduct = (id) => {
    navigate(`/EditProduct/${id}`);
  };

  return (
    <div className="ProductListPage">
      <h1>Current Contestants</h1>
      <button onClick={navigateToCreateProduct} className="nav-to-cp">
        Create new product
      </button>
      <br />
      {isLoading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products available. Please create a new product.</p>
      ) : (
        <ul className="product-grid">
          {products.map((product) => (
            <li key={product.id} className="product-card">
              <img src={product.picture_url} alt={`Image of ${product.name}`} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="author">{product.author}, {product.city}</p>
              <button
                className="delete-button"
                onClick={() => handleDelete(product.id)}
                aria-label={`Delete product ${product.name}`}
              >
                Delete
              </button>
              <button
                className="edit-button"
                onClick={() => navigateToEditProduct(product.id)}
                aria-label={`Edit product ${product.name}`}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminPage;