import React from 'react';
import './ProductManagement.css';
import ProductForm from './Components/ProductForm/ProductForm';
import Navbar from '../common/Navbar/Navbar';

const ProductManagement = () => {

  return(
    <>
    <Navbar/>
    <ProductForm/>
    </>
  )
 
};

export default ProductManagement;