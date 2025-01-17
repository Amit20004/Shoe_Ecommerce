import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
import SignupPage from './pages/SignupPage';
import Cart from './components/Cart';
import MenSection from './pages/MenSection';
import WomenSection from './pages/WomenSection';
import CardDetail from './pages/CardDetail';
import SalePage from './pages/SalePage';
import AboutUs from './pages/AboutUs';
import CheckOutPage from './pages/CheckOutPage';
import PaymentPage from './pages/PaymentPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/login"  element={<Login />} />
        <Route path="/contact"  element={<ContactUs/>} />
        <Route path="/signup"  element={<SignupPage/>} />
        <Route path="/cart"  element={<Cart/>} />
        <Route path="/men"  element={<MenSection/>} />  
        <Route path="/women"  element={<WomenSection/>} />  
        <Route path="/card-detail/:id"  element={<CardDetail/>} />  
        <Route path="/sale"  element={<SalePage/>} />   
        <Route path="/about"  element={<AboutUs/>} />   
        <Route path="/checkout"  element={<CheckOutPage/>} />   
        <Route path="/payment"  element={<PaymentPage/>} />   
        <Route path="/order-track"  element={<OrderTrackingPage/>} />   
      </Routes>
    </Router>
    
  )
}

export default App