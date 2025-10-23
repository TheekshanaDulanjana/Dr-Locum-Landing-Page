import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "01. What is Dr Locum?",
    answer:
      "DrLocum is a platform connecting registered private practice doctors in Sri Lanka doctors seeking locum opportunities. Employers can post jobs, and candidates can apply to kickstart their medical careers.",
  },
  {
    question: "02. How does the registration process work?",
    answer:
      "To register on DrLocum:\n\nComplete the online registration form with your personal and professional details.\nFor employers and candidates, provide your Sri Lanka Medical Council (SLMC) registration number.\nAfter submission, our team will verify your SLMC number and other details.\nYou’ll receive confirmation within 2 working days. Once approved, you can start using the platform!",
  },
  {
    question: "03. Is job posting and candidate registration free?",
    answer:
      "Yes, both job postings for private practice doctors and registration for locum candidates are currently free. We’re committed to helping you connect without cost for now. However, we may introduce optional paid plans in the future to offer enhanced features—stay tuned for updates!",
  },
  {
    question: "04. How can I provide feedback on your service?",
    answer:
      "We greatly value your feedback! You can: Call us at 0717621100 during business hours (9 AM – 5 PM, Monday to Friday). Your input helps us improve and serve you better.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-16 font-[Alata]">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-[#0FAEBF] text-lg sm:text-xl font-medium">FAQ</p>
          <div className="w-12 sm:w-16 border-t-2 border-[#0FAEBF]" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300
              ${openIndex === index ? "border-l-transparent" : "border-l-4 border-l-[#0FAEBF]"}`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left text-black text-lg focus:outline-none"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <Minus size={22} color="#555555" />
              ) : (
                <Plus size={22} color="#0FAEBF" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="bg-white px-8 pb-6 text-[#555555] leading-relaxed whitespace-pre-line">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
