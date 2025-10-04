"use client"
import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';


export default function page() {
      const [viewProjects, setViewProjects] = useState(false);
  const [postProject, setPostProject] = useState(false);
  const [projects, setProjects] = useState([
    {
      title: "Network Infrastructure Upgrade",
      domain: "Networking",
      companySize: "Enterprise",
      scale: "Large-Scale",
      budget: "$200,000",
      company: "TechCorp Ltd",
      desc: "Upgrade LAN/WAN for a multinational firm with 5000+ employees.",
    },
    {
      title: "Cloud Migration",
      domain: "Cloud",
      companySize: "Medium",
      scale: "Mid-Scale",
      budget: "$50,000",
      company: "SkyData Pvt Ltd",
      desc: "Migrate applications and data to AWS for a regional IT company.",
    },
  ]);

  const [newProject, setNewProject] = useState({
    title: "",
    company: "",
    employees: "",
    budget: "",
    domain: "",
    scale: "",
    desc: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects([...projects, newProject]); // Add new project to state
    setNewProject({
      title: "",
      company: "",
      employees: "",
      budget: "",
      domain: "",
      scale: "",
      desc: "",
    });
    setPostProject(false); // Hide form
    setViewProjects(true); // Show updated projects
  };

  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Explore Opportunities</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contractors Section */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-2xl font-semibold mb-4 text-blue-600">
              For Contractors
            </h4>
            <p className="mb-4 text-gray-700">
              Discover projects posted by companies. Place fair bids, compete
              openly, and secure work based on merit — not connections.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewProjects(!viewProjects)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
            >
              {viewProjects ? "Hide Projects" : "View Projects"}
            </motion.button>

            {/* Show Project Categories */}
            {viewProjects && (
              <div className="mt-8 grid gap-6">
                {projects.map((proj, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-50 p-6 rounded-lg shadow-md text-left hover:shadow-lg transition"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <h5 className="text-lg font-semibold text-blue-600 mb-2">
                      {proj.title}
                    </h5>
                    <p className="text-sm text-gray-700 mb-2">{proj.desc}</p>
                    <p className="text-xs text-gray-500 mb-1">
                      <strong>Company:</strong> {proj.company}
                    </p>
                    <p className="text-xs text-gray-500 mb-1">
                      <strong>Domain:</strong> {proj.domain} |{" "}
                      <strong>Scale:</strong> {proj.scale}
                    </p>
                    <p className="text-xs text-gray-500">
                      <strong>Employees:</strong> {proj.employees} |{" "}
                      <strong>Budget:</strong> {proj.budget}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Companies Section */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-2xl font-semibold mb-4 text-blue-600">
              For Companies
            </h4>
            <p className="mb-4 text-gray-700">
              Post your IT maintenance projects and invite verified contractors
              to bid transparently. Ensure you get the best value without hidden
              costs.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPostProject(!postProject)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 hover:bg-blue-700"
            >
              {postProject ? "Cancel" : "Post a Project"}
            </motion.button>

            {/* Post Project Form */}
            {postProject && (
              <form
                onSubmit={handleSubmit}
                className="mt-6 text-left space-y-4 bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Project Title"
                  value={newProject.title}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={newProject.company}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2"
                />
                <input
                  type="number"
                  name="employees"
                  placeholder="Employees Size"
                  value={newProject.employees}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget (e.g. $10,000)"
                  value={newProject.budget}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <select
                  name="domain"
                  value={newProject.domain}
                  placeholder="Domain"
                  required
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 bg-white"
                >
                  <option value="">Select Domain</option>

                  {/* Core Infrastructure */}
                  <option value="Networking">Networking</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Hardware & Infrastructure">Hardware & Infrastructure</option>
                  <option value="Operating Systems">Operating Systems</option>
                  <option value="Data Center Management">Data Center Management</option>
                  <option value="Storage Solutions">Storage Solutions</option>

                  {/* Software & Development */}
                  <option value="Software Development">Software Development</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="Application Integration">Application Integration</option>
                  <option value="Software Testing & QA">Software Testing & QA</option>
                  <option value="UI/UX Design">UI/UX Design</option>

                  {/* Security */}
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Information Security">Information Security</option>
                  <option value="Network Security">Network Security</option>
                  <option value="Cloud Security">Cloud Security</option>
                  <option value="Application Security">Application Security</option>
                  <option value="Compliance & Risk Management">Compliance & Risk Management</option>

                  {/* Data & Analytics */}
                  <option value="Database Management">Database Management</option>
                  <option value="Data Warehousing">Data Warehousing</option>
                  <option value="Big Data">Big Data</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Business Intelligence">Business Intelligence</option>
                  <option value="Data Engineering">Data Engineering</option>

                  {/* AI & Automation */}
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Deep Learning">Deep Learning</option>
                  <option value="Natural Language Processing">Natural Language Processing</option>
                  <option value="Computer Vision">Computer Vision</option>
                  <option value="Robotic Process Automation">Robotic Process Automation</option>
                  <option value="Autonomous Systems">Autonomous Systems</option>

                  {/* DevOps & CI/CD */}
                  <option value="DevOps">DevOps</option>
                  <option value="CI/CD">CI/CD</option>
                  <option value="Containerization (Docker, Kubernetes)">Containerization (Docker, Kubernetes)</option>
                  <option value="Infrastructure as Code">Infrastructure as Code</option>
                  <option value="Monitoring & Observability">Monitoring & Observability</option>

                  {/* IT Services & Support */}
                  <option value="IT Support">IT Support</option>
                  <option value="Helpdesk Solutions">Helpdesk Solutions</option>
                  <option value="Managed IT Services">Managed IT Services</option>
                  <option value="System Administration">System Administration</option>
                  <option value="IT Consulting">IT Consulting</option>
                  <option value="Disaster Recovery & Backup">Disaster Recovery & Backup</option>

                  {/* Telecom & IoT */}
                  <option value="Telecommunications">Telecommunications</option>
                  <option value="Internet of Things (IoT)">Internet of Things (IoT)</option>
                  <option value="Industrial IoT">Industrial IoT</option>
                  <option value="Smart Devices">Smart Devices</option>
                  <option value="5G & Wireless Technologies">5G & Wireless Technologies</option>

                  {/* Emerging Tech */}
                  <option value="Blockchain">Blockchain</option>
                  <option value="Web3 Development">Web3 Development</option>
                  <option value="AR/VR Development">AR/VR Development</option>
                  <option value="Metaverse Solutions">Metaverse Solutions</option>
                  <option value="Quantum Computing">Quantum Computing</option>
                  <option value="Edge Computing">Edge Computing</option>
                  <option value="Digital Twins">Digital Twins</option>

                  {/* Specialized IT */}
                  <option value="ERP Solutions">ERP Solutions</option>
                  <option value="CRM Solutions">CRM Solutions</option>
                  <option value="HR Tech">HR Tech</option>
                  <option value="FinTech Solutions">FinTech Solutions</option>
                  <option value="HealthTech">HealthTech</option>
                  <option value="EdTech">EdTech</option>
                  <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                  <option value="Supply Chain Tech">Supply Chain Tech</option>
                </select>
                <input
                  type="text"
                  name="scale"
                  placeholder="Project Scale (Small, Mid, Large)"
                  value={newProject.scale}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <textarea
                  name="desc"
                  placeholder="Project Description"
                  value={newProject.desc}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Submit Project
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
