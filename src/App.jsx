import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Nopage from './page/Nopage'
import Category from './page/Category'
import Details from './page/Details'
import './script.js'
import ScrollToTop from './components/ScrollToTop.jsx'


function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='*' element={<Nopage/>}/>
      <Route path='/details/:id/' element={<Details/>}/>
      <Route path='/category/:cid/' element={<Category/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App