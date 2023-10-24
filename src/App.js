import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/cart' element={<Cart/>}/>
      <Route path= '/wishlist' element={<Wishlist/>}/>
      </Routes>
      <hr/>
      <Footer/>
      </>
  )
}

export default App
