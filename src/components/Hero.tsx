import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_CONTACTS } from '../data/loanData';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/images/hero_financial_advisory_1790330432403.jpg';
import { OfficialLogoSvg } from './BrandLogo';

interface HeroProps {
  onOpenEnquiry: () => void;
  onExploreLoans: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreLoans }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-slate-50/80 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text / Value Proposition Zone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-950 bg-blue-50/90 border border-blue-200/80 px-3.5 py-1.5 rounded-full shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0" />
              <span>S & L Financial Associates · Bangalore</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              Professional Financial Guidance & Structured Loan Solutions
            </motion.h1>

            {/* Official Company Blurb */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              {COMPANY_CONTACTS.blurb}
            </motion.p>

            {/* Core Solutions list */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-slate-700 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Personal Loans</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Doctor Loans</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Business Loans</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Home Loans</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Loan Against Property</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Other Loan Solutions</span>
              </div>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgba(10, 41, 77, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-950 hover:to-blue-900 rounded-xl shadow-md transition-all cursor-pointer border border-blue-950/20"
              >
                <span>Submit Loan Enquiry</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, borderColor: '#3B82F6' }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreLoans}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-slate-700 hover:text-blue-900 bg-white hover:bg-blue-50/50 border border-slate-300 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                Explore Loan Options
              </motion.button>
            </motion.div>

            {/* Direct Contact Bar in exact requested order */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-6 border-t border-slate-200/80"
            >
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                Direct Contact & Guidance Channels
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-700">
                {/* 1. Envelope icon -> email */}
                <a
                  href={`mailto:${COMPANY_CONTACTS.email}`}
                  className="inline-flex items-center gap-2 hover:text-orange-600 transition-colors group"
                >
                  <span className="p-1.5 rounded-md bg-blue-50 text-blue-700 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium underline-offset-4 group-hover:underline">
                    {COMPANY_CONTACTS.email}
                  </span>
                </a>

                {/* 2. Phone icon -> tel */}
                <a
                  href={`tel:${COMPANY_CONTACTS.phoneTel}`}
                  className="inline-flex items-center gap-2 hover:text-orange-600 transition-colors group"
                >
                  <span className="p-1.5 rounded-md bg-blue-50 text-blue-700 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-semibold">{COMPANY_CONTACTS.phone}</span>
                </a>

                {/* 3. Map-pin icon -> India plain span */}
                <span className="inline-flex items-center gap-2 text-slate-700">
                  <span className="p-1.5 rounded-md bg-blue-50 text-blue-700">
                    <MapPin className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium">{COMPANY_CONTACTS.location}</span>
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Ambient subtle backdrop glow with breathing animation */}
              <motion.div
                animate={{ opacity: [0.5, 0.75, 0.5], scale: [1, 1.03, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-1.5 bg-gradient-to-tr from-orange-500/20 via-blue-600/15 to-transparent rounded-2xl filter blur-xl"
              />

              {/* Main Frame */}
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xl"
              >
                <div className="relative">
                  <img
                    src={heroImg}
                    alt="S & L Financial Associates consultation and corporate guidance environment"
                    className="w-full aspect-[4/3] object-cover object-center"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Modern Floating Live Status Pill */}
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-slate-800"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Direct Guidance Available</span>
                  </motion.div>

                  {/* Floating Official Brand Seal Stamp */}
                  <motion.div
                    animate={{ y: [3, -3, 3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-blue-100 flex items-center gap-2 text-xs font-bold text-blue-950"
                  >
                    <div className="w-6 h-4 shrink-0">
                      <OfficialLogoSvg aspect="mark" withReflection={false} withText={false} />
                    </div>
                    <span>Official S & L Advisory</span>
                  </motion.div>
                </div>

                {/* Overlay Card with guidance assurance */}
                <div className="p-5 bg-white border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-blue-900">Borrower Guidance Suite</span>
                    <span className="font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-100">
                      Assisted Advisory
                    </span>
                  </div>
                  <h2 className="text-sm font-bold text-slate-900 leading-snug">
                    Transparent evaluation across personal, doctor, and enterprise credit options
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our team in Bangalore provides hands-on documentation assistance, eligibility analysis, and structured application coordination across India.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
