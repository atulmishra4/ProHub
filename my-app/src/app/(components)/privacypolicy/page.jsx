"use client"
import React from 'react'
import { motion } from 'framer-motion';

export default function page() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-blue-600 mb-6">Privacy Policy</h3>
        <p className="text-md text-justify mb-6 text-gray-700">
            Last updated: October 09, 2025
        </p>
        <h5 className="text-xl font-semibold mb-4 mt-8 text-blue-600">
          1. Information We Collect
        </h5>
        <p className="text-gray-700 mb-6">
          We collect personal information that you provide to us when you register on our platform, such as your name, email address, phone number, and organization details. We also collect non-personal information such as browser type, IP address, and usage data through cookies and similar technologies.
        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">
          2. How We Use Your Information
        </h5>
        <p className="text-gray-700 mb-6">
          We use your information to provide and improve our services, communicate with you, process transactions, and ensure the security of our platform. We may also use your information for marketing purposes, but only with your consent.
        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">   
            3. Data Sharing and Disclosure      
        </h5>
        <p className="text-gray-700 mb-6">
          We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our platform, as well as with legal authorities if required by law.
        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">
          4. Data Security
        </h5>
        <p className="text-gray-700 mb-6">
          We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">
          5. Your Rights
        </h5>
        <p className="text-gray-700 mb-6">  
            You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at privacy@prohub.com.
        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">
          6. Changes to This Policy
        </h5>
        <p className="text-gray-700 mb-6">
          We may update this privacy policy from time to time. Any changes will be effective immediately upon posting on our platform. Your continued use of ProcureHub after any changes constitutes your acceptance of the new policy.
        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">
          7. Contact Us 
        </h5>
        <p className="text-gray-700 mb-6">
          If you have any questions or concerns about this privacy policy, please contact us at mishratul@zohomail.in
        </p>
      </div>
    </section>
  )
}