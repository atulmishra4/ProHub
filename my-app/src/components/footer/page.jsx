"use client"
import React, { useState, useEffect } from 'react'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const updateTime = () => {
      const now = new Date()
      const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
      
      const hours = String(istTime.getHours()).padStart(2, '0')
      const minutes = String(istTime.getMinutes()).padStart(2, '0')
      const seconds = String(istTime.getSeconds()).padStart(2, '0')
      
      setCurrentTime(`${hours}:${minutes}:${seconds} IST`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const lastUpdated = "November 4, 2025"
  
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
          <div className="mt-3 pt-3 border-t border-blue-600">
            <p className="text-xs text-gray-300">
              🕐 {mounted ? currentTime : '00:00:00 IST'}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-300 transition-colors">Home</button></li>
            <li><a href="/opportunities" className="hover:text-blue-300 transition-colors">Opportunities</a></li>
            <li><a href="/contact" className="hover:text-blue-300 transition-colors">Contact Us</a></li>
            <li><a href="/aboutus" className="hover:text-blue-300 transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
          <p className="text-sm">We'd love to hear from you. Reach out anytime.</p>
          <p className="pt-3 text-sm">📧 mishratul@zohomail.in</p>
          <p className="pt-1 text-sm">📞 +91 74588 44711</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
              <i className="fab fa-linkedin text-xl hover:text-blue-300"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
              <i className="fab fa-github text-xl hover:text-blue-300"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
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
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-200">
        <p>© {new Date().getFullYear()} ProcureHub. All rights reserved.</p>
        <p className="text-xs text-gray-400 mt-1">Building a corruption-free procurement ecosystem 🇮🇳</p>
      </div>
    </footer>
  )
}