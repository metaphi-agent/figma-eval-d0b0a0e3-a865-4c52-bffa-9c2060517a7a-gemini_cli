import React from 'react';
import { NavLink } from 'react-router-dom';
import { TopHeader } from './TopHeader';

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col border-b border-gray-200">
      <TopHeader />
      <div className="h-[94px] flex items-center justify-between px-4 sm:px-12 md:px-24 lg:px-32 bg-white mt-5 mb-4">
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
           <img src="./assets/icons/logo.svg" alt="Exclusive" className="h-6 w-auto" />
        </NavLink>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12 font-medium text-base">
          <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-gray-400 pb-1" : "hover:text-gray-600"}>Home</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "border-b-2 border-gray-400 pb-1" : "hover:text-gray-600"}>Contact</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "border-b-2 border-gray-400 pb-1" : "hover:text-gray-600"}>About</NavLink>
          <NavLink to="/signup" className={({ isActive }) => isActive ? "border-b-2 border-gray-400 pb-1" : "hover:text-gray-600"}>Sign Up</NavLink>
        </nav>

        {/* Search & Icons */}
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#F5F5F5] text-xs py-2 pl-5 pr-10 rounded w-[243px] h-[38px] focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2">
              <img src="./assets/icons/search.svg" alt="Search" className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-4">
             <button className="hover:opacity-80">
               <img src="./assets/icons/heart.svg" alt="Wishlist" className="w-6 h-6" />
             </button>
             <button className="hover:opacity-80">
               <img src="./assets/icons/shopping-bag.svg" alt="Cart" className="w-6 h-6" />
             </button>
             {/* Use user icon if logged in, or generic user icon */}
             <button className="hover:opacity-80 rounded-full bg-[var(--color-primary)] p-1.5 hidden"> 
               {/* Figma shows a red user icon sometimes? No, usually black. I'll use the exported user.svg */}
             </button>
             <button className="hover:opacity-80">
               <img src="./assets/icons/user.svg" alt="Account" className="w-6 h-6" />
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};