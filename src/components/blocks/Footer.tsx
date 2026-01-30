import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-6">
      <div className="container mx-auto px-4 sm:px-12 md:px-24 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
        {/* Subscribe */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold">Exclusive</h3>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium">Subscribe</p>
            <p className="text-base">Get 10% off your first order</p>
            <div className="relative w-fit">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border border-white rounded px-4 py-3 text-white placeholder:text-gray-400 w-[217px] focus:outline-none"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2">
                <img src="./assets/icons/send.svg" alt="Send" className="w-6 h-6 invert" />
              </button>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-medium">Support</h3>
          <ul className="flex flex-col gap-4 text-base">
            <li>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        {/* Account */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-medium">Account</h3>
          <ul className="flex flex-col gap-4 text-base">
            <li><a href="#" className="hover:text-gray-300">My Account</a></li>
            <li><a href="#" className="hover:text-gray-300">Login / Register</a></li>
            <li><a href="#" className="hover:text-gray-300">Cart</a></li>
            <li><a href="#" className="hover:text-gray-300">Wishlist</a></li>
            <li><a href="#" className="hover:text-gray-300">Shop</a></li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-medium">Quick Link</h3>
          <ul className="flex flex-col gap-4 text-base">
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-medium">Download App</h3>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-400">Save $3 with App New User Only</p>
            <div className="flex gap-2 items-center">
              <img src="./assets/images/qrcode.png" alt="QR Code" className="w-[80px] h-[80px]" />
              <div className="flex flex-col gap-2">
                <img src="./assets/images/google-play.png" alt="Google Play" className="w-[110px] h-auto" />
                <img src="./assets/images/app-store.png" alt="App Store" className="w-[110px] h-auto" />
              </div>
            </div>
          </div>
          <div className="flex gap-6 mt-2">
            <a href="#"><img src="./assets/icons/facebook.svg" alt="Facebook" className="w-6 h-6 invert" /></a>
            <a href="#"><img src="./assets/icons/twitter.svg" alt="Twitter" className="w-6 h-6 invert" /></a>
            <a href="#"><img src="./assets/icons/instagram.svg" alt="Instagram" className="w-6 h-6 invert" /></a>
            <a href="#"><img src="./assets/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 invert" /></a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};