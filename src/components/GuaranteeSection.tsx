import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="secao-10" className="w-full px-4 py-16 sm:py-20 bg-white text-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-[260px_1fr] gap-10 items-center">
          {/* Guarantee Seal / Badge */}
          <div className="flex justify-center">
            <div className="relative w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-2 shadow-2xl flex items-center justify-center text-center">
              <div className="w-full h-full rounded-full bg-[#1F1410] border-4 border-amber-300 flex flex-col items-center justify-center p-4 text-white shadow-inner">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-extrabold">
                  Garantia Incondicional
                </span>
                <span className="font-heading text-5xl sm:text-6xl font-black text-amber-400 leading-none my-1">
                  15
                </span>
                <span className="font-heading text-xl sm:text-2xl font-black text-white leading-tight uppercase">
                  DIAS
                </span>
                <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold mt-1">
                  100% Satisfação
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-[30px] sm:text-[40px] lg:text-[45px] font-black text-black leading-tight mb-4">
              GARANTIA DE 15 DIAS — ZERO RISCO PRA VOCÊ
            </h2>

            <p className="text-base sm:text-lg mb-4 leading-relaxed text-stone-800">
              <strong>Isso significa que,</strong> a qualquer momento, se você achar que:
            </p>

            <ul className="space-y-3 mb-5">
              <li className="flex gap-2.5 items-center text-base sm:text-lg text-stone-800">
                <span className="h-2.5 w-2.5 rounded-full bg-red-600 shrink-0"></span>
                <span>o material não faz sentido para seu acampamento</span>
              </li>
              <li className="flex gap-2.5 items-center text-base sm:text-lg text-stone-800">
                <span className="h-2.5 w-2.5 rounded-full bg-red-600 shrink-0"></span>
                <span>os sistemas não atendem sua necessidade</span>
              </li>
              <li className="flex gap-2.5 items-center text-base sm:text-lg text-stone-800">
                <span className="h-2.5 w-2.5 rounded-full bg-red-600 shrink-0"></span>
                <span>ou simplesmente não quiser continuar</span>
              </li>
            </ul>

            <p className="text-base sm:text-lg leading-relaxed text-stone-700">
              Você pode solicitar o reembolso. Sem prazo, sem burocracia. O risco fica todo do nosso lado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
