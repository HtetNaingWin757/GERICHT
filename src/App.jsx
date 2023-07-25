import React from 'react'
import Home from './pages/homeFolder/Home'
import About from './pages/aboutFolder/About'
import Menu from "./pages/menuFolder/Menu"
import Awards from "./pages/awardsFolder/Awards"
import Contact from "./pages/contactFolder/Contact"
import Nav from "./components/Nav"
import background from "./assets/bg.png"
import ScrollTop from './components/ScrollTop'
import Chef from './pages/chefFolder/Chef'
import Vd from './pages/Vd'
import GalleryContainer from './pages/galleryFolder/GalleryContainer'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'


const App = () => {
  return (
    <div style={{backgroundImage : `url(${background})`}} className=' bg-cover bg-fixed relative z-0'>
      <Nav/>
      <Home/>
      <About/>
      <Menu/>
      <Chef/>
      <Vd/>
      <Awards/>
      <GalleryContainer/>
      <Contact/>
      <NewsLetter/>
      <ScrollTop/>
      <Footer/>
    </div>
  )
}

export default App