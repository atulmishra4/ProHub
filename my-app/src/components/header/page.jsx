"use client"
import React, {useState} from 'react'
import { motion } from 'framer-motion';
import { href } from 'react-router-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function page() {
  const pathname = usePathname();
    const [page, setPage] = useState("home");

  const navLinks = [
    { id: "home", label: "Home", href: "/" },
    { id: "opportunities", label: "Opportunities", href: "/opportunities" },
    { id: "about", label: "About Us", href: "/aboutus" },
    { id: "contact", label: "Contact Us", href: "/contact" },
  ];
  
  return (
    <div className="pb-1 pt-0 bg-gray-50 @media (min-width: 768px) { bg-gray-100 } text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <h1
              className="text-2xl font-bold text-blue-600 cursor-pointer"
              onClick={() => setPage("home")}
            >
              ProcureHub
            </h1>
          </Link>
          <div className="space-x-6 flex md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`hover:text-blue-600 transition-colors ${
                  pathname === link.href ? "text-blue-600 font-semibold" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
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
