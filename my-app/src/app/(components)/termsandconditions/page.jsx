"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertCircle, CheckCircle, Scale, Users, Building, Mail, ChevronDown, ChevronUp, Gavel, Globe, Lock } from 'lucide-react';

export default function TermsAndConditionsPage() {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (index) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter(i => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  const keyHighlights = [
    {
      icon: <Shield className="text-blue-600" size={32} />,
      title: "Fair Usage",
      desc: "Clear guidelines for platform usage"
    },
    {
      icon: <Scale className="text-green-600" size={32} />,
      title: "Legal Protection",
      desc: "Your rights and our responsibilities"
    },
    {
      icon: <CheckCircle className="text-purple-600" size={32} />,
      title: "Transparency",
      desc: "No hidden clauses or surprises"
    },
    {
      icon: <Users className="text-orange-600" size={32} />,
      title: "User Rights",
      desc: "We respect and protect your rights"
    }
  ];

  const termsSections = [
    {
      id: 1,
      title: "Agreement to Our Legal Terms",
      icon: <FileText className="text-blue-600" size={24} />,
      content: `We are ProcureHub ("Company", "we", "our", "us"), operating the website https://procurehub.vercel.app/ (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").

These Terms and Conditions constitute a legally binding agreement between you ("User", "you", or "your") and ProcureHub. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.

Key Points:
• You must be at least 18 years old to use our Services
• You accept all terms by creating an account or using our platform
• These terms apply to all users: companies, contractors, and visitors
• If you disagree with any part, you must discontinue use immediately

By continuing to use ProcureHub, you represent that you have the legal capacity to enter into this agreement.`
    },
    {
      id: 2,
      title: "User Responsibilities",
      icon: <Users className="text-green-600" size={24} />,
      content: `As a user of ProcureHub, you agree to the following responsibilities:

Account Security:
• Maintain the confidentiality of your account credentials
• Use a strong, unique password and update it regularly
• Never share your login information with others
• Notify us immediately of any unauthorized access or security breach
• You are responsible for all activities under your account

Information Accuracy:
• Provide accurate, current, and complete information during registration
• Update your profile information promptly when changes occur
• Ensure all business documentation (GSTIN, PAN, certifications) is valid
• Represent your organization truthfully and accurately

Professional Conduct:
• Communicate respectfully with all platform users
• Honor your commitments and agreements made through the platform
• Respond to inquiries and messages in a timely manner
• Maintain professional standards in all interactions

For Companies:
• Post genuine project requirements with accurate budgets
• Evaluate bids fairly based on merit and capability
• Honor awarded contracts and pay contractors as agreed

For Contractors:
• Submit realistic bids based on actual capabilities
• Deliver services as promised in your bid proposal
• Maintain quality standards and meet project deadlines`
    },
    {
      id: 3,
      title: "Prohibited Activities",
      icon: <AlertCircle className="text-red-600" size={24} />,
      content: `You agree not to engage in any of the following prohibited activities:

Legal Violations:
• Violating any applicable local, state, national, or international laws
• Engaging in fraudulent, deceptive, or misleading practices
• Money laundering or financing illegal activities
• Tax evasion or submission of false documentation

Platform Abuse:
• Creating multiple accounts to manipulate bidding processes
• Submitting fake bids or projects to game the system
• Attempting to bypass the platform for direct transactions to avoid fees
• Using automated bots or scripts to scrape data or manipulate rankings
• Reverse engineering or attempting to access source code

Security Threats:
• Transmitting viruses, malware, or any harmful code
• Attempting to gain unauthorized access to our systems or networks
• Conducting denial-of-service attacks or other disruptions
• Exploiting security vulnerabilities for malicious purposes

Intellectual Property Infringement:
• Using copyrighted material without proper authorization
• Uploading content that infringes on trademarks or patents
• Impersonating other users or organizations

Harmful Conduct:
• Harassment, bullying, or threatening other users
• Posting offensive, discriminatory, or inappropriate content
• Soliciting bribes or engaging in corrupt practices
• Sharing confidential information without authorization

Violation of these terms may result in immediate account suspension or termination, legal action, and reporting to relevant authorities.`
    },
    {
      id: 4,
      title: "Bidding and Contract Terms",
      icon: <Gavel className="text-purple-600" size={24} />,
      content: `Special terms governing the bidding and contracting process on ProcureHub:

Bidding Process:
• All bids are initially anonymous to ensure fairness
• Bids are legally binding offers once submitted
• Companies are not obligated to accept any bid
• Contractors cannot withdraw bids without valid reason after deadline
• ProcureHub reserves the right to remove suspicious or fraudulent bids

Contract Formation:
• A contract is formed when a company accepts a contractor's bid
• Both parties must honor the terms specified in the bid and project listing
• Any modifications must be mutually agreed upon in writing
• ProcureHub may facilitate but is not a party to contracts between users

Payment Terms:
• Payment terms are defined in individual project agreements
• Companies agree to pay contractors upon satisfactory completion
• Disputes regarding payment should follow our dispute resolution process
• ProcureHub may hold payments in escrow when requested (fees apply)

Project Delivery:
• Contractors must deliver services as specified in accepted bids
• Timeline extensions require company approval
• Quality must meet industry standards and project requirements
• Companies have the right to request revisions for non-conforming work

Cancellation:
• Either party may cancel with valid reason (defined in dispute resolution)
• Cancellation fees may apply based on project progress
• Partial payments for completed work phases are at company's discretion`
    },
    {
      id: 5,
      title: "Intellectual Property Rights",
      icon: <Lock className="text-indigo-600" size={24} />,
      content: `All content on ProcureHub is protected by intellectual property laws:

ProcureHub's IP:
• Platform design, code, logos, and branding belong to ProcureHub
• All text, graphics, images, and software are our property or our licensors'
• You may not copy, modify, distribute, or create derivative works
• "ProcureHub" name and logo are registered trademarks (pending/registered)

User-Generated Content:
• You retain ownership of content you upload (profiles, bids, projects)
• By posting, you grant ProcureHub a license to use, display, and distribute
• This license is worldwide, non-exclusive, and royalty-free
• You represent that you own or have rights to all submitted content

Project Deliverables:
• Intellectual property rights in deliverables are defined in project contracts
• Typically, companies own deliverables upon full payment
• Contractors may retain rights to use work in portfolios (with anonymization)
• Custom terms can be negotiated between parties

Confidential Information:
• Users must not share confidential project information publicly
• Non-disclosure obligations survive termination of these terms
• ProcureHub implements measures to protect sensitive data

Infringement Claims:
• Report copyright or trademark infringement to legal@procurehub.com
• Provide detailed information about the infringement
• We investigate all claims and take appropriate action
• False claims may result in account termination`
    },
    {
      id: 6,
      title: "Platform Fees and Payments",
      icon: <Building className="text-teal-600" size={24} />,
      content: `Understanding fees and payment terms for using ProcureHub:

Service Fees:
• ProcureHub charges a percentage-based fee on successful contracts
• Fee structure is transparent and displayed before bid submission
• Companies and contractors pay separate fees as applicable
• Fees are automatically calculated and clearly shown

Payment Processing:
• We use secure third-party payment processors
• Supported payment methods include credit/debit cards, UPI, bank transfers
• International payments may incur additional processing fees
• All prices are in Indian Rupees (INR) unless otherwise stated

Refund Policy:
• Platform fees are generally non-refundable
• Refunds for project payments follow dispute resolution outcomes
• Service fee refunds may be granted in exceptional circumstances
• Refund requests must be submitted within 30 days

Subscription Plans (if applicable):
• Premium features may require subscription
• Subscriptions auto-renew unless canceled
• Cancel anytime; access continues until period end
• No refunds for partial subscription periods

Tax Compliance:
• Users are responsible for applicable taxes on their earnings
• We may collect and remit GST as required by law
• Invoices and tax documentation are provided for all transactions
• Consult a tax professional for your specific obligations`
    },
    {
      id: 7,
      title: "Disclaimer of Warranties",
      icon: <AlertCircle className="text-orange-600" size={24} />,
      content: `ProcureHub is provided "AS IS" and "AS AVAILABLE" without warranties of any kind:

No Guarantees:
• We do not guarantee uninterrupted, error-free, or secure service
• Platform availability may be affected by maintenance or technical issues
• We do not warrant that defects will be corrected immediately
• Third-party service integrations may experience disruptions

User Transactions:
• ProcureHub does not guarantee the quality of work from contractors
• We do not verify all claims made in profiles or bids
• Users are responsible for their own due diligence
• We are not a party to contracts between users

Content Accuracy:
• User-generated content may contain errors or inaccuracies
• We do not endorse or verify user statements or claims
• Information on the platform should not be relied upon as professional advice
• Always conduct independent verification

To the fullest extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.`
    },
    {
      id: 8,
      title: "Limitation of Liability",
      icon: <Shield className="text-pink-600" size={24} />,
      content: `Our liability to you is limited as follows:

Excluded Damages:
To the maximum extent permitted by law, ProcureHub shall not be liable for:
• Indirect, incidental, special, or consequential damages
• Loss of profits, revenue, data, or business opportunities
• Damages resulting from user errors or third-party actions
• Losses from unauthorized access to your account
• Issues arising from force majeure events

Maximum Liability:
• Our total liability is limited to the fees you paid in the past 12 months
• For free users, liability is limited to ₹1,000 or equivalent
• This applies regardless of the legal theory (contract, tort, etc.)

User Disputes:
• Disputes between users (companies and contractors) are not our responsibility
• We may facilitate dispute resolution but provide no guarantees
• Users release ProcureHub from claims arising from user disputes

Exceptions:
• Nothing limits liability for death or personal injury caused by negligence
• Fraud or fraudulent misrepresentation is not excluded
• Other liability that cannot be limited by law is not affected

Third-Party Links:
• We are not responsible for third-party websites or services
• External links are provided for convenience only
• Use of third-party services is at your own risk`
    },
    {
      id: 9,
      title: "Indemnification",
      icon: <Scale className="text-cyan-600" size={24} />,
      content: `You agree to indemnify and hold harmless ProcureHub:

Your Obligations:
You agree to defend, indemnify, and hold harmless ProcureHub, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:

• Your use or misuse of the platform
• Violation of these Terms and Conditions
• Infringement of intellectual property rights
• Breach of any law or regulation
• Disputes with other users
• Your content or conduct on the platform
• Claims from third parties related to your activities

Process:
• We will notify you promptly of any claim
• You will cooperate with us in defense of the claim
• We reserve the right to assume exclusive defense at our expense
• You may not settle without our prior written consent
• This obligation survives termination of your account

Examples:
• A company sues you for breach of contract; you indemnify us if we're named
• Copyright holder claims you uploaded infringing material
• Another user sues us due to your fraudulent bid
• Government agency investigates your tax compliance issues`
    },
    {
      id: 10,
      title: "Termination and Suspension",
      icon: <AlertCircle className="text-red-600" size={24} />,
      content: `We reserve the right to suspend or terminate accounts:

Grounds for Termination:
• Violation of these Terms and Conditions
• Fraudulent or illegal activity
• Multiple complaints from other users
• Non-payment of fees or chargebacks
• Inactive accounts (after notice)
• At our discretion for any reason with notice

Immediate Suspension:
We may immediately suspend without notice for:
• Suspected security breaches
• Legal requirements or court orders
• Protecting platform integrity
• Emergency situations

Your Right to Terminate:
• You may close your account at any time through settings
• Provide notice of any ongoing projects
• Outstanding obligations must be fulfilled
• Some data may be retained for legal compliance

Effect of Termination:
• Access to platform is immediately revoked
• Pending transactions may be completed or canceled
• Data may be deleted after retention period
• You remain liable for any breaches before termination
• These Terms survive termination where applicable

Reinstatement:
• Suspended accounts may appeal through support
• We review each case individually
• Reinstatement is not guaranteed
• Repeat violations result in permanent termination`
    },
    {
      id: 11,
      title: "Dispute Resolution",
      icon: <Gavel className="text-amber-600" size={24} />,
      content: `Process for resolving disputes:

Internal Resolution:
First, attempt to resolve disputes through:
• Direct communication between parties
• ProcureHub mediation service (if available)
• Review of project documentation and communications
• Good faith negotiation

Formal Complaint:
If informal resolution fails:
• Submit a formal complaint through our platform
• Provide all relevant documentation and evidence
• Allow 15 business days for investigation
• Accept binding decision on platform fee disputes

Arbitration:
For unresolved disputes:
• Disputes shall be resolved through binding arbitration
• Arbitration conducted under Indian Arbitration and Conciliation Act
• Arbitrator appointed by mutual agreement or per Act provisions
• Venue: Lucknow, Uttar Pradesh, India
• Each party bears their own costs unless arbitrator decides otherwise

Class Action Waiver:
• You agree to resolve disputes individually, not as class actions
• No consolidation of claims without consent
• This waiver does not apply where prohibited by law

Exceptions:
• Either party may seek injunctive relief in court for IP or confidentiality
• Small claims court for qualifying disputes
• Emergency relief when necessary to prevent irreparable harm`
    },
    {
      id: 12,
      title: "Changes to Terms",
      icon: <FileText className="text-purple-600" size={24} />,
      content: `We reserve the right to modify these Terms and Conditions:

Amendment Process:
• We may update these terms at any time
• Changes effective immediately upon posting
• Material changes will be notified via email or platform notice
• "Last Updated" date will reflect recent changes

Your Acceptance:
• Continued use after changes constitutes acceptance
• If you disagree, you must stop using the platform
• Active projects continue under previous terms if dispute arises
• New projects subject to updated terms

Notification Methods:
• Email to your registered address
• Prominent banner on platform
• In-app notification
• Update to version number and date

Review Regularly:
• Check this page periodically for updates
• We recommend reviewing terms every 3 months
• Significant changes highlighted in notifications
• Archive previous versions available upon request`
    },
    {
      id: 13,
      title: "Governing Law and Jurisdiction",
      icon: <Globe className="text-blue-600" size={24} />,
      content: `Legal framework governing these terms:

Applicable Law:
• These Terms governed by laws of India
• Specifically, laws applicable in Uttar Pradesh
• No regard to conflict of law principles
• International conventions may apply to cross-border transactions

Jurisdiction:
• Courts of Lucknow, Uttar Pradesh have exclusive jurisdiction
• You consent to personal jurisdiction in these courts
• Waive any objections to venue or jurisdiction
• Exception: IP or emergency relief may be sought elsewhere

Language:
• These Terms are written in English
• English version prevails in case of translation conflicts
• Translations provided for convenience only

Severability:
• If any provision is found invalid or unenforceable
• Remaining provisions continue in full force
• Invalid provision reformed to be enforceable while preserving intent

Entire Agreement:
• These Terms constitute the entire agreement
• Supersede all prior agreements or understandings
• May only be modified in writing by authorized representatives
• No waiver of any term shall be deemed continuing waiver`
    },
    {
      id: 14,
      title: "Contact Information",
      icon: <Mail className="text-green-600" size={24} />,
      content: `How to reach us for questions or concerns:

General Inquiries:
• Email: support@procurehub.com
• Response time: Within 48 hours (business days)
• Subject: Include "Terms Inquiry" for faster routing

Legal Matters:
• Email: legal@procurehub.com
• For disputes, IP claims, or legal notices
• Include all relevant documentation

Technical Support:
• Email: mishratul@zohomail.in
• For platform issues or bugs
• Include screenshots and error messages when possible

Mailing Address:
ProcureHub
Lucknow, Uttar Pradesh
India

Business Hours:
• Monday - Friday: 9:00 AM - 6:00 PM IST
• Saturday: 10:00 AM - 4:00 PM IST
• Sunday: Closed
• Emergency support available for critical issues

Social Media:
• Updates and announcements on our social channels
• Not for customer support or legal inquiries
• Follow for platform news and features

We aim to respond to all inquiries promptly and professionally.`
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
              <Scale className="text-white" size={48} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Terms and Conditions</h1>
          <p className="text-gray-600 text-lg mb-2">Legal agreement for using ProcureHub</p>
          <p className="text-sm text-gray-500">Last updated: October 09, 2025</p>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What You Need to Know</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyHighlights.map((item, index) => (
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

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 mb-8 text-white"
        >
          <div className="flex items-start gap-4">
            <AlertCircle size={32} className="flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Important Notice</h2>
              <p className="text-blue-100 leading-relaxed mb-4">
                By accessing or using ProcureHub, you agree to be bound by these Terms and Conditions. 
                Please read them carefully before using our platform. If you do not agree with any part of these terms, 
                you must not use our services.
              </p>
              <p className="text-blue-100 leading-relaxed">
                These terms constitute a legally binding agreement between you and ProcureHub. 
                Your continued use of our platform signifies your acceptance of any changes we may make to these terms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-4 mb-12">
          {termsSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.03 }}
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
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">Section {section.id} of {termsSections.length}</p>
                  </div>
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

        {/* Acceptance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-green-50 border-l-4 border-green-500 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <CheckCircle className="text-green-600 flex-shrink-0" size={28} />
            <div>
              <h3 className="text-lg font-bold text-green-900 mb-2">By Using ProcureHub, You Agree To:</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li>• Follow all terms and conditions outlined above</li>
                <li>• Use the platform responsibly and ethically</li>
                <li>• Respect the rights of other users</li>
                <li>• Comply with all applicable laws and regulations</li>
                <li>• Accept our policies on privacy, payments, and dispute resolution</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Help?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'mailto:support@procurehub.com?subject=Terms and Conditions Inquiry'}
              className="bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contact Support
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setExpandedSections(termsSections.map((_, i) => i))}
              className="bg-gray-200 text-gray-700 px-6 py-4 rounded-xl font-semibold hover:bg-gray-300 transition flex items-center justify-center gap-2"
            >
              <ChevronDown size={20} />
              Expand All Sections
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/privacypolicy'}
              className="bg-indigo-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
            >
              <Shield size={20} />
              Privacy Policy
            </motion.button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Questions about specific terms? Email us at{" "}
              <a href="mailto:mishratul@zohomail.in" className="text-blue-600 underline font-semibold">
                mishratul@zohomail.in
              </a>
            </p>
          </div>
        </motion.div>

        {/* Footer Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-600 mb-2">
            These Terms and Conditions are effective as of the date stated above and will remain in effect 
            except with respect to any changes in their provisions in the future.
          </p>
          <p className="text-xs text-gray-500">
            ProcureHub reserves the right to update or modify these terms at any time without prior notice.
          </p>
        </motion.div>
      </div>
    </div>
  );
}