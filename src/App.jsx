import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import LoginPopup from './Components/LoginPopup/LoginPopup';

const App = () => {

  const [showLogin,setShowLogin] =useState(false)
  return (
    <div className='app'>
      <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <Navbar setShowLogin={setShowLogin}/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
       </Routes>
       <Footer/>
      </>
      

    </div>
  )
}

export default App;