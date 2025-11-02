"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageSquare, User } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      details: "mishratul@zohomail.in",
      link: "mailto:mishratul@zohomail.in"
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Phone",
      details: "+91 7458844711",
      link: "tel:+917458844711"
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Location",
      details: "MCAET Akbarpur Ambedkarnagar, Uttar Pradesh, India",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Get in Touch</h1>
          <p className="text-gray-600 text-lg">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition"
                  >
                    <div className="bg-gray-100 p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-sm text-blue-600 hover:underline">
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-600">{info.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-6 text-white">
              <MessageSquare size={32} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Need Quick Help?</h3>
              <p className="text-blue-100 text-sm mb-4">
                Check our FAQ section for instant answers to common questions.
              </p>
              <a 
                href="/"
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                View FAQs
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-red-600">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                          errors.name ? 'border-red-500' : 'border-gray-200'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />{errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                          errors.email ? 'border-red-500' : 'border-gray-200'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} />{errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows="6"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />{errors.message}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mt-1">{formData.message.length} characters</p>
                </div>

                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="text-green-600" size={24} />
                    <div>
                      <h4 className="font-semibold text-green-900">Message Sent Successfully!</h4>
                      <p className="text-sm text-green-700">We'll get back to you as soon as possible.</p>
                    </div>
                  </motion.div>
                )}

                <div className="flex gap-4">
                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={() => setFormData({ name: "", email: "", phone: "", subject: "", message: "" })}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition"
                  >
                    Clear
                  </motion.button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this message, you agree to our{" "}
                  <a href="/privacypolicy" className="text-blue-600 underline">Privacy Policy</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose ProcureHub?</h3>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              We're committed to providing transparent, fair, and efficient procurement solutions. 
              Our team is here to support you every step of the way.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Fast Response", desc: "We aim to respond within 24 hours" },
                { title: "Expert Support", desc: "Our team has years of industry experience" },
                { title: "24/7 Availability", desc: "Submit inquiries anytime, anywhere" }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}