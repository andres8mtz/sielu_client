import './App.css'
import { Routes, Route } from "react-router-dom"; // <== IMPORT

import HomePage from "./pages/HomePage";     // <== IMPORT
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import AuthPage from './pages/AuthPage/AuthPage';
import SignupPage from './pages/SignupPage/SignupPage';
import AdminPage from './pages/AdminPage/AdminPage';
import CreateProductPage from './pages/CreateProductPage/CreateProductPage';
import ProductPage from './pages/ProductPage/ProductPage';
import EditProductPage from './pages/EditProductPage/EditProductPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      
      
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/account/login" element={<AuthPage />} />
        <Route path="/account/signup" element={<SignupPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/edit-product/:id" element={<EditProductPage />} />
        
      </Routes>
      
      <Footer />
    </div> 
  )
}

export default App;
