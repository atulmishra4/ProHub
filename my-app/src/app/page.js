"use client"
import React, {useState} from 'react'
import Image from "next/image";
import {motion, useAnimate} from "framer-motion";
import Link from "next/link";


export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  return (
    /* ---------------- Home Page ---------------- */
     <>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 md:py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Welcome to ProcureHub
          </motion.h2>
          <p className="text-lg text-gray-200 mb-4">
            A transparent and fair Bid Management Company for IT maintenances.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-gray-100"
          >
            <a href="/opportunities">Explore Opportunities</a>
          </motion.button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 text-black bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Transparency",
                desc: "All deals are tracked openly, ensuring fairness between small and large contractors.",
              },
              {
                title: "Equal Opportunity",
                desc: "Small businesses get the same chance as big ones without bias or hidden processes.",
              },
              {
                title: "Bribeless Deals",
                desc: "Built to eliminate corruption and enable purely merit-based contracts.",
              },
              {
                title: "Smart Contracts",
                desc: "Automated agreements powered by blockchain for secure and reliable execution.",
              },
              {
                title: "Analytics Dashboard",
                desc: "Real-time insights into bids, projects, and contractor performance.",
              },
              {
                title: "Verified Contractors  ",
                desc: "All contractors are vetted and verified for quality and trustworthiness.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      
      <section id="how" className=" bg-gray-200 text-black py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Post a Requirement",
                desc: "Organizations create procurement requests with full transparency.",
              },
              {
                step: "2",
                title: "Contractors Bid",
                desc: "Verified contractors place bids openly, without hidden costs.",
              },
              {
                step: "3",
                title: "Fair Selection",
                desc: "Smart algorithms and transparent evaluation ensure the best deal wins.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Join ProcureHub?</h3>
        <p className="mb-6">
          Sign up today and be part of the future of fair procurement.
        </p>
        <motion.button
          id="get-started-btn "
          // onClick={() => setPage("signup")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-gray-100"
        >
          <a href="/signup">Get Started Now</a>
        </motion.button>
      </section>

      {/* Benefits Section */}
      <section className=" bg-gray-200 text-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Benefits for Every Stakeholder
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br bg-white p-8 rounded-xl shadow-lg"
            >
              <h4 className="text-2xl font-bold mb-4 text-blue-800">
                🏢 For Enterprises
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Optimized cost efficiency through competitive bidding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Risk mitigation via contractor verification protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Blockchain-backed audit trails for compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Automated vendor selection saves time and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Real-time performance tracking and analytics</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br bg-white p-8 rounded-xl shadow-lg"
            >
              <h4 className="text-2xl font-bold mb-4 text-green-800">
                👷 For Contractors
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Level playing field regardless of company size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Growth based on technical expertise and performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Access to national opportunities from any location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Build reputation through verified performance ratings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>No bribery required—compete on merit alone</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl text-black font-bold mb-12">What People Say</h3>
          <div className="grid text-black md:grid-cols-2 gap-10">
            {[
              {
                name: "Ravi Kumar",
                feedback:
                  "ProcureHub helped us secure projects without middlemen. It’s a game-changer for small contractors!",
              },
              {
                name: "Neha Sharma",
                feedback:
                  "The transparency of the bidding process makes it easy to trust. Finally, a fair procurement system.",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <p className="italic mb-4">{review.feedback}</p>
                <h5 className="font-semibold text-blue-600">
                  - {review.name}
                </h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* frequently asked question */}
               <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Frequently Asked Questions
          </h3>
          <p className="text-center text-gray-600 mb-12">
            Everything you need to know about ProcureHub
          </p>
          <div className="space-y-4">
            {[
              {
                q: "How does ProcureHub prevent bribery and corruption?",
                a: "We use anonymized bidding, blockchain-backed immutable records, and algorithm-driven selection. Contractors are evaluated purely on technical merit, pricing, and performance history—eliminating human bias and corruption opportunities."
              },
              {
                q: "Can small contractors really compete with large enterprises?",
                a: "Absolutely! Our platform anonymizes all bids during evaluation, so selection is based solely on technical capability, pricing, and service quality—not company size or connections. We've helped hundreds of small contractors win major contracts."
              },
              {
                q: "What types of IT maintenance contracts are available?",
                a: "We cover hardware maintenance, software support, network infrastructure, data center management, cybersecurity services, cloud infrastructure, and more across various industries."
              },
              {
                q: "How are contractors verified?",
                a: "All contractors undergo rigorous verification including business registration checks, technical capability assessment, past performance review, financial stability verification, and compliance certification."
              },
              {
                q: "Is my business data secure on ProcureHub?",
                a: "Yes. We employ enterprise-grade security with encryption, role-based access control, secure APIs, and compliance with data protection standards. All data is stored securely and accessible only to authorized users."
              },
              {
                q: "How does the smart contract system work?",
                a: "Once a bid is selected, terms are automatically converted into blockchain-based smart contracts that execute payments, track milestones, and ensure accountability without manual intervention."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-6 font-semibold text-lg text-gray-800 hover:bg-gray-100 transition flex justify-between items-center"
                >
                  <span>{faq.q}</span>
                  <span className="text-2xl">{activeFaq === i ? '−' : '+'}</span>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
