import React from 'react';
import { ShoppingCart, LayoutDashboard, DownloadCloud, ShieldCheck } from 'lucide-react';

export const AccessSteps: React.FC = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Conclua sua compra',
      desc: 'Após o pagamento, seu acesso é liberado automaticamente.',
      items: ['Receba no e-mail', 'Acesse pelo WhatsApp', 'Baixe os arquivos'],
    },
    {
      icon: LayoutDashboard,
      title: 'Entre na área de membros',
      desc: 'Acesse todos os materiais disponíveis.',
      items: ['Visualize no celular', 'Consulte a qualquer momento', 'Aproveite o conteúdo'],
    },
    {
      icon: DownloadCloud,
      title: 'Baixe os arquivos',
      desc: 'Salve no seu dispositivo para acesso offline.',
      items: ['Tenha tudo à mão', 'Use sem internet', 'Ideal para áreas remotas'],
    },
    {
      icon: ShieldCheck,
      title: 'Use e aplique',
      desc: 'Coloque em prática os sistemas de alerta.',
      items: ['Garanta sua segurança', 'Desfrute de noites tranquilas', 'Sinta-se protegido'],
    },
  ];

  return (
    <section id="secao-11" className="w-full px-4 py-16 sm:py-20 bg-white text-black">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[30px] sm:text-[45px] lg:text-[52px] text-center font-black leading-tight tracking-tight text-black">
          COMO É O ACESSO
        </h2>

        <p className="text-center opacity-70 mt-4 uppercase text-sm tracking-[0.25em] font-bold text-stone-700">
          (Veja como é simples acessar seu material.)
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="text-center px-4 py-6 rounded-2xl bg-stone-50 border border-stone-200/60 shadow-sm flex flex-col transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="h-16 w-16 mx-auto mb-4 rounded-2xl bg-[#3A1B09]/5 flex items-center justify-center text-[#3A1B09]">
                  <Icon className="h-8 w-8 text-[#3A1B09]" />
                </div>

                <h3 className="font-black mb-2 text-xl text-black tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base opacity-80 leading-relaxed text-stone-700 mb-4">
                  {step.desc}
                </p>

                <ul className="mt-auto space-y-2 text-left inline-block">
                  {step.items.map((sub, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex gap-2 items-start text-xs sm:text-sm text-stone-800"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 512 512"
                        className="h-3.5 w-3.5 shrink-0 mt-0.5"
                        style={{ fill: '#39B574' }}
                      >
                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                      </svg>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
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
            <span>QUERO ACESSAR AGORA</span>
          </a>
        </div>
      </div>
    </section>
  );
};
