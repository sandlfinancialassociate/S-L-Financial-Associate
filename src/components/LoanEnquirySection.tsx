import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LoanCategory, LoanEnquiryFormData } from '../types';
import { COMPANY_CONTACTS } from '../data/loanData';
import { Send, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

interface LoanEnquirySectionProps {
  initialCategory?: LoanCategory;
  initialAmount?: number;
  isModal?: boolean;
  onClose?: () => void;
}

export const LoanEnquirySection: React.FC<LoanEnquirySectionProps> = ({
  initialCategory = 'Personal Loans',
  initialAmount,
  isModal = false,
  onClose,
}) => {
  const [formData, setFormData] = useState<LoanEnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    loanCategory: initialCategory,
    requestedAmount: initialAmount ? String(initialAmount) : '',
    tenureYears: '3',
    employmentType: 'Salaried',
    notes: '',
  });

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, loanCategory: initialCategory }));
    }
    if (initialAmount) {
      setFormData((prev) => ({ ...prev, requestedAmount: String(initialAmount) }));
    }
  }, [initialCategory, initialAmount]);

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.requestedAmount.trim() || Number(formData.requestedAmount) <= 0) {
      setErrorMsg('Please specify the required loan amount.');
      return;
    }

    // Success state
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      loanCategory: 'Personal Loans',
      requestedAmount: '',
      tenureYears: '3',
      employmentType: 'Salaried',
      notes: '',
    });
  };

  const content = (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="p-6 sm:p-10">
        {submitted ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900">
                Loan Enquiry Received
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. An associate from <span className="font-semibold text-slate-900">S & L Financial Associate</span> will review your enquiry for <span className="font-semibold text-amber-700">{formData.loanCategory}</span> and connect with you shortly.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl max-w-md mx-auto text-left text-xs space-y-2">
              <div className="font-bold text-slate-800 text-sm mb-2">Need Immediate Guidance?</div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Call directly: </span>
                <a href={`tel:${COMPANY_CONTACTS.phoneTel}`} className="font-bold text-slate-900 hover:text-amber-600">
                  {COMPANY_CONTACTS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Email: </span>
                <a href={`mailto:${COMPANY_CONTACTS.email}`} className="font-medium text-slate-900 hover:text-amber-600 break-all">
                  {COMPANY_CONTACTS.email}
                </a>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Submit Another Enquiry
              </button>
              {isModal && onClose && (
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="max-w-xl mb-8">
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                Get In Touch
              </span>
              <h3
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1"
                style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif" }}
              >
                Loan Enquiry & Consultation Form
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Provide your requirements below. Our team evaluates your requirement objectively and guides you on eligible borrowing options in India.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-6 p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="enquiry-fullname" className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="enquiry-fullname"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar / Dr. Ananya"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="enquiry-phone" className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number (+91) *
                  </label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98864 34652"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label htmlFor="enquiry-email" className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="enquiry-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. yourname@domain.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                  />
                </div>

                {/* Loan Category */}
                <div>
                  <label htmlFor="enquiry-category" className="block text-xs font-bold text-slate-700 mb-1">
                    Loan Category *
                  </label>
                  <select
                    id="enquiry-category"
                    value={formData.loanCategory}
                    onChange={(e) =>
                      setFormData({ ...formData, loanCategory: e.target.value as LoanCategory })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                  >
                    <option value="Personal Loans">Personal Loans</option>
                    <option value="Doctor Loans">Doctor Loans</option>
                    <option value="Business Loans">Business Loans</option>
                    <option value="Home Loans">Home Loans</option>
                    <option value="Loan Against Property">Loan Against Property</option>
                    <option value="Other Loan Solutions">Other Loan Solutions</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Requested Amount */}
                <div>
                  <label htmlFor="enquiry-amount" className="block text-xs font-bold text-slate-700 mb-1">
                    Requested Amount (₹ INR) *
                  </label>
                  <input
                    id="enquiry-amount"
                    type="number"
                    required
                    min={25000}
                    step={10000}
                    value={formData.requestedAmount}
                    onChange={(e) => setFormData({ ...formData, requestedAmount: e.target.value })}
                    placeholder="e.g. 1500000"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 font-mono"
                  />
                </div>

                {/* Applicant Profile */}
                <div>
                  <label htmlFor="enquiry-profile" className="block text-xs font-bold text-slate-700 mb-1">
                    Applicant Profile
                  </label>
                  <select
                    id="enquiry-profile"
                    value={formData.employmentType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        employmentType: e.target.value as LoanEnquiryFormData['employmentType'],
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                  >
                    <option value="Salaried">Salaried Individual</option>
                    <option value="Doctor / Medical Professional">Doctor / Medical Professional</option>
                    <option value="Self-Employed / Business">Self-Employed / Business Owner</option>
                    <option value="Professional">Other Professional</option>
                  </select>
                </div>
              </div>

              {/* Message / Requirements */}
              <div>
                <label htmlFor="enquiry-notes" className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Requirements or Property Details (Optional)
                </label>
                <textarea
                  id="enquiry-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any specific requirements (e.g. Clinic expansion, residential flat purchase, tenure preference)..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  <span>Confidential financial guidance · India</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {isModal && onClose && (
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg cursor-pointer"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );

  if (isModal) {
    return (
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
          className="relative max-w-2xl w-full max-h-[92vh] overflow-y-auto"
        >
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-700 text-lg font-bold cursor-pointer"
              aria-label="Close form"
            >
              ✕
            </button>
          )}
          {content}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <section id="enquiry" className="py-16 sm:py-24 bg-slate-100/60 border-b border-slate-200/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {content}
      </motion.div>
    </section>
  );
};
