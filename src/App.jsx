import './App.css'
import { Routes, Route } from "react-router-dom"; // <== IMPORT

import HomePage from "./pages/HomePage";     // <== IMPORT
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import AuthPage from './pages/AuthPage/AuthPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/account/login" element={<AuthPage />} />
        <Route path="/account/signup" element={<SignupPage />} />
        
      </Routes>
      
      <Footer />
    </div> 
  )
}

export default App;
