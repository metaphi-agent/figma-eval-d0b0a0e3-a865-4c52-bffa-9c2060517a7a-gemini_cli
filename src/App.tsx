import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopHeader } from './components/blocks/TopHeader';
import { Header } from './components/blocks/Header';
import { Footer } from './components/blocks/Footer';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen font-sans text-black">
        <TopHeader />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<div className="text-center py-20">Contact Page (Coming Soon)</div>} />
              <Route path="/about" element={<div className="text-center py-20">About Page (Coming Soon)</div>} />
              <Route path="/signup" element={<div className="text-center py-20">Sign Up Page (Coming Soon)</div>} />
              <Route path="/login" element={<div className="text-center py-20">Login Page (Coming Soon)</div>} />
              <Route path="/cart" element={<div className="text-center py-20">Cart Page (Coming Soon)</div>} />
              <Route path="/wishlist" element={<div className="text-center py-20">Wishlist Page (Coming Soon)</div>} />
              <Route path="/account" element={<div className="text-center py-20">Account Page (Coming Soon)</div>} />
              <Route path="*" element={<div className="text-center py-20">404 Not Found</div>} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
