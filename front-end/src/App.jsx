import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/common/Navbar/Navbar'
import Home from './pages/common/Home';
import Footer from './component/common/Footer/Footer';
const App = () => {
  return (
    <div>
     <Router>
        <Navbar/>
       
        <Routes>
        <Route exact path="/" element={ <Home/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App