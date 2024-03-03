// import React from 'react'
import{ BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Portfolio from '../pages/Portfolio/Portfolio'
import Contact from '../pages/Contact/Contact'
import Nav from '../components/Nav/Nav';
import Theme from '../components/Theme/Theme'
import Register from '../components/Register';




function Router() {
  return (
    <BrowserRouter>
    <Nav />
    <Theme />
    
    <Routes>
      <Route path='/' element= {<Home />}/>
      <Route path='/about' element= {<About />}/>
      <Route path='/portfolio' element= {<Portfolio />}/>
      <Route path='/contact' element= {<Contact />}/>
      <Route path='/register' element= {<Register />}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default Router
