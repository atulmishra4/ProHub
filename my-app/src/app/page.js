"use client"
import React, {useState} from 'react'
import Image from "next/image";
import {motion, useAnimate} from "framer-motion";
import Link from "next/link";


export default function Home() {
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
        {/* <Link href="/aboutus">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/signup">Sign Up</Link> */}
      </section>
    </>
  );
}
