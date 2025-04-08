import React, { useState, useEffect } from 'react';
import './ProductCarousel.css';

const ProductCarousel = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleProducts, setVisibleProducts] = useState(3);
    const [selectedColors, setSelectedColors] = useState({});
  
    useEffect(() => {
      const updateVisibleProducts = () => {
        setVisibleProducts(window.innerWidth > 768 ? 3 : 1);
      };
  
      window.addEventListener('resize', updateVisibleProducts);
      updateVisibleProducts();
  
      return () => window.removeEventListener('resize', updateVisibleProducts);
    }, []);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + visibleProducts) % products.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - visibleProducts + products.length) % products.length);
    };
  
    const getVisibleProducts = () => {
      return products.slice(currentIndex, currentIndex + visibleProducts);
    };
  
    const handleColorClick = (productIndex, color) => {
      setSelectedColors((prevSelectedColors) => ({
        ...prevSelectedColors,
        [productIndex]: color
      }));
    };
  
    return (
      <div className="carousel">
        <button className="carousel-button" onClick={prevSlide}>&lt;</button>
        <div className="carousel-items">
          {getVisibleProducts().map((product, index) => (
            <div key={index} className="carousel-item">
              <img 
                src={selectedColors[index] ? `images/${product.name.toLowerCase()}_${selectedColors[index]}.jpg` : product.image} 
                alt={product.name} 
                className="product-image" 
              />
              <h3 className="product-name">{product.name}</h3>
              {product.colors && (
                <div className="color-slider">
                  {product.colors.map((color, idx) => (
                    <div 
                      key={idx} 
                      className="color-swatch" 
                      style={{ backgroundColor: color }} 
                      onClick={() => handleColorClick(index, color)}
                    ></div>
                  ))}
                </div>
              )}
              <button className="add-to-bag">ADD TO BAG</button>
            </div>
          ))}
        </div>
        <button className="carousel-button" onClick={nextSlide}>&gt;</button>
      </div>
    );
  };
  
  export default ProductCarousel;