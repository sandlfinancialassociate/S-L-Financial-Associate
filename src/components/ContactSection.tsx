import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_CONTACTS } from '../data/loanData';
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenEnquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-block text-xs font-semibold text-amber-700 uppercase tracking-wider"
            >
              Customer Support & Inquiries
            </motion.span>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
              style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              Get in Touch with S & L Financial Associate
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We welcome enquiries from individuals, healthcare professionals, business proprietors, and corporate applicants seeking structured borrowing options. Reach out through our verified contact channels:
            </p>

            {/* Contacts in the exact order requested: Envelope -> Phone -> MapPin (India plain span) */}
            <div className="space-y-4 pt-2">
              {/* 1. Envelope icon -> email */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ y: -3, borderColor: '#D97706', transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 transition-shadow hover:shadow-md"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="p-2.5 rounded-lg bg-white border border-slate-200 text-amber-600 shrink-0 shadow-xs"
                >
                  <Mail className="w-5 h-5" />
                </motion.div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400">Email Address</div>
                  <a
                    href={`mailto:${COMPANY_CONTACTS.email}`}
                    className="text-sm sm:text-base font-semibold text-slate-900 hover:text-amber-600 transition-colors break-all"
                  >
                    {COMPANY_CONTACTS.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Send inquiries and documentation requests anytime.
                  </p>
                </div>
              </motion.div>

              {/* 2. Phone icon -> tel */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ y: -3, borderColor: '#D97706', transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 transition-shadow hover:shadow-md"
              >
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="p-2.5 rounded-lg bg-white border border-slate-200 text-amber-600 shrink-0 shadow-xs"
                >
                  <Phone className="w-5 h-5" />
                </motion.div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400">Telephone / Direct Helpline</div>
                  <a
                    href={`tel:${COMPANY_CONTACTS.phoneTel}`}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-amber-600 transition-colors font-mono"
                  >
                    {COMPANY_CONTACTS.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Monday to Saturday, 9:30 AM to 6:30 PM IST.
                  </p>
                </div>
              </motion.div>

              {/* 3. Map-Pin icon -> India plain span */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ y: -3, borderColor: '#D97706', transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 transition-shadow hover:shadow-md"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="p-2.5 rounded-lg bg-white border border-slate-200 text-amber-600 shrink-0 shadow-xs"
                >
                  <MapPin className="w-5 h-5" />
                </motion.div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400">Office Address / Location</div>
                  <span className="text-sm sm:text-base font-semibold text-slate-900">
                    {COMPANY_CONTACTS.location}
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Operating from Bangalore, providing loan advisory and documentation assistance for clients across Bangalore and India.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Action card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="lg:col-span-6 bg-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 relative overflow-hidden"
          >
            {/* Subtle animated background gradient orb */}
            <motion.div
              animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"
            />

            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
              <MessageSquare className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Direct Assistance
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Looking for tailored loan solutions?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Whether you need a Personal Loan for an emergency, Doctor Loan for medical practice equipment, Business Loan for expansion, Home Loan for your residence, or Loan Against Property—our associate team is ready to guide you.
              </p>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Responsive Service Commitment</span>
              </div>
              <p>
                All web inquiries and emails received are acknowledged by our financial associate within business hours.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenEnquiry}
                className="flex-1 py-3 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>Submit Loan Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${COMPANY_CONTACTS.phoneTel}`}
                className="py-3 px-5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg transition-colors text-center border border-slate-700 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call: {COMPANY_CONTACTS.phone}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
