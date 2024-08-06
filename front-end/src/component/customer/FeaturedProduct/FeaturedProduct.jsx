import React from 'react';
import ProductCard from '../../Card/ProductCard';
import p1 from "../../../assets/Images/p1.jpg";
import p2 from "../../../assets/Images/p2.jpg";
import p3 from "../../../assets/Images/p3.jpg";
import p4 from "../../../assets/Images/p5.jpg";

const products = [
    {
        name: "Roshe G Next Nature",
        imageUrl:p1,
        price: "50.00",
        colorOptions: ["Black","Green","Yellow"],
        color: "Black"
    },
    {
        name: "Renew Elevate 3",
        imageUrl: p2,
        price: "85.00",
        colorOptions: ["Green","Green","Yellow"],
        color: "Green"
    },
    {
        name: "New Air Max Flyknit Racer",
        imageUrl: p3,
        price: "52.00",
        colorOptions: ["Black","Green","Yellow"],
        color: "Black"
    },
    {
        name: "Air Max 90 ",
        imageUrl: p4,
        price: "45.00",
        colorOptions: ["Blue","Green","Yellow"],
        color: "Blue"
    }
];

const FeaturedProduct = () => {
    return (
        <div className="bg-gray-900 text-white font-sans">
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold mb-6">Featured Product</h1>
                <div className="flex justify-between mb-4">
                    <h2 className="bg-yellow-500 text-black rounded-full px-4 py-2">Bestseller</h2>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default FeaturedProduct;
