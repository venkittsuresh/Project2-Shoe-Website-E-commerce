import React from 'react'
import Hero from '../../component/customer/Hero/Hero'
import FeaturedProduct from '../../component/customer/FeaturedProduct/FeaturedProduct'
import ProductCategories from '../../component/ProductCategories/ProductCategories'

const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturedProduct/>
        <ProductCategories/>
    </div>
  )
}

export default Home