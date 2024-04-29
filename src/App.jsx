import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
