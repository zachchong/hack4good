import React from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Dashboard from '../pages/Dashboard';
import ProductDetail from '../pages/ProductDetail';
import CarouselSlide from '../components/CarouselSlide';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Categories />
      <Dashboard />
      
      
    </div>
  );
}

export default Home;
