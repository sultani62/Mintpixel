import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who do you work with?",
      answer:
        "We partner with startups, small businesses, and established brands who need professional design for websites, branding, print materials, and digital campaigns. If you have a vision, we’ll bring it to life.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Timelines vary by scope: websites typically take 2–4 weeks, branding packages 1–3 weeks, and print materials like brochures or business cards are ready in 3–7 days. We provide clear deadlines upfront.",
    },
    {
      question: "What’s included in your pricing?",
      answer:
        "Our pricing covers full design services, revisions (usually 2–3 rounds), source files, and commercial usage rights. No hidden fees—just transparent, fixed-rate quotes based on your project needs.",
    },
    {
      question: "Do I own the final designs?",
      answer:
        "Yes! Once the project is complete and paid for, you receive full ownership of all final deliverables—including logos, website files, and print-ready artwork—with commercial usage rights.",
    },
    {
      question: "What’s your revision policy?",
      answer:
        "We include 2–3 rounds of revisions per project to ensure you’re completely satisfied. Additional revisions are available at a small hourly rate if needed.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-4 md:px-8 lg:px-16 bg-slate-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 pb-4 transition-all duration-300 ${
                openIndex === index ? "pb-6" : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </span>
                <span className="text-4xl text-gray-500">
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-2xl text-center my-10">
          Have more questions? Let us know:{" "}
          <a href="mailto:hello@mintpixel.com" className="text-green-800">
            hello@mintpixel.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQSection;