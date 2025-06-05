import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Cursor from './components/ui/Cursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smooth entrance
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
        <div className="animate-pulse text-3xl font-bold text-blue-500">
          Loading<span className="animate-bounce">.</span>
          <span className="animate-bounce delay-100">.</span>
          <span className="animate-bounce delay-200">.</span>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Cursor />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;