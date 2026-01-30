import React from 'react';

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-12 md:px-24 lg:px-32 mt-10 mb-20">
        <div className="bg-black text-white p-12 rounded-lg flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col gap-5 max-w-lg">
                <div className="flex items-center gap-6">
                    <img src="./assets/icons/logo.svg" className="w-10 h-10 invert" alt="Apple" /> {/* Placeholder for Apple logo if I had it */}
                    <span className="text-base">iPhone 14 Series</span>
                </div>
                <h1 className="text-5xl font-semibold leading-tight">Up to 10% off Voucher</h1>
                <a href="#" className="flex items-center gap-2 underline underline-offset-8 font-medium mt-2">
                    Shop Now 
                    <img src="./assets/icons/arrow-right.svg" className="w-5 h-5 invert" alt="" />
                </a>
            </div>
            <div className="mt-10 md:mt-0">
                <img src="./assets/images/hero-iphone.png" alt="iPhone 14" className="w-full max-w-[500px]" />
            </div>
        </div>
      </section>

      {/* Categories Placeholder */}
      <section className="container mx-auto px-32 mb-20">
         <h2 className="text-2xl font-bold mb-8">Browse By Category</h2>
         {/* Implement categories grid later */}
      </section>
    </main>
  );
};