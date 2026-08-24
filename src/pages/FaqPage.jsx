import { useState } from 'react';
import { faqList } from '../data/faqData';

export default function FaqPage() {
  const [openId, setOpenId] = useState(2);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-6 md:py-12">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark max-w-lg leading-tight">
          Часто задаваемые вопросы
        </h1>
        <p className="text-sm md:text-base text-gray-500 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="bg-[#EBF2FC] rounded-3xl p-6 md:p-10 divide-y divide-blue-200/60 shadow-xs">
        {faqList.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="py-6 first:pt-2 last:pb-2">
              <button
                type="button"
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-hidden"
              >
                <span className="text-lg md:text-xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                  {item.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-brand-dark">
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-blue' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed pr-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}