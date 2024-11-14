import React from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-black bg-clip-text text-transparent">
            Frida Ruh
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-gray-900 hover:text-primary-600 transition-colors">Projects</a>
            <a href="#about" className="text-gray-900 hover:text-primary-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-900 hover:text-primary-600 transition-colors">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <a href="#projects" className="text-gray-900 hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#about" className="text-gray-900 hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>About</a>
              <a href="#contact" className="text-gray-900 hover:text-primary-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
              <div className="flex items-center space-x-4 pt-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}