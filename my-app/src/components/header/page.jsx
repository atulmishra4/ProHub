"use client"
import React, {useState} from 'react'
import { motion } from 'framer-motion';
import { href } from 'react-router-dom';


export default function page() {
    const [page, setPage] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "opportunities", label: "Opportunities" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];
  
  return (
    <div className="pb-1 pt-0 bg-gray-50 @media (min-width: 768px) { bg-gray-100 } text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => setPage("home")}
          >
            ProcureHub
          </h1>
          <div className="space-x-6 flex md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`hover:text-blue-600 ${
                  page === link.id ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <motion.button
            id="get-started-btn"
            // onClick={() => setPage("/signup")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-700"
          >
              <a href="/signup">Get Started</a>
          </motion.button>
        </div>
      </nav>
    </div>
  )
}
