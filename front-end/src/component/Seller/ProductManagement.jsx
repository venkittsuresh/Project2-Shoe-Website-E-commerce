import React from "react";
import "./ProductManagement.css";
import ProductForm from "./Components/ProductForm/ProductForm";
import Navbar from "../common/Navbar/Navbar";
import ProductList from "./Components/ProductList";

const ProductManagement = () => {
  return (
    <div className="product-main">
      <Navbar />
      <div className="Product-button">
      <button className="button-product">Add Product</button>
      </div>
      <div className="product-list">
        <ProductList/>
      </div>
    </div>
  );
};

export default ProductManagement;
