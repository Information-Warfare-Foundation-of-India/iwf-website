"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
  dark?: boolean;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services and mission.",
  faqs,
  dark = false,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 ${dark ? "bg-blue-700 text-white" : "bg-gray-50 dark:bg-gray-800"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900 dark:text-white"}`}>
              {title}
            </h2>
            <p className={`text-lg ${dark ? "text-blue-100" : "text-gray-600 dark:text-gray-300"}`}>
              {description}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden ${
                  dark 
                    ? "bg-blue-800/50" 
                    : "bg-white dark:bg-gray-700 shadow-md"
                }`}
              >
                <button
                  className={`w-full text-left p-6 flex justify-between items-center focus:outline-none ${
                    openIndex === index 
                      ? (dark ? "bg-blue-800" : "bg-blue-50 dark:bg-blue-900/30") 
                      : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className={`text-lg font-semibold ${dark ? "text-white" : "text-gray-900 dark:text-white"}`}>
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className={`h-5 w-5 ${dark ? "text-blue-300" : "text-blue-600 dark:text-blue-400"}`} />
                  ) : (
                    <ChevronDown className={`h-5 w-5 ${dark ? "text-blue-300" : "text-blue-600 dark:text-blue-400"}`} />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-6 pt-0">
                    <p className={`${dark ? "text-blue-100" : "text-gray-600 dark:text-gray-300"}`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 