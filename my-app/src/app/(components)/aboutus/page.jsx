"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Shield, Zap, Users, TrendingUp, Award, Mail, Sparkles, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: <Shield className="text-blue-600" size={28} />,
      title: "Transparency",
      desc: "Open, algorithm-driven comparisons replace opaque negotiations"
    },
    {
      icon: <Users className="text-green-600" size={28} />,
      title: "Equal Opportunity",
      desc: "Level playing field for contractors of all sizes"
    },
    {
      icon: <Zap className="text-purple-600" size={28} />,
      title: "Efficiency",
      desc: "Automated workflows and digital verification"
    },
    {
      icon: <Award className="text-orange-600" size={28} />,
      title: "Merit-Based",
      desc: "Selection based purely on capability and pricing"
    }
  ];

  const stats = [
    { number: "100%", label: "Transparent Bidding" },
    { number: "Zero", label: "Tolerance for Bribery" },
    { number: "24/7", label: "Platform Access" },
    { number: "Fair", label: "For Everyone" }
  ];

  const timeline = [
    {
      icon: <Lightbulb className="text-yellow-600" size={24} />,
      title: "The Problem",
      desc: "Small contractors sidelined due to lack of connections. Businesses overpaying for services. Bribery and favoritism dominating procurement."
    },
    {
      icon: <Sparkles className="text-purple-600" size={24} />,
      title: "The Vision",
      desc: "A trustworthy, transparent marketplace where both sides engage fairly based on merit, not connections."
    },
    {
      icon: <CheckCircle className="text-green-600" size={24} />,
      title: "The Solution",
      desc: "ProcureHub - democratizing IT procurement through anonymity, transparency, and data-driven decision-making."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About ProcureHub
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing IT Procurement in India
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              An advanced digital platform engineered to eliminate corruption, bias, and inefficiencies 
              in IT maintenance contracting through transparency, anonymity, and merit-based selection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ProcureHub tackles systemic problems in India's contracting culture through 
              innovative technology and ethical principles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white"
            >
              <Target size={40} className="mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-blue-100 leading-relaxed mb-4">
                To democratize IT maintenance procurement by removing barriers that restrict 
                small and medium contractors from competing with large enterprises.
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Enable equal access for all contractor sizes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Eliminate hidden costs and favoritism</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Promote anonymous, merit-based competition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Build trust through transparency and fairness</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <TrendingUp size={40} className="text-green-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A future where India sets global benchmarks for fair, corruption-free IT procurement practices.
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Bribeless Procurement</h4>
                    <p className="text-sm text-gray-600">Contracts awarded based on merit, not connections</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Equal Opportunity</h4>
                    <p className="text-sm text-gray-600">Urban and rural contractors compete on level ground</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Award size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Data-Driven Decisions</h4>
                    <p className="text-sm text-gray-600">Businesses find reliable partners confidently</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Origin Story</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ProcureHub was born from the simple realization that fairness in procurement 
              should be a right, not a privilege.
            </p>
          </motion.div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="bg-gray-100 p-4 rounded-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How ProcureHub Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Anonymous Bidding",
                desc: "Contractors compete without revealing identities, eliminating bias and favoritism.",
                color: "blue"
              },
              {
                step: "02",
                title: "Algorithm-Driven Selection",
                desc: "Bids evaluated on merit—pricing, capability, and reliability ratings.",
                color: "green"
              },
              {
                step: "03",
                title: "Secure Execution",
                desc: "Blockchain-backed audit trails ensure transparency and accountability.",
                color: "purple"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className={`text-5xl font-bold text-${item.color}-600 mb-4 opacity-20`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Socioeconomic Impact</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Beyond technology, ProcureHub drives meaningful change in India's business ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Heart className="text-red-500" size={32} />,
                title: "Encourages Entrepreneurship",
                desc: "Dismantles bribery-driven contracting, fostering a healthier business environment"
              },
              {
                icon: <TrendingUp className="text-green-500" size={32} />,
                title: "Reduces Costs",
                desc: "Transparent pricing eliminates inefficiencies that inflate service costs"
              },
              {
                icon: <Users className="text-blue-500" size={32} />,
                title: "Decentralizes Opportunity",
                desc: "Regional contractors compete nationally, spreading economic growth"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Built for Scale & Security</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Architecture</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Modular, service-oriented design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Secure APIs for all operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Blockchain-backed audit trails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Cryptographic anonymization</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">Security</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Shield size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Role-based access control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Immutable transaction logging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>GST & compliance integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Digital signature verification</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={48} className="text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Meet the Creator</h2>
            <p className="text-lg text-indigo-100 mb-6 max-w-2xl mx-auto">
              Hi, I'm <span className="font-bold text-white">Atul Kumar Mishra</span>, the creator of ProcureHub. 
              I started this project with a vision to eliminate unfair practices in procurement and create 
              equal opportunities for all. Inspired by personal experiences and a passion for technology, 
              I aim to make procurement simple, transparent, and impactful for everyone.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { window.location.href = "mailto:mishratul@zohomail.in"; }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl shadow-lg font-semibold hover:bg-indigo-50 transition-all flex items-center gap-2 mx-auto"
            >
              <Mail size={20} />
              Contact Creator
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Procurement?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of companies and contractors who trust ProcureHub for fair, transparent bidding.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/signup'}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/opportunities'}
                className="bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-300 transition"
              >
                Explore Opportunities
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}