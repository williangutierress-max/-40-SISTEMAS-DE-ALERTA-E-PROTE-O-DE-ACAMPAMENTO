import React from 'react';
import { PACOTE_IMAGE } from '../data/content';

export const FullPackage: React.FC = () => {
  const packageItems = [
    '+40 sistemas visuais de alerta e proteção',
    'Mapas de perímetro para diferentes cenários',
    'Configurações para diferentes terrenos',
    'Posicionamento de pontos de aviso',
    'Organização de acessos e áreas expostas',
    'Material otimizado para celular',
    'Acesso imediato após a compra',
    'E muito mais…',
  ];

  return (
    <section id="secao-6" className="w-full px-4 py-16 sm:py-20 bg-white text-black">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[30px] sm:text-[45px] lg:text-[52px] text-center font-black leading-tight tracking-tight text-black">
          TUDO O QUE VOCÊ VAI RECEBER
        </h2>

        <div
          className="max-w-2xl mx-auto mt-10 rounded-[18px] overflow-hidden p-8 sm:p-10 space-y-6 text-white shadow-2xl"
          style={{ backgroundColor: '#3e2323' }}
        >
          <div className="text-center">
            <span
              className="inline-block text-base sm:text-lg font-extrabold px-6 py-2.5 rounded-full"
              style={{ backgroundColor: '#39B574', color: '#fff' }}
            >
              ⚡ ACESSO IMEDIATO
            </span>
          </div>

          <h3
            className="font-heading text-2xl sm:text-3xl lg:text-4xl text-center font-black leading-tight text-white"
            style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
          >
            TUDO FOI ORGANIZADO PARA SER SIMPLES E FÁCIL DE APLICAR.
          </h3>

          <p
            className="text-center text-base sm:text-lg opacity-90 font-bold"
            style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Escolha o tipo de alerta e veja como estruturar ao redor da área.
          </p>

          <div className="flex justify-center">
            <img
              src={PACOTE_IMAGE}
              width={700}
              height={394}
              alt="Mockup do Pacote Completo"
              className="w-full max-h-[420px] object-contain rounded-[12px] drop-shadow-xl"
              loading="lazy"
            />
          </div>

          <ul className="divide-y divide-white/10 pt-2">
            {packageItems.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-3 items-start py-3.5 text-base sm:text-lg"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  className="h-4 w-4 shrink-0 mt-1"
                  style={{ fill: '#39B574' }}
                >
                  <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                </svg>
                <span
                  className="text-white font-bold"
                  style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
