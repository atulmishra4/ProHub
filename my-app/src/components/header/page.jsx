"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { href } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  
  const navLinks = [
    { id: "home", label: "Home", href: "/" },
    { id: "opportunities", label: "Opportunities", href: "/opportunities" },
    { id: "about", label: "About Us", href: "/aboutus" },
    { id: "contact", label: "Contact Us", href: "/contact" },
    { id: "termsandcondition", label:"Terms & Conditions ", href:"/termsandconditions"},
    { id: "privacypolicy", label:" Privacy Policy", href:"/privacypolicy"},
  ];
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleNavClick = (href) => {
    setCurrentPath(href);
    setIsMenuOpen(false);
  };
  
  return (
    <div className="pb-1 pt-0 bg-gray-50 md:bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" onClick={() => handleNavClick('/')}>
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
              ProcureHub
            </h1>
          </a>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`hover:text-blue-600 transition-colors ${
                  currentPath === link.href ? "text-blue-600 font-semibold" : "text-gray-700"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Get Started Button - Hidden on mobile */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-700"
          >
            <a href="/signup">Get Started</a>
          </motion.button>

          {/* Mobile Menu Button - Hidden on desktop */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-3 px-6">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`block px-4 py-2 rounded-md transition-colors ${
                      currentPath === link.href 
                        ? "bg-blue-50 text-blue-600 font-semibold" 
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2">
                  <a
                    href="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-700"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}