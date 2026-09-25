import React, { useState, useId } from 'react';
import { motion } from 'motion/react';
import { LoanCategory } from '../types';
import { Calculator, ArrowRight, Check } from 'lucide-react';

interface LoanCalculatorProps {
  onSelectForEnquiry: (category: LoanCategory, amount: number) => void;
}

const PRESET_RANGES: Record<
  LoanCategory,
  { defaultAmount: number; min: number; max: number; step: number; defaultTenure: number; defaultRate: number }
> = {
  'Personal Loans': {
    defaultAmount: 500000,
    min: 50000,
    max: 4000000,
    step: 25000,
    defaultTenure: 3,
    defaultRate: 11.5,
  },
  'Doctor Loans': {
    defaultAmount: 2500000,
    min: 500000,
    max: 20000000,
    step: 50000,
    defaultTenure: 5,
    defaultRate: 10.0,
  },
  'Business Loans': {
    defaultAmount: 2000000,
    min: 200000,
    max: 50000000,
    step: 100000,
    defaultTenure: 4,
    defaultRate: 12.0,
  },
  'Home Loans': {
    defaultAmount: 4500000,
    min: 500000,
    max: 100000000,
    step: 100000,
    defaultTenure: 20,
    defaultRate: 8.75,
  },
  'Loan Against Property': {
    defaultAmount: 6000000,
    min: 1000000,
    max: 150000000,
    step: 250000,
    defaultTenure: 12,
    defaultRate: 9.5,
  },
  'Other Loan Solutions': {
    defaultAmount: 1500000,
    min: 100000,
    max: 50000000,
    step: 50000,
    defaultTenure: 5,
    defaultRate: 11.0,
  },
};

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({ onSelectForEnquiry }) => {
  const [category, setCategory] = useState<LoanCategory>('Personal Loans');
  const [amount, setAmount] = useState<number>(PRESET_RANGES['Personal Loans'].defaultAmount);
  const [tenureYears, setTenureYears] = useState<number>(PRESET_RANGES['Personal Loans'].defaultTenure);
  const [interestRate, setInterestRate] = useState<number>(PRESET_RANGES['Personal Loans'].defaultRate);

  const amountInputId = useId();
  const tenureInputId = useId();
  const rateInputId = useId();

  const handleCategoryChange = (newCat: LoanCategory) => {
    setCategory(newCat);
    const preset = PRESET_RANGES[newCat];
    setAmount(preset.defaultAmount);
    setTenureYears(preset.defaultTenure);
    setInterestRate(preset.defaultRate);
  };

  // Standard Monthly EMI calculation
  const months = tenureYears * 12;
  const monthlyRate = interestRate / 12 / 100;
  const emi =
    monthlyRate === 0
      ? amount / months
      : (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - amount;

  // Formatting currency in Indian format
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-md mb-3 border border-amber-200/70">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Planning</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            Loan EMI & Indicative Repayment Estimator
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Estimate indicative monthly installments across our key loan solutions. Actual terms and interest rates are determined based on lender guidelines and individual profile assessment.
          </p>
        </motion.div>

        {/* Category Tabs with Animated Pill */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200">
          {(Object.keys(PRESET_RANGES) as LoanCategory[]).map((cat) => {
            const isSelected = category === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="calcTabHighlight"
                    className="absolute inset-0 bg-slate-900 rounded-lg -z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sliders Card */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-6"
          >
            {/* Amount Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={amountInputId} className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Loan Amount Required
                </label>
                <span className="text-lg font-bold text-slate-900 font-mono tabular-nums">
                  {formatINR(amount)}
                </span>
              </div>
              <input
                id={amountInputId}
                type="range"
                min={PRESET_RANGES[category].min}
                max={PRESET_RANGES[category].max}
                step={PRESET_RANGES[category].step}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>{formatINR(PRESET_RANGES[category].min)}</span>
                <span>{formatINR(PRESET_RANGES[category].max)}</span>
              </div>

              {/* Quick Select Preset Pills with motion */}
              <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                <span className="text-[11px] text-slate-500 font-medium mr-1">Quick Select:</span>
                {[500000, 1500000, 3000000, 5000000, 10000000]
                  .filter((v) => v >= PRESET_RANGES[category].min && v <= PRESET_RANGES[category].max)
                  .map((presetVal) => {
                    const isSelected = amount === presetVal;
                    return (
                      <motion.button
                        key={presetVal}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setAmount(presetVal)}
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950 shadow-xs'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {formatINR(presetVal)}
                      </motion.button>
                    );
                  })}
              </div>
            </div>

            {/* Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={tenureInputId} className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Repayment Tenure (Years)
                </label>
                <span className="text-lg font-bold text-slate-900 font-mono tabular-nums">
                  {tenureYears} {tenureYears === 1 ? 'Year' : 'Years'} ({months} Months)
                </span>
              </div>
              <input
                id={tenureInputId}
                type="range"
                min={1}
                max={category === 'Home Loans' ? 30 : category === 'Loan Against Property' ? 15 : 7}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>1 Year</span>
                <span>{category === 'Home Loans' ? '30 Years' : category === 'Loan Against Property' ? '15 Years' : '7 Years'}</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={rateInputId} className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Indicative Interest Rate (p.a.)
                </label>
                <span className="text-lg font-bold text-slate-900 font-mono tabular-nums">
                  {interestRate.toFixed(2)}%
                </span>
              </div>
              <input
                id={rateInputId}
                type="range"
                min={7.5}
                max={18.0}
                step={0.25}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>7.50%</span>
                <span>18.00%</span>
              </div>
            </div>

            {/* Note */}
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              * Calculations are indicative and for illustration purposes. Final loan sanction, interest rates, and loan tenure are subject to lender policies and borrower financial verification.
            </p>
          </motion.div>

          {/* Results Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                Estimated Monthly Instalment
              </span>
              <motion.div
                key={emi}
                initial={{ scale: 0.98, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-mono tabular-nums"
              >
                {formatINR(emi)}
                <span className="text-xs font-normal text-slate-400 ml-1">/ month</span>
              </motion.div>
            </div>

            {/* Breakdown Table */}
            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400">Principal Loan Amount</span>
                <span className="font-semibold text-slate-200 font-mono tabular-nums">{formatINR(amount)}</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400">Estimated Total Interest</span>
                <span className="font-semibold text-amber-400 font-mono tabular-nums">{formatINR(totalInterest)}</span>
              </div>

              <div className="flex justify-between items-center py-1 pt-2 border-t border-slate-800">
                <span className="text-slate-300 font-medium">Total Amount Payable</span>
                <span className="font-bold text-white font-mono tabular-nums text-base">{formatINR(totalPayment)}</span>
              </div>
            </div>

            {/* Visual ratio bar with motion animate */}
            <div>
              <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <motion.div
                  className="bg-blue-500 h-full"
                  animate={{ width: `${Math.round((amount / totalPayment) * 100)}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  title="Principal Amount"
                />
                <motion.div
                  className="bg-amber-500 h-full"
                  animate={{ width: `${Math.round((totalInterest / totalPayment) * 100)}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  title="Total Interest"
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                  Principal ({Math.round((amount / totalPayment) * 100)}%)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                  Interest ({Math.round((totalInterest / totalPayment) * 100)}%)
                </span>
              </div>
            </div>

            {/* Direct enquiry CTA with prefill */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectForEnquiry(category, amount)}
              className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Enquire for {category}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

