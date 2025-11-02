"use client"
import React from 'react'

export default function page() {
  
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-indigo-800 text-gray-200 pt-14 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4">ProcureHub</h4>
          <p className="text-sm leading-relaxed">
            Empowering transparent, fair, and bribeless IT maintenance contracting 
            in India. Bringing equal opportunities to small and large contractors alike.
          </p>
          <p className="mt-4 text-xs text-gray-400">
            Created by <span className="text-blue-300 font-semibold">Atul Mishra</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-300">Home</button></li>
            <li><a href="/opportunities" className="hover:text-blue-300">Opportunities</a></li>
            <li><a href="/contact" className="hover:text-blue-300">Contact Us</a></li>
            <li><a href="/aboutus" className="hover:text-blue-300">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
          <p className="text-sm">We’d love to hear from you, Reach out anytime.</p>
          <p className="pt-3 text-sm">📧 mishratul@zohomail.in</p>
          <p className="pt-1 text-sm">📞 +91 74588 44711</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin text-xl hover:text-blue-300"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="fab fa-github text-xl hover:text-blue-300"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter text-xl hover:text-blue-300"></i>
            </a>
          </div>
        </div>

        {/* Map */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Our Location</h4>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14291.834716532932!2d82.5294056!3d26.42481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1759164902332!5m2!1sen!2sin" 
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} ProcureHub. All rights reserved.
      </div>
    </footer>
  )
}
