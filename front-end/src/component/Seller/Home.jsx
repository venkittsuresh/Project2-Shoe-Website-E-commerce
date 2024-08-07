import React from 'react'
import Navbar from '../common/Navbar/Navbar'
import ProductForm from './Components/ProductForm/ProductForm'
import ProductManagement from './ProductManagement'
import Hero from './Components/HomeHero.jsx/Hero'

const Home = () => {
  return (
    <div className='home' >
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Home