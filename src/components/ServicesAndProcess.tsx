import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Search, 
  CheckCircle, 
  Send, 
  Clock, 
  Shield, 
  Headphones, 
  BriefcaseBusiness,
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/loanData';

interface ServicesAndProcessProps {
  onOpenEnquiry: () => void;
}

const SERVICES_LIST = [
  {
    icon: <Search className="w-5 h-5" />,
    title: 'Loan Eligibility Assessment',
    desc: 'We analyze your income structure, financial obligations, and credit parameters to identify realistic borrowing capacities and suitable loan programs.',
    tag: 'Individual & Enterprise Profiles',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Documentation Organization',
    desc: 'Complex loan applications frequently face delays due to incomplete paperwork. We provide checklists and review documentation before formal submission.',
    tag: 'KYC, Financials & Property Records',
  },
  {
    icon: <BriefcaseBusiness className="w-5 h-5" />,
    title: 'Doctor & Specialist Advisory',
    desc: 'Dedicated loan consultation for medical practitioners, dental clinics, and specialists looking to finance clinic setup, diagnostics tools, or working capital.',
    tag: 'Specialized Professional Criteria',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Loan Against Property Advisory',
    desc: 'Unlock equity from commercial or residential properties. We assist with valuation expectations, legal title verifications, and optimal tenure structuring.',
    tag: 'Residential & Commercial Collateral',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'End-to-End Application Follow-Up',
    desc: 'Direct tracking and updates through appraisal, underwriting queries, legal verification, and final sanction communication.',
    tag: 'Transparent Processing Updates',
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    title: 'Dedicated Customer Support',
    desc: 'Direct phone and email contact with our associate team in Bangalore. No automated chat mazes—real guidance for all questions and post-sanction queries.',
    tag: `Phone: ${COMPANY_CONTACTS.phone}`,
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Initial Loan Enquiry & Consultation',
    desc: `Submit your basic details online, or call us directly at ${COMPANY_CONTACTS.phone}. We review your requirement, purpose, and required loan quantum.`,
    time: 'Day 1',
  },
  {
    num: '02',
    title: 'Document Review & Option Comparison',
    desc: 'We guide you on compiling necessary identity, income, banking, or property documents and provide clarity on suitable loan categories and terms.',
    time: 'Day 1–2',
  },
  {
    num: '03',
    title: 'Application Coordination & Processing',
    desc: 'Your application is submitted through structured channels. We liaise with the processing teams to address verifications and technical reviews efficiently.',
    time: 'Day 3–5',
  },
  {
    num: '04',
    title: 'Sanction Letter & Disbursement',
    desc: 'Upon approval, you receive formal sanction terms detailing interest rate, tenure, and EMI. Once accepted and documented, funds are disbursed directly.',
    time: 'Final Stage',
  },
];

export const ServicesAndProcess: React.FC<ServicesAndProcessProps> = ({ onOpenEnquiry }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div>
      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-12"
          >
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
              Company & Capabilities
            </span>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1"
              style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              Our Services & Financial Advisory
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              At S & L Financial Associate, we bridge the gap between borrowers and appropriate loan options through disciplined financial guidance, documentation review, and structured coordination.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_LIST.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-white p-7 rounded-2xl border border-slate-200/90 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 mb-5 group-hover:scale-105 group-hover:bg-amber-100 transition-all">
                    {srv.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-800 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {srv.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-amber-700 flex items-center justify-between">
                  <span>{srv.tag}</span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Process Section with Animated Step Path */}
      <section id="process" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif" }}
              >
                Clear Guidance Built on Diligence and Direct Service
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Navigating the financial marketplace requires clarity. S & L Financial Associate works collaboratively with clients to ensure expectations, costs, and options are transparently communicated.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    num: '1',
                    title: 'Objective Profile Matching',
                    desc: 'We match your unique employment or business profile with appropriate loan structures rather than one-size-fits-all products.',
                  },
                  {
                    num: '2',
                    title: 'Dedicated Associate Contact',
                    desc: 'You are assisted directly by a financial associate who understands your case from initial enquiry to final disbursement.',
                  },
                  {
                    num: '3',
                    title: 'Responsive Communication Across India',
                    desc: 'Available via phone and email to clarify terms, eligibility prerequisites, and documentation details promptly.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4, transition: { duration: 0.15 } }}
                    className="flex gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-2xs">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(15, 23, 42, 0.2)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer shadow-sm group"
                >
                  <span>Begin Loan Consultation</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right: Step-by-Step Application Process with Timeline motions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-slate-50/90 p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">
                    Transparency In Action
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Our 4-Step Application Process
                  </h3>
                </div>
                <span className="text-xs font-bold text-amber-700 bg-amber-100/70 border border-amber-200 px-3 py-1 rounded-full">
                  Fast-Track Advisory
                </span>
              </div>

              <div className="space-y-4 relative">
                {PROCESS_STEPS.map((step, idx) => {
                  const isCurrent = activeStep === idx;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      onClick={() => setActiveStep(idx)}
                      whileHover={{ scale: 1.01, transition: { duration: 0.15 } }}
                      className={`flex gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-white border-amber-400 shadow-md ring-2 ring-amber-400/20'
                          : 'bg-white/80 border-slate-200/80 hover:border-slate-300 hover:bg-white shadow-2xs'
                      }`}
                    >
                      <div className={`w-11 h-11 rounded-xl font-black flex items-center justify-center shrink-0 transition-colors ${
                        isCurrent ? 'bg-amber-500 text-slate-950 shadow-sm' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {step.num}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1.5 font-normal">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span>Guided step-by-step from Bangalore</span>
                <button
                  onClick={onOpenEnquiry}
                  className="font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Start Step 01</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

