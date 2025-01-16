import React from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Dashboard from '../pages/Dashboard';

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
