import React from 'react';

export const TopHeader = () => {
  return (
    <div className="bg-black text-white py-3 text-sm hidden md:block">
      <div className="container-custom flex justify-between items-center h-full">
        <div className="flex-1 flex justify-center items-center gap-2">
          <span className="font-light opacity-90">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
          <button className="font-semibold underline hover:opacity-80 cursor-pointer">ShopNow</button>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span>English</span>
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M11 1L6 6L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};
