import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';

export const Header = () => {
    const location = useLocation();
    
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
        { name: 'Sign Up', path: '/signup' },
    ];

    return (
        <header className="border-b border-gray-100 pt-6 pb-4 sticky top-0 bg-white z-50">
           <div className="container-custom flex items-center justify-between">
               {/* Logo */}
               <Link to="/" className="text-2xl font-bold tracking-wider">Exclusive</Link>
               
               {/* Nav */}
               <nav className="hidden md:flex gap-12">
                   {navItems.map(item => (
                       <Link 
                           key={item.path} 
                           to={item.path}
                           className={cn(
                               "text-base transition-colors hover:text-black hover:underline underline-offset-4 decoration-gray-400",
                               location.pathname === item.path ? "underline text-black decoration-black" : "text-black no-underline"
                           )}
                        >
                            {item.name}
                        </Link>
                   ))}
               </nav>

               {/* Right Side */}
               <div className="flex items-center gap-6">
                   {/* Search */}
                   <div className="relative hidden lg:block bg-secondary rounded-[4px] py-2 px-4 w-[243px]">
                       <input 
                           type="text" 
                           placeholder="What are you looking for?"
                           className="bg-transparent text-xs w-full focus:outline-none placeholder:text-gray-500"
                        />
                       <img src="./assets/icons/search.svg" alt="search" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer" />
                   </div>

                   {/* Icons */}
                   <div className="flex items-center gap-4">
                       <Link to="/wishlist"><img src="./assets/icons/heart.svg" alt="wishlist" className="w-6 h-6 hover:scale-110 transition-transform" /></Link>
                       <Link to="/cart"><img src="./assets/icons/shopping-bag.svg" alt="cart" className="w-6 h-6 hover:scale-110 transition-transform" /></Link>
                       <Link to="/account"><img src="./assets/icons/user.svg" alt="user" className="w-6 h-6 hover:scale-110 transition-transform" /></Link>
                   </div>
               </div>
           </div>
        </header>
    )
}
