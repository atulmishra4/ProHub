"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, DollarSign, Calendar, Building, Tag, Clock, TrendingUp, ChevronDown, X, Send, AlertCircle } from 'lucide-react';

export default function ProjectsPage() {
  // Sample projects data - In real app, this would come from your backend/API
  const [allProjects] = useState([
    {
      id: 1,
      title: "",
      company: "",
      companySize: "",
      budget: "$",
      budgetType: "",
      domain: "",
      scale: "",
      desc: "",
      duration: "",
      startDate: "",
      requirements: "",
      deliverables: "",
      skills: "",
      bidDeadline: "",
      urgency: "",
      postedDate: "",
      bidsCount: "",
      status: ""
    },
  ]);

  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showBidModal, setShowBidModal] = useState(false);
  
  const [filters, setFilters] = useState({
    domain: "",
    budgetRange: "",
    scale: "",
    urgency: ""
  });

  const [bidData, setBidData] = useState({
    amount: "",
    duration: "",
    proposal: "",
    portfolio: ""
  });

  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterProjects(term, filters);
  };

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    const newFilters = { ...filters, [filterName]: value };
    setFilters(newFilters);
    filterProjects(searchTerm, newFilters);
  };

  // Filter projects based on search and filters
  const filterProjects = (search, currentFilters) => {
    let filtered = allProjects;

    // Search filter
    if (search) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(search) ||
        project.desc.toLowerCase().includes(search) ||
        project.domain.toLowerCase().includes(search) ||
        project.skills.toLowerCase().includes(search)
      );
    }

    // Domain filter
    if (currentFilters.domain) {
      filtered = filtered.filter(project => project.domain === currentFilters.domain);
    }

    // Scale filter
    if (currentFilters.scale) {
      filtered = filtered.filter(project => project.scale === currentFilters.scale);
    }

    // Urgency filter
    if (currentFilters.urgency) {
      filtered = filtered.filter(project => project.urgency === currentFilters.urgency);
    }

    setFilteredProjects(filtered);
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      domain: "",
      budgetRange: "",
      scale: "",
      urgency: ""
    });
    setSearchTerm("");
    setFilteredProjects(allProjects);
  };

  // Handle bid submission
  const handleBidSubmit = (e) => {
    e.preventDefault();
    console.log("Bid submitted:", { projectId: selectedProject.id, ...bidData });
    // Here you would send the bid to your backend
    alert("Bid submitted successfully! The company will review your proposal.");
    setShowBidModal(false);
    setBidData({ amount: "", duration: "", proposal: "", portfolio: "" });
  };

  // Get urgency color
  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "urgent": return "text-red-600 bg-red-50 border-red-200";
      case "high": return "text-orange-600 bg-orange-50 border-orange-200";
      case "medium": return "text-blue-600 bg-blue-50 border-blue-200";
      case "low": return "text-green-600 bg-green-50 border-green-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const uniqueDomains = [...new Set(allProjects.map(p => p.domain))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Available Projects</h1>
          <p className="text-gray-600 text-lg">Browse and bid on projects from verified companies</p>
          <div className="flex justify-center gap-6 mt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{allProjects.length}</p>
              <p className="text-sm text-gray-600">Active Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">{allProjects.reduce((sum, p) => sum + p.bidsCount, 0)}</p>
              <p className="text-sm text-gray-600">Total Bids</p>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search projects by title, domain, or skills..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center gap-2 justify-center"
            >
              <Filter size={20} />
              Filters
              <ChevronDown size={20} className={`transform transition ${showFilters ? 'rotate-180' : ''}`} />
            </motion.button>
          </div>

          {/* Filter Options */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 grid md:grid-cols-4 gap-4 pt-6 border-t"
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Domain</label>
                  <select
                    value={filters.domain}
                    onChange={(e) => handleFilterChange("domain", e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">All Domains</option>
                    {uniqueDomains.map(domain => (
                      <option key={domain} value={domain}>{domain}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Scale</label>
                  <select
                    value={filters.scale}
                    onChange={(e) => handleFilterChange("scale", e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">All Scales</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Urgency</label>
                  <select
                    value={filters.urgency}
                    onChange={(e) => handleFilterChange("urgency", e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">All Urgency</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition flex items-center justify-center gap-2"
                  >
                    <X size={16} />
                    Clear Filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl shadow-lg p-12 text-center"
            >
              <AlertCircle size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </motion.div>
          ) : (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Project Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getUrgencyColor(project.urgency)}`}>
                            {project.urgency.charAt(0).toUpperCase() + project.urgency.slice(1)} Priority
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200">
                            {project.scale.charAt(0).toUpperCase() + project.scale.slice(1)} Scale
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{project.budget}</div>
                        <p className="text-xs text-gray-500">{project.budgetType === "fixed" ? "Fixed Price" : "Hourly Rate"}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 line-clamp-3">{project.desc}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Building size={16} className="text-blue-600" />
                        <span><strong>Company:</strong> {project.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Tag size={16} className="text-blue-600" />
                        <span><strong>Domain:</strong> {project.domain}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={16} className="text-blue-600" />
                        <span><strong>Duration:</strong> {project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={16} className="text-blue-600" />
                        <strong>Bid Deadline:</strong> {new Date(project.bidDeadline).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Required Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.split(',').map((skill, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                            {skill.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <TrendingUp size={16} className="text-green-600" />
                          <strong>{project.bidsCount}</strong> bids
                        </span>
                        <span>Posted {new Date(project.postedDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedProject(project)}
                          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                        >
                          View Details
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setSelectedProject(project);
                            setShowBidModal(true);
                          }}
                          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
                        >
                          <Send size={16} />
                          Place Bid
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && !showBidModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Description</h3>
                    <p className="text-gray-700">{selectedProject.desc}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Details</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Budget:</strong> {selectedProject.budget}</p>
                        <p><strong>Duration:</strong> {selectedProject.duration}</p>
                        <p><strong>Start Date:</strong> {selectedProject.startDate}</p>
                        <p><strong>Scale:</strong> {selectedProject.scale}</p>
                        <p><strong>Domain:</strong> {selectedProject.domain}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Info</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Company:</strong> {selectedProject.company}</p>
                        <p><strong>Size:</strong> {selectedProject.companySize} employees</p>
                        <p><strong>Bid Deadline:</strong> {new Date(selectedProject.bidDeadline).toLocaleDateString()}</p>
                        <p><strong>Current Bids:</strong> {selectedProject.bidsCount}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Requirements</h3>
                    <p className="text-gray-700 text-sm">{selectedProject.requirements}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Deliverables</h3>
                    <p className="text-gray-700 text-sm">{selectedProject.deliverables}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Required Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.skills.split(',').map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6 border-t">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setShowBidModal(true);
                      }}
                      className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Place Your Bid
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bid Modal */}
        <AnimatePresence>
          {showBidModal && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowBidModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Place Your Bid</h2>
                    <p className="text-gray-600 mt-1">{selectedProject.title}</p>
                  </div>
                  <button
                    onClick={() => setShowBidModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleBidSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Bid Amount *</label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        value={bidData.amount}
                        onChange={(e) => setBidData({ ...bidData, amount: e.target.value })}
                        placeholder="e.g., $45,000"
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Project budget: {selectedProject.budget}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Duration *</label>
                    <input
                      type="text"
                      value={bidData.duration}
                      onChange={(e) => setBidData({ ...bidData, duration: e.target.value })}
                      placeholder="e.g., 5 months"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Proposal *</label>
                    <textarea
                      value={bidData.proposal}
                      onChange={(e) => setBidData({ ...bidData, proposal: e.target.value })}
                      placeholder="Describe your approach, experience, and why you're the best fit for this project..."
                      rows="6"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Portfolio/References (Optional)</label>
                    <input
                      type="url"
                      value={bidData.portfolio}
                      onChange={(e) => setBidData({ ...bidData, portfolio: e.target.value })}
                      placeholder="https://yourportfolio.com or GitHub link"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Anonymous Bidding:</strong> Your identity will remain anonymous until the company selects you. 
                      All bids are evaluated fairly based on merit and proposal quality.
                    </p>
                  </div>

                  <div className="flex gap-4 pt-6 border-t">
                    <button
                      type="button"
                      onClick={() => setShowBidModal(false)}
                      className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition"
                    >
                      Cancel
                    </button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Submit Bid
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}