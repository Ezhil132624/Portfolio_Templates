import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Ezhilnilavan E
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-blue-800" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-blue-800" />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="absolute top-5 right-5">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
