import React from "react";
import hero2 from "../../../assets/Images/hero3.jpg";

const Hero = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-2 font-ceviche">
            NEW SHOES COLLECTION
          </h1>
          <p className="font-medium text-lg md:text-3xl mb-12">
            Style in handcrafts, made by professionals for you
          </p>
          <a
            href="#"
            className="bg-white text-black py-3 px-8 text-lg font-semibold transition border hover:border-black ring-slate-300"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
