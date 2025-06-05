import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Ezhil132624', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/ezhilnilavan-e', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: ' https://x.com/Ezhilnilav1326', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:your.ezhilnilavane03@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
              Follow Me
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              This portfolio is a reflection of my journey, skills, and passion for development.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {year} Ezhil. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;