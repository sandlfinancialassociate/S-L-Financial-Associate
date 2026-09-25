import React, { useState, useRef, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  FileCheck2,
  Clock,
  ExternalLink
} from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/loanData';
import { LoanCategory } from '../types';

interface ChatMessage {
  id: string;
  sender: 'associate' | 'user';
  text: string;
  time: string;
  actionType?: 'call' | 'email' | 'form' | 'options';
  options?: { label: string; action: string }[];
}

interface ChatSupportWidgetProps {
  onOpenLoanEnquiry: (category?: LoanCategory) => void;
}

const QUICK_TOPICS = [
  'Doctor Loans Criteria',
  'Required Documents',
  'Business Loan Options',
  'Loan Against Property',
  'Request a Callback',
];

export const ChatSupportWidget: React.FC<ChatSupportWidgetProps> = ({ onOpenLoanEnquiry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'associate',
      text: 'Welcome to S & L Financial Associate. How can we assist with your loan requirement or financial guidance today?',
      time: 'Just now',
      actionType: 'options',
      options: [
        { label: 'Doctor Loans Criteria', action: 'doctor_loans' },
        { label: 'Required Documents', action: 'documents' },
        { label: 'Business Loan Options', action: 'business_loans' },
        { label: 'Speak with Associate', action: 'callback' },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const getTimeString = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSendMessage = (userMessage: string) => {
    if (!userMessage.trim()) return;

    const newMsgId = `usr-${Date.now()}`;
    const userMsg: ChatMessage = {
      id: newMsgId,
      sender: 'user',
      text: userMessage,
      time: getTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Generate accurate, informative response from S & L Financial Associate
    setTimeout(() => {
      const lower = userMessage.toLowerCase();
      let reply: ChatMessage;

      if (lower.includes('doctor') || lower.includes('clinic') || lower.includes('medical') || lower.includes('hospital')) {
        reply = {
          id: `ast-${Date.now()}`,
          sender: 'associate',
          text: 'Our Doctor Loans are structured for MBBS, MD, MS, BDS, and registered specialists in India. They cover clinic expansion, specialized equipment financing, and working capital with tailored terms.',
          time: getTimeString(),
          actionType: 'form',
          options: [
            { label: 'Enquire for Doctor Loan', action: 'open_doctor_loan' },
            { label: 'Call Associate (+91 98864 34652)', action: 'call_phone' },
          ],
        };
      } else if (lower.includes('document') || lower.includes('paper') || lower.includes('proof') || lower.includes('eligib')) {
        reply = {
          id: `ast-${Date.now()}`,
          sender: 'associate',
          text: 'Standard documentation includes KYC (Aadhaar & PAN in India), past 6 months bank statements, and income verification (Salary slips or business ITRs). For property loans, title deeds are examined.',
          time: getTimeString(),
          actionType: 'options',
          options: [
            { label: 'Explore Loan Categories', action: 'explore_categories' },
            { label: 'Speak with Support', action: 'callback' },
          ],
        };
      } else if (lower.includes('business') || lower.includes('company') || lower.includes('firm') || lower.includes('enterprise')) {
        reply = {
          id: `ast-${Date.now()}`,
          sender: 'associate',
          text: 'We guide small and medium enterprises, traders, and proprietors with secured and unsecured business loans for working capital, machinery, and expansion across India.',
          time: getTimeString(),
          actionType: 'form',
          options: [
            { label: 'Submit Business Loan Enquiry', action: 'open_business_loan' },
            { label: 'Call Direct Helpline', action: 'call_phone' },
          ],
        };
      } else if (lower.includes('home') || lower.includes('house') || lower.includes('flat') || lower.includes('property')) {
        reply = {
          id: `ast-${Date.now()}`,
          sender: 'associate',
          text: 'We provide end-to-end guidance for Home Loans and Loans Against Property (LAP), helping you structure tenures up to 30 years and unlock property equity.',
          time: getTimeString(),
          actionType: 'form',
          options: [
            { label: 'Apply for Property / Home Loan', action: 'open_lap' },
            { label: 'Email Associate', action: 'email_associate' },
          ],
        };
      } else if (lower.includes('call') || lower.includes('phone') || lower.includes('contact') || lower.includes('number')) {
        reply = {
          id: `ast-${Date.now()}`,
          sender: 'associate',
          text: `You can reach our associate team directly in Bangalore at +91 98864 34652 or via email at ${COMPANY_CONTACTS.email}. We assist clients from Monday to Saturday, 9:30 AM to 6:30 PM IST.`,
          time: getTimeString(),
          actionType: 'call',
        };
      } else {
        reply = {
          id: `ast-${Date.now()}`,
          sender: 'associate',
          text: 'Thank you for your message. An associate from S & L Financial Associate is available to assist you with loan eligibility, paperwork verification, and structured financing.',
          time: getTimeString(),
          actionType: 'options',
          options: [
            { label: 'Submit Detailed Loan Enquiry', action: 'open_general_enquiry' },
            { label: 'Call Helpline: +91 98864 34652', action: 'call_phone' },
          ],
        };
      }

      setMessages((prev) => [...prev, reply]);
    }, 450);
  };

  const handleOptionClick = (action: string, label: string) => {
    switch (action) {
      case 'doctor_loans':
        handleSendMessage('What are the criteria for Doctor Loans?');
        break;
      case 'documents':
        handleSendMessage('What documents are required to apply?');
        break;
      case 'business_loans':
        handleSendMessage('Tell me about Business Loan options');
        break;
      case 'callback':
        handleSendMessage('I would like to speak directly with an associate');
        break;
      case 'open_doctor_loan':
        onOpenLoanEnquiry('Doctor Loans');
        setIsOpen(false);
        break;
      case 'open_business_loan':
        onOpenLoanEnquiry('Business Loans');
        setIsOpen(false);
        break;
      case 'open_lap':
        onOpenLoanEnquiry('Loan Against Property');
        setIsOpen(false);
        break;
      case 'open_general_enquiry':
        onOpenLoanEnquiry();
        setIsOpen(false);
        break;
      case 'call_phone':
        window.location.href = `tel:${COMPANY_CONTACTS.phoneTel}`;
        break;
      case 'email_associate':
        window.location.href = `mailto:${COMPANY_CONTACTS.email}`;
        break;
      case 'explore_categories':
        handleSendMessage('What loan solutions are available?');
        break;
      default:
        handleSendMessage(label);
        break;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      <AnimatePresence>
        {/* Closed State Floating Trigger Button with Speech Bubble Icon */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="relative group flex items-center"
          >
            {/* Subtle Hover Tooltip */}
            <div className="absolute right-16 mr-2 hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <span>Chat Support · S & L Financial</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleOpen}
              className="w-14 h-14 bg-gradient-to-tr from-slate-900 to-slate-800 text-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center border-2 border-amber-400 hover:border-amber-300 transition-colors duration-200 cursor-pointer relative"
              aria-label="Open Chat Support for S & L Financial Associate"
            >
              {/* Prominent speech bubble icon with decorative tail */}
              <MessageSquare className="w-7 h-7 text-amber-400" />

              {/* Unread indicator */}
              {hasUnread && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-white"></span>
                </span>
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Open Chat Widget Window with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 25 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="w-[92vw] sm:w-[380px] h-[520px] max-h-[82vh] bg-white rounded-2xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-950 text-white px-4 py-3.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold text-xs shadow-xs">
                  S&L
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    S & L Client Support
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Direct Financial Guidance · India</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Close Chat Window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Contact Banner */}
            <div className="bg-slate-100/90 px-3.5 py-1.5 border-b border-slate-200 flex items-center justify-between text-[11px] text-slate-700">
              <a
                href={`tel:${COMPANY_CONTACTS.phoneTel}`}
                className="flex items-center gap-1 hover:text-amber-700 font-semibold"
              >
                <Phone className="w-3 h-3 text-amber-600" />
                <span>{COMPANY_CONTACTS.phone}</span>
              </a>
              <span className="text-slate-400">·</span>
              <a
                href={`mailto:${COMPANY_CONTACTS.email}`}
                className="hover:text-amber-700 truncate max-w-[170px]"
                title={COMPANY_CONTACTS.email}
              >
                Email Support
              </a>
            </div>

            {/* Messages Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/60 text-xs">
              {messages.map((msg) => {
                const isAssociate = msg.sender === 'associate';

                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`flex flex-col ${isAssociate ? 'items-start' : 'items-end'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed ${
                        isAssociate
                          ? 'bg-white text-slate-800 border border-slate-200 rounded-tl-xs'
                          : 'bg-slate-900 text-white rounded-tr-xs'
                      }`}
                    >
                      <p>{msg.text}</p>

                      {/* Interactive Action Chips inside Associate Messages */}
                      {isAssociate && msg.options && msg.options.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                          {msg.options.map((opt, i) => (
                            <button
                              key={i}
                              onClick={() => handleOptionClick(opt.action, opt.label)}
                              className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold text-[11px] rounded-md border border-amber-200 transition-colors text-left cursor-pointer active:scale-95 flex items-center gap-1"
                            >
                              <span>{opt.label}</span>
                              <ArrowRight className="w-2.5 h-2.5 text-amber-600" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
                  </motion.div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Carousel */}
            <div className="px-3 py-2 bg-white border-t border-slate-100 overflow-x-auto flex gap-1.5 no-scrollbar shrink-0">
              {QUICK_TOPICS.map((topic, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessage(topic)}
                  className="px-2.5 py-1 text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-full whitespace-nowrap transition-colors cursor-pointer shrink-0"
                >
                  {topic}
                </motion.button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
            >
              <label htmlFor={inputId} className="sr-only">
                Type your loan enquiry or question
              </label>
              <input
                id={inputId}
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about loans or guidance..."
                className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 placeholder-slate-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={!inputText.trim()}
                aria-label="Send message"
                className="p-2 bg-slate-900 hover:bg-amber-600 disabled:opacity-40 disabled:hover:bg-slate-900 text-white rounded-lg transition-colors cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
