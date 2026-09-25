import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_CONTACTS } from '../data/loanData';

export type ModalType = 'privacy' | 'terms' | 'cookies' | 'careers' | null;

interface LegalModalsProps {
  modalType: ModalType;
  onClose: () => void;
  onOpenEnquiry?: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ modalType, onClose, onOpenEnquiry }) => {
  return (
    <AnimatePresence>
      {modalType && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-lg font-bold p-1 cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {modalType === 'privacy' && (
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900">Privacy Policy</h3>
                <p className="text-xs text-slate-500">Effective Date: January 2026 · S & L Financial Associate</p>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    At <strong>S & L Financial Associate</strong>, we value the trust you place in us when seeking financial guidance and loan solutions. This Privacy Policy details how we handle information submitted through our website and consultation channels.
                  </p>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">1. Information We Collect</h4>
                  <p>
                    When you submit an enquiry, we collect information including your name, contact phone number, email address, loan requirement category, estimated loan quantum, and details relevant to assessing loan options in India.
                  </p>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">2. Use of Information</h4>
                  <p>
                    Your information is used strictly to evaluate borrowing eligibility, provide financial consultation, communicate options, and coordinate documentation for your requested loan solution. We do not sell or rent your personal information to third-party marketers.
                  </p>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">3. Data Security & Confidentiality</h4>
                  <p>
                    We implement industry-standard procedural and digital safeguards to protect your personal and financial information against unauthorized access, loss, or misuse.
                  </p>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">4. Contacting Us Regarding Privacy</h4>
                  <p>
                    If you have questions regarding this Privacy Policy, please email our team at{' '}
                    <a href={`mailto:${COMPANY_CONTACTS.email}`} className="text-amber-600 underline font-medium">
                      {COMPANY_CONTACTS.email}
                    </a>.
                  </p>
                </div>
              </div>
            )}

            {modalType === 'terms' && (
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900">Terms & Conditions</h3>
                <p className="text-xs text-slate-500">Effective Date: January 2026 · S & L Financial Associate</p>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    Welcome to <strong>S & L Financial Associate</strong>. By accessing this website or utilizing our advisory services, you acknowledge and agree to the following terms and guidelines.
                  </p>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">1. Advisory Scope</h4>
                  <p>
                    S & L Financial Associate provides financial guidance, eligibility assessment, and loan application coordination. Calculations produced by our EMI tools are indicative and for preliminary estimation. Final loan terms, interest rates, sanctions, and fund disbursements are determined solely by lending institutions following standard credit appraisals.
                  </p>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">2. Accuracy of Borrower Information</h4>
                  <p>
                    Borrowers agree to provide truthful, accurate, and up-to-date documentation and disclosures during the loan enquiry and application stages.
                  </p>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">3. Intellectual Property</h4>
                  <p>
                    The branding, logos, graphics, and layout of this website are property of S & L Financial Associate and protected under applicable copyright and trademark laws.
                  </p>
                </div>
              </div>
            )}

            {modalType === 'cookies' && (
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900">Cookie Policy</h3>
                <p className="text-xs text-slate-500">Effective Date: January 2026 · S & L Financial Associate</p>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    This Cookie Policy explains how <strong>S & L Financial Associate</strong> uses essential cookies and local browser storage to provide functional navigation, remember calculator preferences, and ensure secure form interactions.
                  </p>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">1. Essential Cookies</h4>
                  <p>
                    We use strictly functional cookies to ensure navigation stability, retain user state across calculator interactions, and verify form submissions against automated spam.
                  </p>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">2. Managing Preferences</h4>
                  <p>
                    You can configure your browser to block or alert you about cookies; however, certain interactive aspects of our loan tools may not function optimally without essential storage.
                  </p>
                </div>
              </div>
            )}

            {modalType === 'careers' && (
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900">Careers at S & L Financial Associate</h3>
                <p className="text-xs text-slate-500">Professional Financial Services · Bangalore, India</p>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    Join <strong>S & L Financial Associate</strong> as we expand our advisory presence and deliver reliable loan guidance across India. We seek energetic, ethical professionals in loan operations, credit appraisal, and client relationship management.
                  </p>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                      Open Positions / Opportunities
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                      <li>Loan Operations Associate (Documentation & Follow-up)</li>
                      <li>Doctor & Professional Loan Specialist</li>
                      <li>Business Loan Relationship Manager</li>
                    </ul>
                  </div>
                  <p>
                    Interested applicants can send their resume and portfolio directly to{' '}
                    <a href={`mailto:${COMPANY_CONTACTS.email}`} className="text-amber-600 underline font-medium">
                      {COMPANY_CONTACTS.email}
                    </a>{' '}
                    with the subject line "Career Application - S & L Financial Associate".
                  </p>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-slate-100 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
