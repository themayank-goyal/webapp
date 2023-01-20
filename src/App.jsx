import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='text-body bg-lightbg'>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App