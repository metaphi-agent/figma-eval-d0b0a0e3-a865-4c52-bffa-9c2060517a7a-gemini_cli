import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-6">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
        {/* Col 1 */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold tracking-wide">Exclusive</h3>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-medium">Subscribe</h4>
            <p className="text-base font-light">Get 10% off your first order</p>
            <div className="relative w-fit border border-white rounded-[4px] px-4 py-3 bg-transparent">
                <input type="email" placeholder="Enter your email" className="bg-transparent text-white placeholder:text-gray-500 focus:outline-none w-[180px] text-sm" />
                <img src="./assets/icons/send.svg" alt="send" className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-medium">Support</h4>
          <div className="flex flex-col gap-4 text-base font-light opacity-80">
            <p>111 Bijoy sarani, Dhaka,<br/>DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-medium">Account</h4>
          <div className="flex flex-col gap-4 text-base font-light opacity-80">
             <a href="/account" className="hover:underline">My Account</a>
             <a href="/login" className="hover:underline">Login / Register</a>
             <a href="/cart" className="hover:underline">Cart</a>
             <a href="/wishlist" className="hover:underline">Wishlist</a>
             <a href="/shop" className="hover:underline">Shop</a>
          </div>
        </div>
        
        {/* Col 4 */}
         <div className="flex flex-col gap-6">
          <h4 className="text-xl font-medium">Quick Link</h4>
          <div className="flex flex-col gap-4 text-base font-light opacity-80">
             <a href="/privacy" className="hover:underline">Privacy Policy</a>
             <a href="/terms" className="hover:underline">Terms Of Use</a>
             <a href="/faq" className="hover:underline">FAQ</a>
             <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </div>

        {/* Col 5 */}
        <div className="flex flex-col gap-6">
           <h4 className="text-xl font-medium">Download App</h4>
           <div className="flex flex-col gap-2">
               <p className="text-xs text-gray-400 font-light">Save $3 with App New User Only</p>
               <div className="flex gap-2 items-center">
                   {/* QR Code */}
                   <img src="./assets/images/qrcode.png" alt="qrcode" className="w-[80px] h-[80px]" />
                   <div className="flex flex-col gap-2 justify-between h-[80px]">
                       <img src="./assets/images/google-play.png" alt="google-play" className="h-[36px] w-[110px] object-cover" />
                       <img src="./assets/images/app-store.png" alt="app-store" className="h-[36px] w-[110px] object-cover" />
                   </div>
               </div>
           </div>
           <div className="flex gap-6 mt-2">
               <img src="./assets/icons/facebook.svg" alt="facebook" className="cursor-pointer hover:scale-110 transition-transform w-6 h-6 invert" />
               <img src="./assets/icons/twitter.svg" alt="twitter" className="cursor-pointer hover:scale-110 transition-transform w-6 h-6 invert" />
               <img src="./assets/icons/instagram.svg" alt="instagram" className="cursor-pointer hover:scale-110 transition-transform w-6 h-6 invert" />
               <img src="./assets/icons/linkedin.svg" alt="linkedin" className="cursor-pointer hover:scale-110 transition-transform w-6 h-6 invert" />
           </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-4 text-center text-gray-500 text-sm opacity-60">
         <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};
