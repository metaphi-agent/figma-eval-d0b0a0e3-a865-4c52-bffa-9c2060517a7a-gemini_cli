import React from 'react';

export const TopHeader: React.FC = () => {
  return (
    <div className="bg-black text-[var(--color-text-muted)] h-12 flex items-center justify-between px-4 sm:px-12 md:px-24 lg:px-32 text-sm">
      <div className="flex-1 flex justify-center items-center gap-2 text-white">
        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
        <a href="#" className="font-semibold underline">ShopNow</a>
      </div>
      <div className="hidden sm:flex items-center gap-1 text-white cursor-pointer">
        <span>English</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
};