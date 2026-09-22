import React from 'react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="secao-9" className="w-full px-4 py-16 sm:py-20 bg-white text-black">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[30px] sm:text-[45px] lg:text-[52px] text-center font-black leading-tight tracking-tight text-black">
          VEJA O QUE NOSSOS CLIENTES ESTÃO DIZENDO
        </h2>

        <p className="text-center mt-4 text-base sm:text-lg text-stone-600">
          Leia os depoimentos de quem já tomou a decisão certa.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4" aria-label="Classificado como 5 de 5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      aria-hidden="true"
                      viewBox="0 0 1000 1000"
                      className="h-5 w-5"
                      style={{ fill: '#FBB03B' }}
                    >
                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                    </svg>
                  ))}
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-stone-800 italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div>
                <p className="font-bold text-base sm:text-lg text-black">{t.name}</p>
                <p className="text-sm sm:text-base text-stone-500 mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
