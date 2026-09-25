export type LoanCategory = 
  | 'Personal Loans'
  | 'Doctor Loans'
  | 'Business Loans'
  | 'Home Loans'
  | 'Loan Against Property'
  | 'Other Loan Solutions';

export interface LoanDetail {
  id: string;
  name: LoanCategory;
  tagline: string;
  description: string;
  minAmount: number;
  maxAmount: number;
  tenureYears: string;
  indicativeRate: string;
  features: string[];
  eligibility: string[];
  image?: string;
}

export interface LoanEnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  loanCategory: LoanCategory;
  requestedAmount: string;
  tenureYears: string;
  employmentType: 'Salaried' | 'Doctor / Medical Professional' | 'Self-Employed / Business' | 'Professional';
  notes: string;
}
