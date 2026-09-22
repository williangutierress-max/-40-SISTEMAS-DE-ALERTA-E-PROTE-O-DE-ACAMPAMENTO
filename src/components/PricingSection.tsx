import React from 'react';
import { BASICO_MOCKUP, COMPLETO_MOCKUP, CHECKOUT_URLS } from '../data/content';

export const PricingSection: React.FC = () => {
  const basicoItems = [
    '+40 sistemas visuais de alerta',
    'Mapas de perímetro para diferentes cenários',
    'Acesso imediato após a compra',
    'Material otimizado para celular',
  ];

  const completoItems = [
    '+40 sistemas visuais de alerta',
    '🎁 GUIA PRÁTICO DE ALARMES COM MATERIAIS IMPROVISADOS',
    '🎁 MANUAL DO ACAMPAMENTO FURTIVO',
    '🎁 PROTOCOLO DE DEFESA CONTRA ANIMAIS SILVESTRES',
    '🎁 GUIA VISUAL DE NÓS PARA LINHAS DE TROPEÇO',
    '🎁 GUIA ANTI-FALSO ALARME',
    '🎁 SISTEMAS ELETRÔNICOS DE BAIXO CUSTO PARA MATO',
    '🎁 O SEGREDO DAS FOGUEIRAS DE VIGÍLIA (LONGA DURAÇÃO)',
    '🎁 CHECKLIST DE AÇÃO IMEDIATA (O DESPERTAR TÁTICO)',
  ];

  return (
    <section id="secao-8" className="w-full px-4 py-16 sm:py-20 bg-white text-black">
      <div className="max-w-[1200px] mx-auto">
        <div id="planos" className="scroll-mt-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-[30px] sm:text-[45px] lg:text-[52px] text-center font-black leading-tight tracking-tight text-black">
              ESCOLHA A OPÇÃO IDEAL PARA VOCÊ
            </h2>
            <div className="mx-auto h-[3px] w-24 rounded-full bg-black"></div>
          </div>

          <div className="grid gap-6 mx-auto items-stretch md:grid-cols-2 max-w-5xl">
            {/* PLANO BÁSICO */}
            <div
              className="rounded-[18px] p-6 sm:p-8 flex flex-col gap-5 overflow-hidden shadow-lg border border-black/10"
              style={{ backgroundColor: '#FCE9D8' }}
            >
              <h3 className="font-heading text-3xl sm:text-4xl text-center font-black text-black">
                PLANO BÁSICO
              </h3>

              <img
                src={BASICO_MOCKUP}
                width={700}
                height={700}
                alt="Mockup Plano Básico"
                className="h-72 sm:h-80 w-full object-contain"
                loading="lazy"
              />

              <p className="text-base font-bold text-black">Você recebe:</p>

              <ul className="divide-y divide-black/10">
                {basicoItems.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      className="h-4 w-4 shrink-0 mt-1"
                      style={{ fill: '#39B574' }}
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                    </svg>
                    <span className="text-black font-semibold">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-auto pt-4">
                <p className="text-sm sm:text-base line-through font-bold text-red-600">
                  de R$97,90 por:
                </p>
                <p
                  className="font-heading text-5xl sm:text-6xl mt-1 font-black"
                  style={{ color: '#39B574' }}
                >
                  R$ 5,99
                </p>
                <p className="text-base mt-2 opacity-80 font-medium text-stone-700">
                  pagamento único
                </p>
                <p className="text-sm sm:text-base mt-1 font-semibold flex items-center justify-center gap-1.5 text-stone-900">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#39B574] inline-block"></span>
                  Você economiza <strong>R$91,91</strong>
                </p>
              </div>

              <a
                href={CHECKOUT_URLS.basico}
                className="px-8 py-4 text-[18px] w-full inline-block text-center transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: '#39B574',
                  color: '#fff',
                  boxShadow: '0 14px 30px -10px rgba(57,181,116,0.55)',
                  fontWeight: 700,
                  borderRadius: '9999px',
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                <span>QUERO O PLANO BÁSICO</span>
              </a>

              <div
                className="md:hidden -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 flex items-center justify-center gap-2 text-sm sm:text-base font-bold px-5 py-3 text-center"
                style={{ background: '#FFD54A', color: '#000' }}
              >
                <span>92% das pessoas aproveitam o plano abaixo</span> 👇
              </div>
            </div>

            {/* PLANO COMPLETO */}
            <div
              className="rounded-[18px] p-6 sm:p-8 flex flex-col gap-5 relative text-white shadow-2xl border border-white/10"
              style={{
                backgroundColor: '#3e2323',
                boxShadow: '0 30px 60px -25px rgba(0,0,0,0.5)',
              }}
            >
              <span
                className="absolute -top-5 left-1/2 -translate-x-1/2 text-base sm:text-lg font-extrabold px-6 py-2.5 rounded-full whitespace-nowrap shadow-lg"
                style={{ background: '#39B574', color: '#fff' }}
              >
                ⚡ MAIS VENDIDO
              </span>

              <h3 className="font-heading text-3xl sm:text-4xl text-center font-black text-white pt-2">
                PLANO COMPLETO
              </h3>

              <img
                src={COMPLETO_MOCKUP}
                width={700}
                height={700}
                alt="Mockup Plano Completo"
                className="h-72 sm:h-80 w-full object-contain"
                loading="lazy"
              />

              <div
                className="text-center text-base sm:text-lg font-extrabold rounded-full py-3"
                style={{ background: 'rgba(46,204,113,0.15)', color: '#39B574' }}
              >
                ⚡ 2x MAIS CONTEÚDOS
              </div>

              <ul className="divide-y divide-white/10">
                {completoItems.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      className="h-4 w-4 shrink-0 mt-1"
                      style={{ fill: '#39B574' }}
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                    </svg>
                    <span className="text-white font-bold">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-auto pt-4">
                <p className="text-sm sm:text-base line-through font-bold text-red-500">
                  de R$127,90 por:
                </p>
                <p
                  className="font-heading text-5xl sm:text-6xl mt-1 font-black"
                  style={{ color: '#39B574' }}
                >
                  R$ 9,99
                </p>
                <p className="text-base mt-2 opacity-80 font-medium text-stone-200">
                  pagamento único
                </p>
                <p className="text-sm sm:text-base mt-1 font-semibold flex items-center justify-center gap-1.5 text-white">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#39B574] inline-block"></span>
                  Você economiza <strong>R$117,91</strong>
                </p>
              </div>

              <a
                href={CHECKOUT_URLS.completo}
                className="px-8 py-4 text-[18px] w-full inline-block text-center transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: '#39B574',
                  color: '#fff',
                  boxShadow: '0 14px 30px -10px rgba(57,181,116,0.55)',
                  fontWeight: 700,
                  borderRadius: '9999px',
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                <span>QUERO O PLANO COMPLETO</span>
              </a>

              {/* Payment icons */}
              <div className="flex justify-center items-center gap-3 pt-3 opacity-90">
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-stone-300">
                  <span className="bg-white/10 px-2.5 py-1 rounded text-white border border-white/10">PIX</span>
                  <span className="bg-white/10 px-2.5 py-1 rounded text-white border border-white/10">Cartão de Crédito</span>
                  <span className="bg-white/10 px-2.5 py-1 rounded text-white border border-white/10">Boleto</span>
                  <span className="bg-white/10 px-2.5 py-1 rounded text-white border border-white/10">Hotmart</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-10 max-w-3xl mx-auto rounded-[14px] p-6 flex gap-4 items-center shadow-sm"
            style={{ backgroundColor: '#EFFBF2', border: '1px solid #BFE7CF' }}
          >
            <span
              className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-lg font-bold"
              style={{ background: '#39B574', color: '#fff' }}
            >
              ✓
            </span>
            <div>
              <p className="font-extrabold uppercase text-base sm:text-lg text-black">
                UM ÚNICO SISTEMA PODE GARANTIR SUA SEGURANÇA NO ACAMPAMENTO.
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base mt-6 text-center text-stone-600">
            <span>🔒 Compra 100% segura e garantida.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
