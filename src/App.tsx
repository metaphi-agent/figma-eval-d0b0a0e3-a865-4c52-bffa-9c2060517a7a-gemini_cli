import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/blocks/Header';
import { Footer } from './components/blocks/Footer';
import { Home } from './pages/Home';

function App() {
  return (
    <Router basename="./">
      <div className="flex flex-col min-h-screen font-sans text-text bg-bg">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes here */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;