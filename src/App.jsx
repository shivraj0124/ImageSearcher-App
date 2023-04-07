import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Api from './Components/Api'
import {Photoprovider} from './Components/Photocontext'
import Home from './Components/Home'
import Footer from './Components/footer'
import About from './Components/About'
import PhotoSelected from './Components/PhotoSelected'
function App() {


  return (
   
   <Photoprovider>
      <BrowserRouter>
      <Navbar/>    
        <Routes>             
          <Route exact path="/" element={<Home/>}/>     
          <Route exact path="/api" element={<Api/>}/>     
          <Route exact path="/about" element={<About/>}/>     
          <Route exact path="/FullImg" element={<PhotoSelected/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Photoprovider>
   
  )
}

export default App
