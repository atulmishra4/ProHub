"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, CheckCircle, AlertCircle, FileText, DollarSign, Users, Calendar, Tag, Building } from 'lucide-react';

export default function ProjectListingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [attachments, setAttachments] = useState([]);

  const [projectData, setProjectData] = useState({
    title: "",
    company: "",
    companySize: "",
    budget: "",
    budgetType: "fixed",
    domain: "",
    scale: "",
    desc: "",
    duration: "",
    startDate: "",
    requirements: "",
    deliverables: "",
    skills: "",
    bidDeadline: "",
    contactEmail: "",
    companyWebsite: "",
    urgency: "medium"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newAttachments = files.map(file => ({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      type: file.type
    }));
    setAttachments([...attachments, ...newAttachments]);
  };

  const removeAttachment = (index) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!projectData.title.trim()) newErrors.title = "Project title is required";
      if (!projectData.company.trim()) newErrors.company = "Company name is required";
      if (!projectData.domain) newErrors.domain = "Please select a domain";
      if (!projectData.desc.trim()) newErrors.desc = "Project description is required";
    }
    
    if (step === 2) {
      if (!projectData.budget.trim()) newErrors.budget = "Budget is required";
      if (!projectData.scale) newErrors.scale = "Project scale is required";
      if (!projectData.duration.trim()) newErrors.duration = "Duration is required";
      if (!projectData.bidDeadline) newErrors.bidDeadline = "Bid deadline is required";
    }
    
    if (step === 3) {
      if (!projectData.requirements.trim()) newErrors.requirements = "Requirements are required";
      if (!projectData.deliverables.trim()) newErrors.deliverables = "Deliverables are required";
      if (!projectData.contactEmail.trim()) newErrors.contactEmail = "Contact email is required";
      else if (!/\S+@\S+\.\S+/.test(projectData.contactEmail)) newErrors.contactEmail = "Invalid email format";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Here you would typically send data to your backend
      console.log("Project Data:", projectData);
      console.log("Attachments:", attachments);
      
      setShowSuccess(true);
      setTimeout(() => {
        // Reset form or redirect
        window.location.href = '/';
      }, 3000);
    }
  };

  const domains = [
    { category: "Core Infrastructure", options: ["Networking", "Cloud Computing", "Hardware & Infrastructure", "Operating Systems", "Data Center Management", "Storage Solutions"] },
    { category: "Software & Development", options: ["Software Development", "Web Development", "Mobile App Development", "Full Stack Development", "Application Integration", "Software Testing & QA", "UI/UX Design"] },
    { category: "Security", options: ["Cybersecurity", "Information Security", "Network Security", "Cloud Security", "Application Security", "Compliance & Risk Management"] },
    { category: "Data & Analytics", options: ["Database Management", "Data Warehousing", "Big Data", "Data Analytics", "Business Intelligence", "Data Engineering"] },
    { category: "AI & Automation", options: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Robotic Process Automation", "Autonomous Systems"] },
    { category: "DevOps & CI/CD", options: ["DevOps", "CI/CD", "Containerization (Docker, Kubernetes)", "Infrastructure as Code", "Monitoring & Observability"] },
    { category: "Emerging Tech", options: ["Blockchain", "Web3 Development", "AR/VR Development", "Metaverse Solutions", "Quantum Computing", "Edge Computing", "Digital Twins"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Post Your Project</h1>
          <p className="text-gray-600 text-lg">Connect with verified contractors through transparent bidding</p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-10">
              <motion.div
                className="h-full bg-blue-600"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {currentStep > step ? <CheckCircle size={24} /> : step}
                </motion.div>
                <span className="text-sm mt-2 font-medium text-gray-700">
                  {step === 1 ? "Basic Info" : step === 2 ? "Project Details" : "Requirements"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FileText className="text-blue-600" />
                    Basic Information
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={projectData.title}
                      onChange={handleChange}
                      placeholder="e.g., Enterprise Cloud Migration Project"
                      className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                        errors.title ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.title}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Building size={16} />
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={projectData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                          errors.company ? 'border-red-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.company && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.company}</p>}
                    </div>

                    <div>
                      <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Users size={16} />
                        Company Size
                      </label>
                      <select
                        name="companySize"
                        value={projectData.companySize}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
                      >
                        <option value="">Select Size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501-1000">501-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <Tag size={16} />
                      Domain *
                    </label>
                    <select
                      name="domain"
                      value={projectData.domain}
                      onChange={handleChange}
                      className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition ${
                        errors.domain ? 'border-red-500' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Select Domain</option>
                      {domains.map((cat, idx) => (
                        <optgroup key={idx} label={cat.category}>
                          {cat.options.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    {errors.domain && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.domain}</p>}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Calendar size={16} />
                        Preferred Start Date
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={projectData.startDate}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      />
                    </div>

                    <div>
                      <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Calendar size={16} />
                        Bid Deadline *
                      </label>
                      <input
                        type="date"
                        name="bidDeadline"
                        value={projectData.bidDeadline}
                        onChange={handleChange}
                        className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                          errors.bidDeadline ? 'border-red-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.bidDeadline && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.bidDeadline}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Required Skills & Technologies</label>
                    <input
                      type="text"
                      name="skills"
                      value={projectData.skills}
                      onChange={handleChange}
                      placeholder="e.g., AWS, Docker, Kubernetes, React, Node.js"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <p className="text-sm text-gray-500 mt-1">Separate skills with commas</p>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Requirements & Contact */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <CheckCircle className="text-blue-600" />
                    Requirements & Contact
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Technical Requirements *</label>
                    <textarea
                      name="requirements"
                      value={projectData.requirements}
                      onChange={handleChange}
                      placeholder="List specific technical requirements, qualifications, certifications needed..."
                      rows="5"
                      className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                        errors.requirements ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.requirements && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.requirements}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Deliverables *</label>
                    <textarea
                      name="deliverables"
                      value={projectData.deliverables}
                      onChange={handleChange}
                      placeholder="What should contractors deliver? Documentation, source code, deployment..."
                      rows="5"
                      className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                        errors.deliverables ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.deliverables && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.deliverables}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <Upload size={16} />
                      Attachments (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition cursor-pointer">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                        <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-400 mt-1">PDF, DOC, XLS, PNG, JPG (Max 10MB each)</p>
                      </label>
                    </div>
                    {attachments.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {attachments.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center gap-2">
                              <FileText size={20} className="text-blue-600" />
                              <div>
                                <p className="text-sm font-medium text-gray-700">{file.name}</p>
                                <p className="text-xs text-gray-500">{file.size}</p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeAttachment(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X size={20} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Email *</label>
                      <input
                        type="email"
                        name="contactEmail"
                        value={projectData.contactEmail}
                        onChange={handleChange}
                        placeholder="contact@company.com"
                        className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                          errors.contactEmail ? 'border-red-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.contactEmail && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.contactEmail}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Website</label>
                      <input
                        type="url"
                        name="companyWebsite"
                        value={projectData.companyWebsite}
                        onChange={handleChange}
                        placeholder="https://yourcompany.com"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Anonymous Bidding Notice</h3>
                    <p className="text-sm text-blue-800">
                      Contractors will bid anonymously. Only verified contractors with relevant experience can submit bids. 
                      You'll be able to review bids and choose the best contractor based on merit and pricing.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10 pt-6 border-t">
              {currentStep > 1 && (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition"
                >
                  Previous
                </motion.button>
              )}
              
              {currentStep < 3 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
                >
                  Next Step
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition shadow-lg flex items-center gap-2"
                >
                  <CheckCircle size={20} />
                  Submit Project
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>







        {/* Success Modal */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-md text-center shadow-2xl"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={48} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Posted Successfully!</h3>
                <p className="text-gray-600 mb-4">
                  Your project has been published. Verified contractors will start bidding soon.
                </p>
                <p className="text-sm text-gray-500">Redirecting to home page...</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}