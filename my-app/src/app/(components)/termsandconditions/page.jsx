"use client"
import React from 'react'
import { motion } from 'framer-motion';

export default function page() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-blue-600 mb-6">Terms and Conditions</h3>
        <p className="text-md text-justify mb-6 text-gray-700">
            Last updated: October 09, 2025
        </p>
        <h5 className="text-xl font-semibold mb-4 mt-8 text-blue-600">
          1. Agreement to our Legal Terms
        </h5>
        <p className="text-gray-700 mb-6">
            We are ProcureHub ('company', 'we', 'our', 'us'), we operate the website https://procurehub.vercel.app/ (the 'Site'), as well as any other related products and services that refers or link to these legal terms (the 'Legal Terms')(collectively, the 'Services').

        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">
          2. User Responsibilities
        </h5>
        <p className="text-gray-700 mb-6">
          You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information when creating an account.
        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">
          3. Prohibited Activities
        </h5>
        <p className="text-gray-700 mb-6">
          You agree not to engage in any of the following prohibited activities: (a) violating any applicable laws or regulations; (b) infringing on the intellectual property rights of others; (c) transmitting harmful or malicious code; (d) attempting to gain unauthorized access to our systems or networks; (e) engaging in any activity that disrupts or interferes with the normal operation of our platform.
        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">
          4. Intellectual Property
        </h5>
        <p className="text-gray-700 mb-6">
          All content on ProcureHub, including text, graphics, logos, and software, is the property of ProcureHub or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.
        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">
          5. Limitation of Liability
        </h5>
        <p className="text-gray-700 mb-6">
          ProcureHub is provided "as is" and we make no warranties regarding the accuracy, reliability, or availability of the platform.    To the fullest extent permitted by law, we shall not be liable for any damages arising from your use of or inability to use the platform.
        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">
          6. Changes to Terms
        </h5>
        <p className="text-gray-700 mb-6">
          We reserve the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting on our platform. Your continued use of ProcureHub after any changes constitutes your acceptance of the new terms.
        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">
          7. Governing Law
        </h5>
        <p className="text-gray-700 mb-6">
          These terms and conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
        </p>
        <h5 className="text-xl font-semibold mb-4 text-blue-600">
          8. Contact Us 
        </h5>
        <p className="text-gray-700 mb-6">
          If you have any questions or concerns about these terms and conditions, please contact us at support@procurehub.com.
        </p>
         <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { window.location.href = "mailto:support@procurehub.com"; }}
        >
          Contact Support
        </motion.button> 
        </div>
    </section>
  )
}
