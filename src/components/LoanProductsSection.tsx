import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOAN_PRODUCTS } from '../data/loanData';
import { LoanDetail, LoanCategory } from '../types';
import { 
  User, 
  Stethoscope, 
  Building2, 
  Home, 
  Landmark, 
  Layers, 
  Check, 
  ArrowRight, 
  Info,
  Calendar,
  CreditCard,
  Sparkles
} from 'lucide-react';

interface LoanProductsSectionProps {
  onOpenEnquiry: (category: LoanCategory) => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'personal-loans': <User className="w-5 h-5 text-amber-600" />,
  'doctor-loans': <Stethoscope className="w-5 h-5 text-amber-600" />,
  'business-loans': <Building2 className="w-5 h-5 text-amber-600" />,
  'home-loans': <Home className="w-5 h-5 text-amber-600" />,
  'loan-against-property': <Landmark className="w-5 h-5 text-amber-600" />,
  'other-loan-solutions': <Layers className="w-5 h-5 text-amber-600" />,
};

const FILTER_TABS = [
  { id: 'all', label: 'All 6 Loan Solutions' },
  { id: 'personal', label: 'Personal & Professional', matchIds: ['personal-loans', 'doctor-loans'] },
  { id: 'business', label: 'Business & Commercial', matchIds: ['business-loans', 'other-loan-solutions'] },
  { id: 'property', label: 'Property & Mortgage', matchIds: ['home-loans', 'loan-against-property'] },
];

export const LoanProductsSection: React.FC<LoanProductsSectionProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeDetail, setActiveDetail] = useState<LoanDetail | null>(null);

  const filteredProducts = LOAN_PRODUCTS.filter((prod) => {
    if (activeTab === 'all') return true;
    const currentTab = FILTER_TABS.find((t) => t.id === activeTab);
    return currentTab?.matchIds?.includes(prod.id);
  });

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="loans" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
              Financing Solutions
            </span>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1"
              style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              Loan Solutions & Financial Guidance
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore our structured borrowing portfolio tailored for salaried individuals, healthcare specialists, enterprise leaders, and property owners across India.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-slate-50 border border-slate-200 p-3.5 rounded-xl max-w-xs shrink-0 shadow-2xs">
            <span className="font-semibold text-slate-800 block mb-0.5">Assisted Evaluation</span>
            Our financial associate evaluates documentation and credit suitability to help you choose the right loan.
          </div>
        </motion.div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 p-1.5 bg-slate-100/80 rounded-2xl max-w-fit border border-slate-200/60">
          {FILTER_TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  isSelected ? 'text-slate-950 font-bold' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="loanFilterActive"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200/80 -z-0"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 6 Loan Categories Grid with Animated Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              const hasImage = Boolean(product.image);

              return (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 15 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
                  className="group flex flex-col justify-between bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Product Photo */}
                  {hasImage && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-200/60">
                      <img
                        src={product.image}
                        alt={`${product.name} financial assistance by S & L Financial Associate`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 text-xs font-bold text-white drop-shadow-sm flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>{product.name}</span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    {/* Category icon and title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-2xs group-hover:border-amber-200 group-hover:bg-amber-50/50 transition-colors">
                        {CATEGORY_ICONS[product.id] || <CreditCard className="w-5 h-5 text-amber-600" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                          {product.name}
                        </h3>
                        <div className="text-[11px] font-medium text-slate-500">
                          Tenure: {product.tenureYears}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6 flex-1 text-xs text-slate-700">
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Range & Action Bar */}
                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                          Eligible Quantum
                        </span>
                        <span className="text-xs font-bold text-slate-900 font-mono tabular-nums">
                          Up to {formatINR(product.maxAmount)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setActiveDetail(product)}
                          className="px-2.5 py-1.5 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition-colors font-medium flex items-center gap-1 cursor-pointer"
                          title="View details & criteria"
                        >
                          <Info className="w-3.5 h-3.5" />
                          <span>Details</span>
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => onOpenEnquiry(product.name)}
                          className="inline-flex items-center gap-1 px-3.5 py-1.5 bg-slate-900 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-2xs"
                        >
                          <span>Enquire</span>
                          <ArrowRight className="w-3 h-3" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal for In-Depth Loan Details with AnimatePresence */}
        <AnimatePresence>
          {activeDetail && (
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
                className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setActiveDetail(null)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-lg font-bold p-1 cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                    {CATEGORY_ICONS[activeDetail.id]}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">{activeDetail.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">{activeDetail.tagline}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {activeDetail.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6 p-3 bg-slate-50 rounded-xl text-xs">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Indicative Quantum</span>
                    <span className="font-bold text-slate-900 font-mono tabular-nums">
                      {formatINR(activeDetail.minAmount)} - {formatINR(activeDetail.maxAmount)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Repayment Tenure</span>
                    <span className="font-bold text-slate-900 font-mono">{activeDetail.tenureYears}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                      Key Features & Options
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {activeDetail.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                      Standard Eligibility Criteria
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {activeDetail.eligibility.map((e, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-100">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const selected = activeDetail.name;
                      setActiveDetail(null);
                      onOpenEnquiry(selected);
                    }}
                    className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center"
                  >
                    Proceed with Loan Enquiry
                  </motion.button>
                  <button
                    onClick={() => setActiveDetail(null)}
                    className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

