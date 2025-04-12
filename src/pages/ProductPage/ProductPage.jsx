import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./ProductPage.css";

const API_URL = "https://sielu-backend.onrender.com";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="ProductPage">
      <div className="content">
        <div className="details">
        <li key={product.id} className="product-card">

          <h1>{product.name}</h1>
          <p>{product.description}</p>
          </li>

        </div>
        <img src={product.picture_url} alt={`Image of ${product.name}`} />
      </div>
    </div>
  );
}

export default ProductPage;
