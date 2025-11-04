"use client"
import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence} from "framer-motion";


export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const hasAgreed = localStorage.getItem('procurehub_terms_agreed');
    if (!hasAgreed) {
      setShowModal(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAgree = () => {
    if (agreedToTerms) {
      localStorage.setItem('procurehub_terms_agreed', 'true');
      setShowModal(false);
      document.body.style.overflow = 'unset';
    }
  };

  const handleDisagree = () => {
    alert('You must agree to the terms to use ProcureHub. Redirecting...');
    window.location.href = 'https://google.com';
  };

  return (
    <>
      {/* Enhanced Modal Popup */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Animated Background Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {/* Animated particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                    initial={{ 
                      x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0, 
                      y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0
                    }}
                    animate={{ 
                      y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : 0,
                      x: typeof window !== 'undefined' ? [null, Math.random() * window.innerWidth] : 0,
                    }}
                    transition={{ 
                      duration: Math.random() * 10 + 10, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-400/20 to-transparent rounded-tr-full"></div>

              {/* Progress Steps */}
              <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-6">
                <div className="flex justify-between items-center mb-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center flex-1">
                      <motion.div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                          currentStep >= step ? 'bg-white text-blue-600' : 'bg-white/30 text-white'
                        }`}
                        animate={{ scale: currentStep === step ? 1.1 : 1 }}
                      >
                        {step}
                      </motion.div>
                      {step < 3 && (
                        <div className={`flex-1 h-1 mx-2 rounded ${currentStep > step ? 'bg-white' : 'bg-white/30'}`}></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-white">
                  <motion.h2 
                    key={currentStep}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold mb-2"
                  >
                    {currentStep === 1 && "🎉 Welcome to ProcureHub!"}
                    {currentStep === 2 && "📋 Terms & Conditions"}
                    {currentStep === 3 && "✅ Final Agreement"}
                  </motion.h2>
                  <p className="text-blue-100 text-sm">
                    {currentStep === 1 && "India's first transparent & corruption-free procurement platform"}
                    {currentStep === 2 && "Please review our policies carefully"}
                    {currentStep === 3 && "Confirm your agreement to proceed"}
                  </p>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[calc(92vh-300px)] px-8 py-6">
                <AnimatePresence mode="wait">
                  {/* Step 1: Welcome & Beta Notice */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="space-y-6"
                    >
                      {/* Beta Badge */}
                      <motion.div 
                        className="relative bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 p-6 rounded-2xl overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300/20 rounded-full -mr-16 -mt-16"></div>
                        <div className="relative flex items-start">
                          <span className="text-5xl mr-4">🚀</span>
                          <div>
                            <h3 className="font-bold text-xl text-yellow-800 mb-2 flex items-center">
                              Beta Testing Phase
                              <span className="ml-2 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs rounded-full font-bold">NEW</span>
                            </h3>
                            <p className="text-yellow-700 leading-relaxed">
                              You are among the first to experience ProcureHub! Some features are still being perfected. 
                              Your feedback will help shape the future of transparent procurement in India.
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Key Highlights */}
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { icon: "🛡️", title: "100% Secure", desc: "Enterprise-grade encryption" },
                          { icon: "⚖️", title: "Fair & Equal", desc: "Merit-based selection only" },
                          { icon: "🚫", title: "Zero Bribery", desc: "Corruption-free guarantee" }
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl text-center border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                          >
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <h4 className="font-bold text-blue-900 mb-1">{item.title}</h4>
                            <p className="text-sm text-blue-700">{item.desc}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* What You'll Get */}
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl text-white">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <span className="text-2xl mr-2">🎁</span>
                          What You will Get Access To
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            "Live bidding opportunities across India",
                            "AI-powered contractor matching",
                            "Blockchain-backed transparency",
                            "Real-time analytics dashboard",
                            "Smart contract automation",
                            "24/7 support & guidance"
                          ].map((feature, i) => (
                            <motion.div 
                              key={i}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <span className="text-green-300 mr-2 text-xl">✓</span>
                              <span className="text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Terms & Conditions */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="space-y-5"
                    >
                      {[
                        {
                          icon: "🔍",
                          title: "Complete Transparency",
                          desc: "Every bid, contract, and transaction is recorded on an immutable blockchain ledger. All processes are visible and auditable.",
                          color: "blue"
                        },
                        {
                          icon: "🚫",
                          title: "Zero Tolerance for Corruption",
                          desc: "Any bribery attempt, unfair practice, or corruption will result in immediate permanent ban and legal prosecution.",
                          color: "red"
                        },
                        {
                          icon: "✅",
                          title: "Verified Information Only",
                          desc: "All business details must be accurate and verifiable. Government IDs, licenses, and certifications are validated.",
                          color: "green"
                        },
                        {
                          icon: "🔒",
                          title: "Enterprise Data Security",
                          desc: "Military-grade encryption protects your data. We never share information without explicit consent.",
                          color: "purple"
                        },
                        {
                          icon: "⚖️",
                          title: "Merit-Based Competition",
                          desc: "Company size doesn't matter. Small and large contractors compete equally based on capability and pricing.",
                          color: "indigo"
                        },
                        {
                          icon: "📝",
                          title: "Legally Binding Contracts",
                          desc: "Accepted bids become enforceable legal agreements. Bid responsibly with realistic commitments.",
                          color: "orange"
                        },
                        {
                          icon: "👤",
                          title: "Age & Authorization",
                          desc: "You must be 18+ and legally authorized to represent your organization in business dealings.",
                          color: "teal"
                        }
                      ].map((term, i) => (
                        <motion.div
                          key={i}
                          className="bg-white border-l-4 border-blue-500 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.08 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <div className="flex items-start">
                            <span className="text-4xl mr-4 flex-shrink-0">{term.icon}</span>
                            <div>
                              <h4 className="font-bold text-lg text-gray-900 mb-2">{term.title}</h4>
                              <p className="text-sm text-gray-700 leading-relaxed">{term.desc}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      {/* Privacy Notice */}
                      <div className="bg-gray-800 text-white p-6 rounded-2xl">
                        <h4 className="font-bold text-lg mb-3 flex items-center">
                          <span className="mr-2">🔐</span>
                          Privacy & Cookie Policy
                        </h4>
                        <p className="text-sm text-gray-300 leading-relaxed mb-3">
                          We use essential cookies for functionality and analytics to improve your experience. 
                          By proceeding, you consent to our cookie usage.
                        </p>
                        <div className="flex gap-3">
                          <a href="/privacy" className="text-blue-400 hover:text-blue-300 text-sm font-semibold underline">
                            Privacy Policy
                          </a>
                          <span className="text-gray-500">•</span>
                          <a href="/terms" className="text-blue-400 hover:text-blue-300 text-sm font-semibold underline">
                            Terms of Service
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Final Agreement */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="space-y-6"
                    >
                      {/* Contact Card */}
                      <motion.div 
                        className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8 rounded-2xl relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                        <div className="relative">
                          <h4 className="text-2xl font-bold mb-4 flex items-center">
                            <span className="mr-3 text-3xl">💬</span>
                            Need Help? We arre Here!
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                              <span className="text-2xl mr-3">📧</span>
                              <div>
                                <div className="text-xs text-blue-200">Email Us</div>
                                <div className="font-bold">mishratul@zohomail.in</div>
                              </div>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                              <span className="text-2xl mr-3">📞</span>
                              <div>
                                <div className="text-xs text-blue-200">Call Us</div>
                                <div className="font-bold">+91 74588 44711</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Summary Checklist */}
                      <div className="bg-green-50 border-2 border-green-300 p-6 rounded-2xl">
                        <h4 className="font-bold text-xl text-green-900 mb-4 flex items-center">
                          <span className="mr-2">📋</span>
                          Quick Summary - You Agree To:
                        </h4>
                        <div className="space-y-2">
                          {[
                            "Operate with complete transparency and honesty",
                            "Never engage in bribery or corrupt practices",
                            "Provide accurate and verifiable information",
                            "Compete fairly based on merit and capability",
                            "Honor all contracts and commitments",
                            "Comply with all legal requirements and regulations"
                          ].map((item, i) => (
                            <motion.div 
                              key={i}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <span className="text-green-600 mr-3 text-xl font-bold">✓</span>
                              <span className="text-green-900 font-medium">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Agreement Checkbox */}
                      <motion.div 
                        className="bg-white border-2 border-blue-300 p-6 rounded-2xl"
                        whileHover={{ boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)" }}
                      >
                        <label className="flex items-start cursor-pointer group">
                          <motion.input
                            type="checkbox"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="mt-1 mr-4 w-6 h-6 text-blue-600 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-200 cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          />
                          <span className="text-gray-800 leading-relaxed group-hover:text-blue-600 transition-colors font-medium">
                            I have thoroughly read and understood all terms, conditions, and policies. 
                            I confirm that I am 18+ years old and legally authorized to agree on behalf of my organization. 
                            I commit to operating with complete transparency and integrity on ProcureHub.
                          </span>
                        </label>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer Actions */}
              <div className="relative bg-gray-50 border-t-2 border-gray-200 px-8 py-6">
                <div className="flex justify-between items-center gap-4">
                  {/* Back Button */}
                  {currentStep > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center"
                    >
                      <span className="mr-2">←</span>
                      Back
                    </motion.button>
                  )}

                  {currentStep === 1 && (
                    <button
                      onClick={handleDisagree}
                      className="px-6 py-3 border-2 border-red-300 text-red-700 rounded-xl font-semibold hover:bg-red-50 transition-all"
                    >
                      Exit
                    </button>
                  )}

                  <div className="flex-1"></div>

                  {/* Next/Agree Button */}
                  {currentStep < 3 ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentStep(currentStep + 1)}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-2xl transition-all flex items-center"
                    >
                      Continue
                      <span className="ml-2">→</span>
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: agreedToTerms ? 1.05 : 1 }}
                      whileTap={{ scale: agreedToTerms ? 0.95 : 1 }}
                      onClick={handleAgree}
                      disabled={!agreedToTerms}
                      className={`px-10 py-4 rounded-xl font-bold text-lg transition-all transform flex items-center ${
                        agreedToTerms
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-2xl shadow-lg'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <span className="mr-2 text-2xl">🚀</span>
                      Enter ProcureHub
                    </motion.button>
                  )}
                </div>

                {/* Progress Indicator */}
                <div className="mt-4 text-center text-sm text-gray-500">
                  Step {currentStep} of 3
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Original Home Page Content */}
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
                  "ProcureHub helped us secure projects without middlemen. It's a game-changer for small contractors!",
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

      {/* FAQ Section */}
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