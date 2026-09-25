import { LoanDetail } from '../types';
import personalLoanImg from '../assets/images/personal_loan_finance_1790331792878.jpg';
import doctorLoanImg from '../assets/images/doctor_professional_loan_1790330445274.jpg';
import businessLoanImg from '../assets/images/business_growth_finance_1790330457515.jpg';

export const LOAN_PRODUCTS: LoanDetail[] = [
  {
    id: 'personal-loans',
    name: 'Personal Loans',
    tagline: 'Flexible financing for personal milestones and liquidity needs',
    description:
      'Explore customized personal loan options designed to meet your immediate or planned financial requirements without collateral requirements. We guide you through eligibility, terms, and structured repayment schedules.',
    minAmount: 50000,
    maxAmount: 4000000,
    tenureYears: '1 to 5 Years',
    indicativeRate: 'Competitive market rates based on profile',
    image: personalLoanImg,
    features: [
      'Unsecured lending with no collateral needed',
      'Flexible tenures tailored to your cash flow',
      'Minimal paperwork and assisted application coordination',
      'Assistance with debt consolidation and personal expenses',
    ],
    eligibility: [
      'Salaried individuals with regular monthly income',
      'Self-employed professionals and business owners',
      'Valid identification and address documentation in India',
      'Banking transaction records for the last 6 months',
    ],
  },
  {
    id: 'doctor-loans',
    name: 'Doctor Loans',
    tagline: 'Specialized financial solutions for medical practitioners and clinics',
    description:
      'Dedicated loan options tailored specifically for medical doctors, dentists, surgeons, and healthcare practitioners to fund clinic expansion, purchase specialized medical equipment, or support personal goals.',
    minAmount: 500000,
    maxAmount: 20000000,
    tenureYears: '1 to 7 Years',
    indicativeRate: 'Preferential terms for qualified practitioners',
    image: doctorLoanImg,
    features: [
      'Tailored eligibility criteria recognizing medical qualifications',
      'Facility for medical equipment purchase and clinic setup',
      'Working capital options for established healthcare practices',
      'Dedicated guidance with streamlined document submission',
    ],
    eligibility: [
      'Practicing MBBS, MD, MS, BDS, MDS, or recognized medical specialists',
      'Registration with the respective State / National Medical Council',
      'Clinic or hospital operational history where applicable',
      'Past 6 to 12 months bank statements and qualification records',
    ],
  },
  {
    id: 'business-loans',
    name: 'Business Loans',
    tagline: 'Capital support to fuel enterprise growth and operations',
    description:
      'Financial guidance for emerging enterprises, traders, manufacturers, and service providers seeking working capital, inventory funding, machinery purchase, or business expansion.',
    minAmount: 200000,
    maxAmount: 50000000,
    tenureYears: '1 to 7 Years',
    indicativeRate: 'Structured according to business financials',
    image: businessLoanImg,
    features: [
      'Options for both secured and unsecured business borrowing',
      'Structured to support working capital cycles and capital expenditure',
      'Clear evaluation of cash flow and balance sheet capacity',
      'Guidance for sole proprietors, partnerships, and private entities',
    ],
    eligibility: [
      'Active business operations with verified trade history',
      'GST returns and business bank statements',
      'Financial records and income tax returns where applicable',
      'Entity registration certificates and KYC of promoters',
    ],
  },
  {
    id: 'home-loans',
    name: 'Home Loans',
    tagline: 'Support for residential purchase, construction, and balance transfer',
    description:
      'Comprehensive assistance in identifying suitable home loan options for purchasing ready or under-construction property, constructing a residential home, or transferring existing home loans to optimize terms.',
    minAmount: 500000,
    maxAmount: 100000000,
    tenureYears: '5 to 30 Years',
    indicativeRate: 'Long-term floating and fixed options available',
    features: [
      'Extended tenures up to 30 years for affordable monthly EMIs',
      'Guidance on property legal and technical documentation',
      'Balance transfer and top-up facility exploration',
      'Step-by-step assistance through sanction and disbursement',
    ],
    eligibility: [
      'Salaried employees and self-employed professionals / businesspersons',
      'Property title documents and approved construction plans',
      'Proof of stable income and financial stability',
      'Identity, age, and residence verification documents in India',
    ],
  },
  {
    id: 'loan-against-property',
    name: 'Loan Against Property',
    tagline: 'Unlock substantial capital against residential or commercial property',
    description:
      'Leverage the built-in value of your owned residential, commercial, or industrial real estate to secure significant funding with longer repayment flexibility and attractive terms.',
    minAmount: 1000000,
    maxAmount: 150000000,
    tenureYears: '3 to 15 Years',
    indicativeRate: 'Lower cost secured borrowing structure',
    features: [
      'Higher loan quantum proportional to property market valuation',
      'Extended repayment tenures reducing monthly cash outlay',
      'Applicable for business expansion, debt consolidation, or major outlays',
      'Full guidance on property valuation and title verification steps',
    ],
    eligibility: [
      'Freehold or mortgageable residential, commercial, or industrial real estate',
      'Clear property ownership titles and legal clearance',
      'Demonstrated repayment capacity through income or business revenue',
      'Applicable for individuals, firms, and corporate entities',
    ],
  },
  {
    id: 'other-loan-solutions',
    name: 'Other Loan Solutions',
    tagline: 'Customized financial advisory across diverse borrowing needs',
    description:
      'Personalized guidance for specialized lending needs including loan balance transfers, machinery financing, education funding, lease rental discounting, and bespoke credit facilities.',
    minAmount: 100000,
    maxAmount: 50000000,
    tenureYears: 'Flexible based on solution',
    indicativeRate: 'Custom tailored according to requirement',
    features: [
      'Advisory on loan restructuring and balance transfer optimization',
      'Specialized financing options for equipment and machinery',
      'Objective guidance matched to your specific financial priorities',
      'Direct one-on-one consultation with our financial associate',
    ],
    eligibility: [
      'Open to salaried, self-employed, and enterprise borrowers',
      'Documentation tailored to the specific credit requirement',
      'Assessed on individual merit, profile, and repayment viability',
      'Subject to standard KYC and verification in India',
    ],
  },
];

