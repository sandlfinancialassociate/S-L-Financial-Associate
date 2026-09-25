import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LoanCalculator } from './components/LoanCalculator';
import { LoanProductsSection } from './components/LoanProductsSection';
import { ServicesAndProcess } from './components/ServicesAndProcess';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { LoanEnquirySection } from './components/LoanEnquirySection';
import { Footer } from './components/Footer';
import { LegalModals, ModalType } from './components/LegalModals';
import { ChatSupportWidget } from './components/ChatSupportWidget';
import { LoanCategory } from './types';
import { Phone, Shield, ArrowRight, ChevronUp } from 'lucide-react';
import { COMPANY_CONTACTS } from './data/loanData';

export default function App() {
  // Modal states
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<LoanCategory>('Personal Loans');
  const [selectedAmount, setSelectedAmount] = useState<number | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<ModalType>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Enquiry modal with optional category and amount
  const handleOpenEnquiryModal = (category?: string, amount?: number) => {
    if (category) {
      setSelectedCategory(category as LoanCategory);
    }
    if (amount) {
      setSelectedAmount(amount);
    }
    setIsEnquiryModalOpen(true);
  };

  // Smooth scroll to page section
  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* Top Advisory Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-200">
              S & L Financial Associate · Bangalore, India
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${COMPANY_CONTACTS.phoneTel}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Helpline: {COMPANY_CONTACTS.phone}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">
              Email: {COMPANY_CONTACTS.email}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <Navbar
        onOpenEnquiry={(cat) => handleOpenEnquiryModal(cat)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenEnquiry={() => handleOpenEnquiryModal()}
          onExploreLoans={() => handleNavigateSection('loans')}
        />

        {/* Loan Products Suite (The 6 required loan categories) */}
        <LoanProductsSection
          onOpenEnquiry={(cat) => handleOpenEnquiryModal(cat)}
        />

        {/* Interactive Loan EMI Calculator */}
        <LoanCalculator
          onSelectForEnquiry={(cat, amt) => handleOpenEnquiryModal(cat, amt)}
        />

        {/* Services & Step-by-Step Process */}
        <ServicesAndProcess
          onOpenEnquiry={() => handleOpenEnquiryModal()}
        />

        {/* Frequently Asked Questions */}
        <FaqSection
          onOpenEnquiry={() => handleOpenEnquiryModal()}
        />

        {/* Direct Contact Section with Verified Details */}
        <ContactSection
          onOpenEnquiry={() => handleOpenEnquiryModal()}
        />

        {/* On-Page Loan Enquiry Form */}
        <LoanEnquirySection
          initialCategory={selectedCategory}
          initialAmount={selectedAmount}
        />
      </main>

      {/* Site Footer */}
      <Footer
        onOpenEnquiry={(cat) => handleOpenEnquiryModal(cat)}
        onNavigateSection={handleNavigateSection}
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />

      {/* Loan Enquiry Popup Modal */}
      <AnimatePresence>
        {isEnquiryModalOpen && (
          <LoanEnquirySection
            isModal
            initialCategory={selectedCategory}
            initialAmount={selectedAmount}
            onClose={() => setIsEnquiryModalOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Legal & Careers Modals */}
      <LegalModals
        modalType={legalModalType}
        onClose={() => setLegalModalType(null)}
        onOpenEnquiry={() => {
          setLegalModalType(null);
          handleOpenEnquiryModal();
        }}
      />

      {/* Floating Chat Support Widget with Speech Bubble Icon */}
      <ChatSupportWidget
        onOpenLoanEnquiry={(cat) => handleOpenEnquiryModal(cat)}
      />

      {/* Floating Smooth Back-to-Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 left-6 z-40 p-3 bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 rounded-full shadow-lg border border-slate-200/80 backdrop-blur-md transition-colors cursor-pointer flex items-center justify-center group"
          >
            <ChevronUp className="w-5 h-5 text-slate-700 group-hover:text-amber-600 transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
