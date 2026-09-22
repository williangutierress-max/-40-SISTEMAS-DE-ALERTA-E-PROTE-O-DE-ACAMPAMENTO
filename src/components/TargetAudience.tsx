import React from 'react';

export const TargetAudience: React.FC = () => {
  const items = [
    {
      title: 'MONTAR ACAMPAMENTOS MAIS SEGUROS',
      desc: 'Utilizar sistemas de alerta que garantam sua segurança enquanto dorme ou relaxa.',
    },
    {
      title: 'APRENDER TÉCNICAS DE PROTEÇÃO',
      desc: 'Saber como organizar seu perímetro e usar recursos naturais para se proteger.',
    },
    {
      title: 'EVITAR SURPRESAS DESAGRADÁVEIS',
      desc: 'Ter a certeza de que qualquer movimento ao redor do seu acampamento será detectado.',
    },
    {
      title: 'DESENVOLVER HABILIDADES DE SOBREVIVÊNCIA',
      desc: 'Aprender a usar materiais improvisados para criar sistemas de alerta eficazes.',
    },
    {
      title: 'EVITAR DEPENDER APENAS DA PRÓPRIA VIGILÂNCIA',
      desc: 'Abra o mapa, veja a disposição e adapte ao seu acampamento.',
    },
    {
      title: 'ADAPTAR O SISTEMA AO CENÁRIO',
      desc: 'Escolha a configuração que combina melhor com o local onde está acampando.',
    },
  ];

  return (
    <section
      id="secao-5"
      className="w-full px-4 py-16 sm:py-20 bg-white text-black"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[30px] sm:text-[45px] lg:text-[52px] text-center font-black leading-tight tracking-tight text-black">
          ESTE MATERIAL É IDEAL PARA VOCÊ QUE DESEJA
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[14px] flex gap-3 items-start transition-transform duration-300 hover:scale-[1.03]"
              style={{
                backgroundColor: '#EFFBF2',
                border: '1px solid #BFE7CF',
              }}
            >
              <span className="shrink-0 mt-1">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  className="h-4 w-4 shrink-0"
                  style={{ fill: '#39B574' }}
                >
                  <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                </svg>
              </span>
              <div>
                <h3
                  className="font-black uppercase text-lg sm:text-xl mb-2 leading-tight text-black"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg opacity-80 leading-relaxed text-stone-700">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
