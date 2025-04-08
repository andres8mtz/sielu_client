import React from "react";
import Header from "../components/Header/Header";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import multiuso from "../assets/mobile-image.jpg";

const products = [
  {
    image: 'https://res.cloudinary.com/dkndx7uio/image/upload/v1744126833/multiuso_p3xcew.png',
    name: 'Multiuso',
    colors: ['#ff0000', '#ff69b4', '#ff1493']
  },
  {
    image: 'https://res.cloudinary.com/dkndx7uio/image/upload/v1744126833/multiuso_p3xcew.png',
    name: 'Foundation',
    colors: ['#f5deb3', '#d2b48c', '#deb887']
  },
  {
    image: 'product3.jpg',
    name: 'Eyeshadow',
    colors: ['#8a2be2', '#7b68ee', '#6a5acd']
  },
  {
    image: 'product4.jpg',
    name: 'Mascara'
  },
  {
    image: 'product5.jpg',
    name: 'Blush',
    colors: ['#ff6347', '#ff4500', '#ff7f50']
  }
];

function HomePage() {
  return (
    <div className="home-page">
        <Header />
        <ProductCarousel products={products}/>
         
    </div>   
  );
}

export default HomePage;