import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="secao-12" className="w-full px-4 py-16 sm:py-20 bg-white text-black">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[30px] sm:text-[45px] lg:text-[52px] text-center font-black leading-tight tracking-tight text-black">
          PERGUNTAS FREQUENTES
        </h2>

        <div className="max-w-3xl mx-auto mt-12 divide-y divide-black/10">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div key={idx} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left cursor-pointer text-xl sm:text-2xl font-bold flex justify-between items-center text-black focus:outline-none"
                >
                  <span className="pr-4">{item.question}</span>
                  <span
                    className={`ml-4 text-3xl transition-transform duration-300 opacity-60 font-light ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 text-base sm:text-lg opacity-85 whitespace-pre-line leading-relaxed text-stone-700">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
