import React from 'react';
import { HERO_IMAGE } from '../data/content';

export const Hero: React.FC = () => {
  const checkItems = [
    'Esquemas visuais para uso imediato no camping',
    'Opções específicas para barraca, rede e veículos',
    'Instruções de montagem sem improviso',
    'Consulta rápida pelo celular, até offline',
    'Ajuda a perceber aproximação de pessoas e animais',
  ];

  return (
    <section
      id="secao-1"
      className="w-full px-4 py-16 sm:py-20 text-white"
      style={{ backgroundColor: '#3e2323' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto -mt-11 sm:mt-0">
          <span
            className="inline-block text-sm sm:text-base font-bold px-6 py-2 rounded-full mb-5"
            style={{ backgroundColor: '#FCE9D8', color: '#3A1B09' }}
          >
            <span>🔒 Compra 100% Segura e Protegida</span>
          </span>

          <h1
            className="font-heading text-[32px] sm:text-[45px] lg:text-[52px] mt-0 text-white font-black tracking-tight leading-[1.08]"
            style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
          >
            +40 SISTEMAS DE ALERTA E PROTEÇÃO DE ACAMPAMENTO EXPLICADOS VISUALMENTE
          </h1>

          <p
            className="text-[19px] sm:text-[23px] max-w-2xl mx-auto mt-4 font-bold text-white/95 leading-snug"
            style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Aprenda diferentes formas de organizar alertas ao redor do acampamento para perceber movimentações e manter o perímetro mais monitorado.
          </p>

          <div className="my-[18px]">
            <img
              src={HERO_IMAGE}
              width={340}
              height={340}
              alt="Mockup do Guia de Sistemas de Alerta e Proteção de Acampamento"
              className="max-h-[480px] w-auto mx-auto object-contain rounded-[18px] drop-shadow-2xl"
              loading="eager"
            />
          </div>

          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mt-2 text-white/95 font-bold"
            style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Escolha o cenário, veja a disposição do perímetro e entenda quais recursos de alerta fazem sentido para aquela situação.
          </p>

          <div className="mt-8 flex justify-center">
            <ul className="space-y-3.5 text-left inline-block">
              {checkItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 items-center text-lg sm:text-xl font-semibold"
                  style={{ color: '#c9a96a' }}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 512 512"
                    className="h-4 w-4 shrink-0"
                    style={{ fill: '#39B574' }}
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <a
              href="#planos"
              className="px-10 py-5 text-[19px] sm:text-[20px] inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98]"
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
              <span>QUERO RECEBER OS SISTEMAS VISUAIS</span>
            </a>
          </div>

          <p className="text-sm sm:text-base opacity-80 mt-4 text-white">
            📲 <span>Você recebe tudo na hora, direto no seu e-mail</span>
          </p>
        </div>
      </div>
    </section>
  );
};
