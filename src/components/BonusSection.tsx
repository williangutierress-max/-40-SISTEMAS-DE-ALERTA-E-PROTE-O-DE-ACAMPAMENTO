import React from 'react';
import { BONUSES } from '../data/content';

export const BonusSection: React.FC = () => {
  return (
    <section id="secao-7" className="w-full px-4 py-16 sm:py-20 bg-white text-black">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[30px] sm:text-[45px] lg:text-[52px] text-center font-black leading-tight tracking-tight text-black">
          E NÃO PARA POR AÍ... TEM MAIS!
        </h2>

        <p className="text-center text-2xl sm:text-3xl italic font-bold opacity-90 mt-4 text-stone-800">
          Você também vai receber…
        </p>

        <div className="text-center mt-5 mb-12">
          <span
            className="inline-block text-base sm:text-lg font-extrabold px-7 py-3 rounded-full text-white shadow-md"
            style={{ backgroundColor: '#ff0000' }}
          >
            🎁 8 BÔNUS EXCLUSIVOS
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="rounded-[14px] overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.03] shadow-sm border border-black/5"
              style={{ backgroundColor: '#FCE9D8' }}
            >
              <div className="relative bg-black/[0.04] flex items-center justify-center">
                <img
                  src={bonus.image}
                  alt={`Bônus ${bonus.id}: ${bonus.title}`}
                  className="h-72 sm:h-80 w-full object-contain p-3"
                  loading="lazy"
                />
                <span
                  className="absolute top-3 right-3 text-xs sm:text-sm font-extrabold px-3 py-1.5 rounded-md shadow-sm"
                  style={{ backgroundColor: '#FFE08A', color: '#2D1107' }}
                >
                  BÔNUS #{bonus.id}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col gap-3">
                <h3 className="font-black leading-tight text-lg sm:text-xl text-black uppercase">
                  {bonus.title}
                </h3>
                <p className="text-sm sm:text-base opacity-85 leading-relaxed text-stone-800">
                  {bonus.description}
                </p>

                <div className="mt-auto pt-3 flex justify-center">
                  <div
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold px-5 py-2.5 rounded-full"
                    style={{ backgroundColor: '#1F1410', color: '#fff' }}
                  >
                    <span className="opacity-80">Valor:</span>
                    <s className="opacity-60">{bonus.value}</s>
                    <span className="font-extrabold text-emerald-400">GRÁTIS</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
