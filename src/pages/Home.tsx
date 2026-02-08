import React from 'react';

export default function Home() {
    return (
        <div className="container-custom pt-10 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-[230px_1fr] gap-10">
                {/* Categories Sidebar */}
                <aside className="hidden lg:flex flex-col gap-4 border-r border-gray-100 pr-6 pt-2">
                    {['Woman\'s Fashion', 'Men\'s Fashion', 'Electronics', 'Home & Lifestyle', 'Medicine', 'Sports & Outdoor', 'Baby\'s & Toys', 'Groceries & Pets', 'Health & Beauty'].map(cat => (
                        <div key={cat} className="flex justify-between items-center cursor-pointer hover:text-primary transition-colors text-black text-base">
                            <span>{cat}</span>
                            {(cat.includes('Fashion')) && <img src="./assets/icons/arrow-right.svg" className="w-6 h-6" alt="arrow" />}
                        </div>
                    ))}
                </aside>

                {/* Hero Banner */}
                <div className="bg-black text-white w-full h-[344px] relative overflow-hidden flex items-center px-6 md:px-16 mt-2">
                     <div className="flex flex-col gap-5 z-10 max-w-full md:max-w-[50%]">
                         <div className="flex items-center gap-6">
                            {/* Placeholder for Apple Logo if missing */}
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold"></div>
                            <span className="text-base font-light">iPhone 14 Series</span>
                         </div>
                         <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-wide">Up to 10% off Voucher</h1>
                         <button className="flex items-center gap-2 underline underline-offset-8 hover:text-gray-300 transition-colors w-fit font-medium">
                             Shop Now 
                             <img src="./assets/icons/arrow-right.svg" className="w-5 h-5 invert" alt="arrow" />
                         </button>
                     </div>
                     
                     <img src="./assets/images/hero-iphone.png" alt="hero" className="absolute right-0 top-4 object-contain h-[340px]" />
                     
                     {/* Pagination Dots */}
                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                         <div className="w-3 h-3 rounded-full bg-gray-500 opacity-50 cursor-pointer"></div>
                         <div className="w-3 h-3 rounded-full bg-primary border-2 border-white cursor-pointer"></div>
                         <div className="w-3 h-3 rounded-full bg-gray-500 opacity-50 cursor-pointer"></div>
                         <div className="w-3 h-3 rounded-full bg-gray-500 opacity-50 cursor-pointer"></div>
                         <div className="w-3 h-3 rounded-full bg-gray-500 opacity-50 cursor-pointer"></div>
                     </div>
                </div>
            </div>
            
            {/* Sections placeholder */}
        </div>
    );
}
