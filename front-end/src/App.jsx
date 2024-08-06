import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/common/Navbar/Navbar';
import Home from './pages/common/Home';
import Footer from './component/common/Footer/Footer';
import Loader from './component/common/Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (

        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
