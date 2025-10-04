"use client"

import React,{useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';


export default function page() {
    const [userType, setUserType] = React.useState(null); // "company" or "contractor"
    const [step, setStep] = React.useState(1); // Step in the multi-step form
    const [formData, setFormData] = useState({
    // Common fields
    organizationName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    
    // Company specific
    gstin: "",
    panNumber: "",
    companyRegistration: "",
    employeeSize: "",
    annualTurnover: "",
    industry: "",
    website: "",
    
    // Contractor specific
    businessType: "",
    yearsInBusiness: "",
    domains: [],
    certifications: "",
    previousClients: "",
    portfolioUrl: "",
    teamSize: "",
    serviceAreas: []
    });

     const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      if (checked) {
        setFormData({ 
          ...formData, 
          [name]: [...(formData[name] || []), value] 
        });
      } else {
        setFormData({ 
          ...formData, 
          [name]: (formData[name] || []).filter(item => item !== value) 
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Form submitted:", formData);
    alert(`Registration successful for ${userType}!`);
  };

    const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // User Type Selection Screen
  if (!userType) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Join ProcureHub
          </motion.h2>
          <p className="text-gray-600 mb-12">
            Choose your account type to get started
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setUserType("company")}
              className="bg-white p-8 rounded-2xl shadow-lg cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all"
            >
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                I'm a Company
              </h3>
              <p className="text-gray-600 mb-6">
                Post IT maintenance projects and find verified contractors through transparent bidding
              </p>
              <ul className="text-left text-sm text-gray-700 space-y-2">
                <li>✓ Post unlimited projects</li>
                <li>✓ Receive competitive bids</li>
                <li>✓ Access contractor analytics</li>
                <li>✓ Transparent selection process</li>
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Sign Up as Company
              </button>
            </motion.div>

            {/* Contractor Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setUserType("contractor")}
              className="bg-white p-8 rounded-2xl shadow-lg cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all"
            >
              <div className="text-5xl mb-4">👷</div>
              <h3 className="text-2xl font-bold text-indigo-600 mb-3">
                I'm a Contractor
              </h3>
              <p className="text-gray-600 mb-6">
                Discover opportunities, submit competitive bids, and grow your business fairly
              </p>
              <ul className="text-left text-sm text-gray-700 space-y-2">
                <li>✓ Browse verified projects</li>
                <li>✓ Submit anonymous bids</li>
                <li>✓ Build your reputation</li>
                <li>✓ Fair merit-based selection</li>
              </ul>
              <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all">
                Sign Up as Contractor
              </button>
            </motion.div>
          </div>

          <button
            onClick={() => window.location.href = "/"}
            className="mt-8 text-black-600 hover:text-blue-800"
          >
            Go Back
          </button>
        </div>
      </section>
    );
  }


    // Registration Form
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {userType === "company" ? "Company Registration" : "Contractor Registration"}
          </h2>
          <p className="text-gray-600">
            Step {step} of {userType === "company" ? 3 : 3}
          </p>
          <button
            onClick={() => setUserType(null)}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            Change account type
          </button>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8 bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
            className={`h-2 rounded-full ${
              userType === "company" ? "bg-blue-600" : "bg-indigo-600"
            }`}
          />
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Basic Information
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {userType === "company" ? "Company Name" : "Business Name"} *
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Enter organization name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="company@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="8"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Minimum 8 characters"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Re-enter password"
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={nextStep}
                    className={`${
                      userType === "company" ? "bg-blue-600 hover:bg-blue-700" : "bg-indigo-600 hover:bg-indigo-700"
                    } text-white px-6 py-2 rounded-lg font-semibold transition-all`}
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Address & Legal */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Address & Legal Details
                </h3>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Registered Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Street address"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      State *
                    </label>
                    {/* <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    /> */}
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="">Select state</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                      <option value="Daman and Diu">Daman and Diu</option>
                      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="6-digit PIN code"
                      required
                      pattern="[0-9]{6}"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      GSTIN *
                    </label>
                    <input
                      type="text"
                      name="gstin"
                      value={formData.gstin}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="22AAAAA0000A1Z5"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      PAN Number *
                    </label>
                    <input
                      type="text"
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleChange}
                      required
                      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="ABCDE1234F"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company Registration Number
                    </label>
                    <input
                      type="text"
                      name="companyRegistration"
                      value={formData.companyRegistration}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="CIN/Registration No."
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-semibold transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className={`${
                      userType === "company" ? "bg-blue-600 hover:bg-blue-700" : "bg-indigo-600 hover:bg-indigo-700"
                    } text-white px-6 py-2 rounded-lg font-semibold transition-all`}
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Specific Details */}
            {step === 3 && userType === "company" && (
              <motion.div
                key="step3-company"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Company Details
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Employee Size *
                    </label>
                    <select
                      name="employeeSize"
                      value={formData.employeeSize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="">Select range</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="501-1000">501-1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Annual Turnover *
                    </label>
                    <select
                      name="annualTurnover"
                      value={formData.annualTurnover}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="">Select range</option>
                      <option value="< 1 Cr">Less than ₹1 Crore</option>
                      <option value="1-5 Cr">₹1-5 Crore</option>
                      <option value="5-10 Cr">₹5-10 Crore</option>
                      <option value="10-50 Cr">₹10-50 Crore</option>
                      <option value="50-100 Cr">₹50-100 Crore</option>
                      <option value="> 100 Cr">Above ₹100 Crore</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Industry *
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="e.g., Manufacturing, IT Services"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-semibold transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all"
                  >
                    Complete Registration
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Contractor Specific */}
            {step === 3 && userType === "contractor" && (
              <motion.div
                key="step3-contractor"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Contractor Details
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    >
                      <option value="">Select type</option>
                      <option value="Sole Proprietorship">Sole Proprietorship</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Private Limited">Private Limited</option>
                      <option value="LLP">LLP</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Years in Business *
                    </label>
                    <input
                      type="number"
                      name="yearsInBusiness"
                      value={formData.yearsInBusiness}
                      onChange={handleChange}
                      required
                      min="0"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Team Size *
                    </label>
                    <input
                      type="number"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Portfolio URL
                    </label>
                    <input
                      type="url"
                      name="portfolioUrl"
                      value={formData.portfolioUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      placeholder="https://portfolio.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Service Domains * (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-3 gap-2 max-h-48 overflow-y-auto border rounded-lg p-3">
                    {["Networking", "Cloud Computing", "Cybersecurity", "Software Development", 
                      "Hardware & Infrastructure", "Data Center Management", "Web Development",
                      "Mobile App Development", "Database Management", "DevOps", "AI/ML"].map(domain => (
                      <label key={domain} className="flex items-center space-x-2 text-sm">
                        <input
                          type="checkbox"
                          name="domains"
                          value={domain}
                          checked={formData.domains.includes(domain)}
                          onChange={handleChange}
                          className="rounded"
                        />
                        <span>{domain}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Certifications (Comma separated)
                  </label>
                  <textarea
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="e.g., AWS Certified, CISCO CCNA, ISO 27001"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Previous Client References
                  </label>
                  <textarea
                    name="previousClients"
                    value={formData.previousClients}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="List major clients or project references"
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-semibold transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-all"
                  >
                    Complete Registration
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Terms */}
        <p className="text-center text-xs text-gray-600 mt-6">
          By signing up, you agree to ProcureHub's{" "}
          <a href="./Terms.js" className="text-blue-600 underline" >Terms of Conditions</a> and{" "}
          <a href="./PrivacyPolicy.js" className="text-blue-600 underline">Privacy Policy</a>
        </p>
      </div>
    </section>
  )
}
