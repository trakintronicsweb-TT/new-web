import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ProjectBooking = lazy(() => import('./pages/ProjectBooking'));
const Contact = lazy(() => import('./pages/Contact'));

const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-gray-950">
    <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projectbooking" element={<ProjectBooking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
