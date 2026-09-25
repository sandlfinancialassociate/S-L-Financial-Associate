import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_CONTACTS } from '../data/loanData';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (prefillLoan?: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { id: 'loans', label: 'Loans' },
  { id: 'services', label: 'Our Services' },
  { id: 'process', label: 'Application Process' },
  { id: 'calculator', label: 'EMI Calculator' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Contact Us' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Zone 1: Official Logo on Left */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg py-1"
            aria-label="S & L Financial Associates Home"
          >
            <BrandLogo size="md" variant="horizontal" />
          </motion.a>

          {/* Zone 2: Clean 4-6 text navigation links with smooth hover highlight */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-700"
          >
            {NAV_ITEMS.map((item) => {
              const isHovered = hoveredNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  className="relative px-3.5 py-1.5 rounded-lg text-slate-700 hover:text-blue-950 transition-colors cursor-pointer"
                >
                  {isHovered && (
                    <motion.div
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-blue-50/80 rounded-lg -z-0 border border-blue-100/60"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${COMPANY_CONTACTS.phoneTel}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 px-3.5 py-2 rounded-lg transition-colors border border-slate-200/60"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              <span>{COMPANY_CONTACTS.phone}</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(10, 41, 77, 0.25)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-2 px-4.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-950 hover:to-blue-900 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer border border-blue-950/20"
            >
              <span>Loan Enquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
            </motion.button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-blue-900 rounded-md"
            >
              Enquire
            </button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col space-y-1 text-sm font-medium text-slate-800">
              {NAV_ITEMS.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left px-3 py-2 rounded-md hover:bg-slate-50 hover:text-amber-600 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_CONTACTS.phoneTel}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call: {COMPANY_CONTACTS.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 rounded-lg text-center"
              >
                Start Loan Enquiry
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
