"use client"

import React from 'react'
import { motion } from 'framer-motion';

export default function page() {
  return (
      <section className="py-16 bg-gray-100">
      <div className="max-w-3xl font-semibold mx-auto px-6">
        <h3 className="text-3xl font-bold text-gray-700 text-center mb-8">Contact Us</h3>
        <form className="bg-white p-8 text-gray-800 font-semibold rounded-xl shadow-md space-y-6">
          <div>
            <label className="block text-left font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-left font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-left font-medium mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
          >
            Send Message
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { setPage("home"); }}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 float-right"
          >
            Cancel
          </motion.button>
        </form>
      </div>
    </section>
  )
}
