import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_CONTACTS } from '../data/loanData';
import { LoanCategory } from '../types';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import { ModalType } from './LegalModals';

interface FooterProps {
  onOpenEnquiry: (category?: LoanCategory) => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenLegalModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEnquiry,
  onNavigateSection,
  onOpenLegalModal,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Information & Contact Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/80">
          <div className="lg:col-span-6 space-y-4">
            {/* Brand wordmark */}
            <div className="flex items-center">
              <BrandLogo size="lg" theme="dark" variant="horizontal" />
            </div>

            {/* Official Blurb */}
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
              {COMPANY_CONTACTS.blurb}
            </p>
          </div>

          {/* Contacts (icon + text rows, in order: envelope -> phone -> map-pin) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-3.5 text-xs sm:text-sm">
            <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-1">
              Direct Contact
            </div>

            {/* 1. Envelope icon -> mailto:sandlfinancialassociate@gmail.com */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="flex items-center gap-3"
            >
              <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-orange-500 shrink-0">
                <Mail className="w-4 h-4" />
              </span>
              <a
                href={`mailto:${COMPANY_CONTACTS.email}`}
                className="text-slate-300 hover:text-orange-400 transition-colors font-medium break-all"
              >
                {COMPANY_CONTACTS.email}
              </a>
            </motion.div>

            {/* 2. Phone icon -> tel:+919886434652 */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="flex items-center gap-3"
            >
              <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-orange-500 shrink-0">
                <Phone className="w-4 h-4" />
              </span>
              <a
                href={`tel:${COMPANY_CONTACTS.phoneTel}`}
                className="text-slate-300 hover:text-orange-400 transition-colors font-semibold font-mono"
              >
                {COMPANY_CONTACTS.phone}
              </a>
            </motion.div>

            {/* 3. Map-pin icon -> India (plain <span>, not a link) */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="flex items-center gap-3"
            >
              <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-orange-500 shrink-0">
                <MapPin className="w-4 h-4" />
              </span>
              <span className="text-slate-300 font-medium">
                {COMPANY_CONTACTS.location}
              </span>
            </motion.div>
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-slate-800/80 text-xs sm:text-sm">
          {/* Column 1 heading "Loans" */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Loans</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('loans');
                    onOpenEnquiry('Personal Loans');
                  }}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Personal Loans
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('loans');
                    onOpenEnquiry('Doctor Loans');
                  }}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Doctor Loans
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('loans');
                    onOpenEnquiry('Business Loans');
                  }}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Business Loans
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('loans');
                    onOpenEnquiry('Home Loans');
                  }}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Home Loans
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('loans');
                    onOpenEnquiry('Loan Against Property');
                  }}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Loan Against Property
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('loans');
                    onOpenEnquiry('Other Loan Solutions');
                  }}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Other Loan Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2 heading "Company" */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigateSection('loans')}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('process')}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('careers')}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 heading "Support" */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Support</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigateSection('faqs')}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry()}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Loan Enquiry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('process')}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Application Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Customer Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 heading "Stay Connected" */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Stay Connected</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Stay updated with our latest financial solutions, loan information, and company updates.
            </p>

            <AnimatePresence mode="wait">
              {newsletterSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-orange-400 flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you for subscribing to updates!</span>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleNewsletterSubmit}
                  className="relative mt-2"
                >
                  {/* visually-hidden label for nl-email */}
                  <label htmlFor="nl-email" className="sr-only">
                    Email address
                  </label>

                  <div className="flex items-center">
                    <input
                      id="nl-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full pl-3.5 pr-12 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    />

                    {/* submit button aria-label="Subscribe" containing existing right-arrow SVG */}
                    <motion.button
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.9 }}
                      type="submit"
                      aria-label="Subscribe"
                      className="absolute right-1 top-1 bottom-1 px-3 text-slate-400 hover:text-orange-400 transition-colors rounded-md flex items-center justify-center cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          {/* Bottom bar left: Social Links (Facebook, Twitter, Instagram @smsfinance_offical, LinkedIn) */}
          <div className="flex items-center gap-5">
            {/* Facebook */}
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1.5"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
              </svg>
              <span className="hidden sm:inline">Facebook</span>
            </motion.a>

            {/* Twitter */}
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1.5"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
              <span className="hidden sm:inline">Twitter</span>
            </motion.a>

            {/* Instagram: For Instagram use: @smsfinance_offical */}
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={COMPANY_CONTACTS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1.5"
              aria-label="Instagram @smsfinance_offical"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>{COMPANY_CONTACTS.instagram}</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1.5"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="hidden sm:inline">LinkedIn</span>
            </motion.a>
          </div>

          {/* Bottom bar right: Legal Links */}
          <div className="flex items-center gap-5">
            <motion.button
              whileHover={{ scale: 1.05, color: '#F59E0B' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </motion.button>
            <span>/</span>
            <motion.button
              whileHover={{ scale: 1.05, color: '#F59E0B' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </motion.button>
            <span>/</span>
            <motion.button
              whileHover={{ scale: 1.05, color: '#F59E0B' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenLegalModal('cookies')}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Cookie Policy
            </motion.button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-[11px] text-slate-600">
          © {new Date().getFullYear()} S & L Financial Associate. All rights reserved. Professional financial guidance and loan solutions in Bangalore & Pan-India.
        </div>
      </div>
    </footer>
  );
};
