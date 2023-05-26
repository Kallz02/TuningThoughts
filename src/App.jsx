import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './components/Nav/Nav'
import Landing from './Pages/Landing/Landing'
import Footer from './components/Footer/Footer';
import About from './Pages/About/About';
import Kit from './Pages/Kit/Kit';
import Testimonial from './Pages/Testimonials/Testimonial';
import Events from './Pages/Events/Events'
import Classes from './Pages/Classes/Classes';

function App() {
  useEffect(() => {
    import('preline')
  }, [])

  return (
    <>
      <BrowserRouter>

        <Nav />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />

          <Route path='/testimonial' element={<Testimonial />} />

          <Route path='/kit' element={<Kit />} />
          <Route path='/events' element={<Events />} />

          <Route path='/classes' element={<Classes />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
