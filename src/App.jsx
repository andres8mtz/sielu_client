import './App.css'
import { Routes, Route } from "react-router-dom"; // <== IMPORT

import HomePage from "./pages/HomePage";     // <== IMPORT
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/account/login" element={<AuthPage />} />
        
      </Routes>
      
      <Footer />
    </div> 
  )
}

export default App;
