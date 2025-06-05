import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      heroRef.current.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${y * -2}deg)`;
    };

    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div 
          ref={heroRef}
          className="max-w-5xl mx-auto text-center transition-transform duration-200 ease-out"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            <span className="block">Hi There, I'm Ezhilnilavan E</span>
            <span className="block mt-2">Frontend Developer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I create beautiful, high-performance web experiences with modern technologies.
            Passionate about crafting intuitive user interfaces and solving complex problems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button href="#contact" primary>
              Get in Touch
            </Button>
            <Button href="#projects">
              View My Work
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-16">
            <a 
              href="https://github.com/Ezhil132624" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
              aria-label="GitHub"
            >
              <GitHub className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ezhilnilavan-e.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </a>
            <a 
              href="mailto:your.ezhilnilavane03@gmail.com" 
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;