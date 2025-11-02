"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText, Users, Globe, Mail, ChevronDown, ChevronUp } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (index) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter(i => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  const privacyHighlights = [
    {
      icon: <Shield className="text-blue-600" size={32} />,
      title: "Data Protection",
      desc: "Your data is encrypted and stored securely"
    },
    {
      icon: <Eye className="text-green-600" size={32} />,
      title: "Transparency",
      desc: "Clear policies on how we use your information"
    },
    {
      icon: <Lock className="text-purple-600" size={32} />,
      title: "Your Control",
      desc: "You decide what data to share and when"
    },
    {
      icon: <Users className="text-orange-600" size={32} />,
      title: "No Selling",
      desc: "We never sell your personal information"
    }
  ];

  const policySections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: <FileText className="text-blue-600" size={24} />,
      content: `We collect personal information that you provide to us when you register on our platform, such as your name, email address, phone number, and organization details. This includes:

• Account Information: Name, email, phone number, company details
• Profile Data: Business information, certifications, experience
• Transaction Data: Bid details, project information, payment history
• Technical Data: IP address, browser type, device information
• Usage Data: How you interact with our platform

We also collect non-personal information such as browser type, IP address, and usage data through cookies and similar technologies to improve your experience and ensure platform security.`
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: <Globe className="text-green-600" size={24} />,
      content: `We use your information to provide and improve our services, communicate with you, process transactions, and ensure the security of our platform. Specifically:

• Service Delivery: To facilitate bidding, project management, and contractor-company matching
• Communication: To send notifications, updates, and respond to inquiries
• Security: To prevent fraud, verify identities, and maintain platform integrity
• Analytics: To understand usage patterns and improve user experience
• Compliance: To meet legal and regulatory requirements
• Marketing: To send promotional content (only with your consent)

We process your data based on legitimate business interests, contractual necessity, legal obligations, and your consent where required.`
    },
    {
      id: 3,
      title: "Data Sharing and Disclosure",
      icon: <Users className="text-purple-600" size={24} />,
      content: `We do not sell or rent your personal information to third parties. We may share your information in the following limited circumstances:

• Service Providers: With trusted partners who help us operate our platform (cloud hosting, payment processing, email services)
• Business Partners: With companies or contractors when you engage in transactions on our platform
• Legal Compliance: When required by law, court order, or to protect our legal rights
• Business Transfers: In case of merger, acquisition, or sale of assets
• Anonymous Data: Aggregated, non-identifiable data for research and analytics

All third parties are contractually bound to protect your data and use it only for specified purposes. Your bidding information remains anonymous until you're selected for a project.`
    },
    {
      id: 4,
      title: "Data Security",
      icon: <Lock className="text-red-600" size={24} />,
      content: `We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction:

• Encryption: All data transmissions use SSL/TLS encryption
• Access Controls: Role-based access with multi-factor authentication
• Regular Audits: Security assessments and vulnerability testing
• Secure Storage: Data stored in certified secure facilities
• Employee Training: Staff trained on data protection best practices
• Incident Response: Procedures for detecting and responding to breaches

However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security. We encourage you to use strong passwords and protect your account credentials.`
    },
    {
      id: 5,
      title: "Your Rights and Choices",
      icon: <Eye className="text-indigo-600" size={24} />,
      content: `You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data:

• Access: Request a copy of your personal data we hold
• Correction: Update inaccurate or incomplete information
• Deletion: Request deletion of your account and data (subject to legal retention requirements)
• Portability: Receive your data in a structured, machine-readable format
• Objection: Object to processing based on legitimate interests
• Restriction: Limit how we use your data in certain circumstances
• Withdraw Consent: Opt-out of marketing communications at any time

To exercise these rights, please contact us at privacy@procurehub.com. We'll respond within 30 days.`
    },
    {
      id: 6,
      title: "Cookies and Tracking",
      icon: <Globe className="text-orange-600" size={24} />,
      content: `We use cookies and similar technologies to enhance your experience on our platform:

• Essential Cookies: Required for basic site functionality
• Performance Cookies: Help us understand how visitors use our site
• Functional Cookies: Remember your preferences and settings
• Targeting Cookies: Deliver relevant advertisements (with your consent)

You can control cookies through your browser settings. However, disabling certain cookies may limit platform functionality. We also use analytics tools like Google Analytics to understand user behavior and improve our services.`
    },
    {
      id: 7,
      title: "Data Retention",
      icon: <FileText className="text-teal-600" size={24} />,
      content: `We retain your personal data only as long as necessary for the purposes outlined in this policy:

• Active Accounts: Data retained while your account is active
• Inactive Accounts: May be deleted after 2 years of inactivity (with prior notice)
• Transaction Records: Retained for 7 years for legal and accounting purposes
• Marketing Data: Retained until you unsubscribe
• Legal Obligations: Data may be retained longer if required by law

After retention periods expire, we securely delete or anonymize your data. You can request earlier deletion by contacting us.`
    },
    {
      id: 8,
      title: "Children's Privacy",
      icon: <Shield className="text-pink-600" size={24} />,
      content: `ProcureHub is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately, and we will take steps to delete such information from our systems.`
    },
    {
      id: 9,
      title: "International Data Transfers",
      icon: <Globe className="text-cyan-600" size={24} />,
      content: `Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place:

• Standard Contractual Clauses approved by relevant authorities
• Adequacy decisions by data protection authorities
• Certified data protection frameworks

By using our platform, you consent to the transfer of your information to our facilities and service providers globally.`
    },
    {
      id: 10,
      title: "Changes to This Policy",
      icon: <FileText className="text-amber-600" size={24} />,
      content: `We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. Any changes will be effective immediately upon posting on our platform.

• Material Changes: We'll notify you via email or prominent notice on our platform
• Minor Updates: Posted directly to this page
• Effective Date: Always displayed at the top of this policy
• Your Continued Use: Constitutes acceptance of the updated policy

We encourage you to review this policy periodically to stay informed about how we protect your information.`
    },
    {
      id: 11,
      title: "Contact Us",
      icon: <Mail className="text-blue-600" size={24} />,
      content: `If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:

• Email: mishratul@zohomail.in
• Subject Line: "Privacy Policy Inquiry"
• Response Time: We aim to respond within 48 hours

For data protection inquiries, you may also contact your local data protection authority.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-4 rounded-2xl">
              <Shield className="text-white" size={48} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-600 text-lg mb-2">Your privacy is our priority</p>
          <p className="text-sm text-gray-500">Last updated: October 09, 2025</p>
        </motion.div>

        {/* Privacy Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Commitment to You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center p-4 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="flex justify-center mb-3">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 mb-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-blue-100 leading-relaxed">
            At ProcureHub, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. 
            By using ProcureHub, you agree to the terms outlined in this policy. Please read it carefully to understand our practices 
            regarding your personal data and how we will treat it.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-4 mb-12">
          {policySections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-left">{section.title}</h3>
                </div>
                {expandedSections.includes(index) ? (
                  <ChevronUp className="text-gray-400" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400" size={24} />
                )}
              </button>
              
              {expandedSections.includes(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="pl-16 pr-8">
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Actions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'mailto:mishratul@zohomail.in?subject=Privacy Policy Inquiry'}
              className="bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contact Us
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setExpandedSections(policySections.map((_, i) => i))}
              className="bg-gray-200 text-gray-700 px-6 py-4 rounded-xl font-semibold hover:bg-gray-300 transition flex items-center justify-center gap-2"
            >
              <ChevronDown size={20} />
              Expand All
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/termsandconditions'}
              className="bg-indigo-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              Terms & Conditions
            </motion.button>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-600">
            By using ProcureHub, you acknowledge that you have read and understood this Privacy Policy.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            For questions about this policy, email us at{" "}
            <a href="mailto:mishratul@zohomail.in" className="text-blue-600 underline">
              mishratul@zohomail.in
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}