export const COMPANY_CONTACTS = {
  name: 'S & L Financial Associates',
  blurb:
    'Professional financial guidance and loan solutions, helping individuals, professionals, and businesses explore suitable financial options with confidence.',
  email: 'sandlfinancialassociate@gmail.com',
  phone: '+91 98864 34652',
  phoneTel: '+919886434652',
  location: 'Bangalore, India',
  city: 'Bangalore',
  address: 'Bangalore, Karnataka, India',
  instagram: '@smsfinance_offical',
  instagramUrl: 'https://instagram.com/smsfinance_offical',
};

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    q: 'How does S & L Financial Associates assist borrowers?',
    a: 'S & L Financial Associates provides professional financial guidance and loan solutions. We help individuals, medical professionals, and businesses evaluate loan categories, understand eligibility criteria, organize required documentation, and connect with suitable borrowing options with clarity and confidence.',
  },
  {
    q: 'What makes Doctor Loans distinct from standard personal loans?',
    a: 'Doctor Loans are tailored specifically for registered medical professionals (MBBS, MD, MS, BDS, MDS, and specialists). They often feature higher sanction limits, streamlined documentation recognizing professional medical qualifications, and specialized terms for clinic establishment or medical equipment financing.',
  },
  {
    q: 'Can I apply for a loan if I am self-employed or run a small enterprise?',
    a: 'Yes. We assist self-employed professionals, traders, proprietors, and business owners in exploring Business Loans, Loan Against Property, and customized borrowing options based on GST filings, banking turnover, and business track record.',
  },
  {
    q: 'What documents are typically required during the loan enquiry process?',
    a: 'Basic documents generally include KYC proofs (Identity & Address verification in India), income records (salary slips or business ITRs / financial statements), and recent 6-month bank account statements. For property loans, property ownership documents are also examined.',
  },
  {
    q: 'How can I reach S & L Financial Associate for guidance?',
    a: 'You can reach us directly via phone at +91 98864 34652, via email at sandlfinancialassociate@gmail.com, or by submitting our online Loan Enquiry form on this website. Our team assists clients in Bangalore and across India.',
  },
];
