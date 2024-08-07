import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './component/Seller/Home'
import ProductManagement from './component/Seller/ProductManagement'
import About from './component/Seller/About'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='product' element={<ProductManagement/>}/>
      <Route path='about' element={<About/> }/>
      
    </Routes>
    </BrowserRouter>
 
    
    </>
  )
}

export default App