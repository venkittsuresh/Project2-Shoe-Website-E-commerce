import React from 'react';
import logo from '../../../assets/Logo/logo.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8" />
            <span className="text-2xl font-Freckle">WolfWalk</span>
          </div>
          <p className="mt-4">
            1245, Church Street<br />
            Bangalore,India
          </p>
          <p className="mt-2">
            Monday to Friday from 09:00 to 17:00.<br />
            +91 906196971
          </p>
        </div>
        <div>
          <h3 className="font-bold">Shop</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Mens</a></li>
            <li><a href="#" className="hover:underline">Kids</a></li>
            <li><a href="#" className="hover:underline">Women</a></li>
            <li><a href="#" className="hover:underline">Boots</a></li>
            <li><a href="#" className="hover:underline">Wellington boot</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Customer</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Sign In</a></li>
            <li><a href="#" className="hover:underline">Create Account</a></li>
            <li><a href="#" className="hover:underline">Shopping</a></li>
            <li><a href="#" className="hover:underline">Checkout</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-orange-500">Sign up to be the first to know about new collections.</h3>
          <div className="mt-4">
            <form className="flex">
              <input 
                type="email" 
                placeholder="email" 
                className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-lg focus:outline-none" 
              />
              <button className="bg-orange-500 px-4 py-2 rounded-r-lg hover:bg-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 6l-4 4 4 4m0 0l-4-4-4 4m4-4h11" />
                </svg>
              </button>
            </form>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-orange-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
        <p > All Right Reserved © 2024 WolfWalk</p>
      </div>
    </footer>
  );
};

export default Footer;
