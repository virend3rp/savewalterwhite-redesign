import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navItem =
    'text-green-300 hover:text-white transition-all duration-200 px-3 py-2 font-mono';

  return (
    <nav className="bg-[#0f0f0f] border-b border-green-700 px-6 py-4 flex items-center justify-between">
      <h1 className="text-red-500 text-2xl font-bold tracking-wider">Save Walter White</h1>
      <div className="flex gap-4">
        <NavLink to="/" className={navItem}>Home</NavLink>
        <NavLink to="/testimonials" className={navItem}>Testimonials</NavLink>
      </div>
    </nav>
  );
};

export default Header;
