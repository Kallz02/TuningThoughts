import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About';
import Testimonial from './components/Testimonial';
import Kit from './components/Kit';
import Classes from './components/Classes';
import Event from './components/Event';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  
  return (
<BrowserRouter>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    
    <Route path='/testimonial' element={<Testimonial/>}/>
  
    <Route path='/kit' element={<Kit/>}/>
    <Route path='/events' element={<Event/>}/>
    
    <Route path='/classes' element={<Classes/>}/>
</Routes>

</BrowserRouter>

  )
}

export default App
