import React from 'react';
import { Crosshair, Compass, BookOpen, Mountain, Eye } from 'lucide-react';

export const PerimeterExplanation: React.FC = () => {
  const steps = [
    {
      title: 'IDENTIFIQUE O CENÁRIO',
      desc: 'Barraca isolada, camping em grupo, área de mata ou acampamento temporário.',
      icon: Crosshair,
      iconBg: '#FFE5E5',
      iconColor: '#D32F2F',
    },
    {
      title: 'VISUALIZE O PERÍMETRO',
      desc: 'Veja onde estão barraca, acessos, trilhas e pontos mais expostos.',
      icon: Compass,
      iconBg: '#E3F2FD',
      iconColor: '#1976D2',
    },
    {
      title: 'POSICIONE OS ALERTAS',
      desc: 'Entenda onde instalar recursos passivos de aviso sem criar risco para pessoas ou animais.',
      icon: BookOpen,
      iconBg: '#FFF8E1',
      iconColor: '#F57C00',
    },
    {
      title: 'ADAPTE AO TERRENO',
      desc: 'Ajuste a organização conforme vegetação, acessos e formato do acampamento.',
      icon: Mountain,
      iconBg: '#E8F5E9',
      iconColor: '#388E3C',
    },
    {
      title: 'ENTENDA O QUE MONITORAR',
      desc: 'Saiba quais áreas merecem mais atenção durante o dia ou à noite.',
      icon: Eye,
      iconBg: '#F3E5F5',
      iconColor: '#7B1FA2',
    },
  ];

  return (
    <section
      id="secao-3"
      className="w-full px-4 py-16 sm:py-20 text-black"
      style={{ backgroundColor: '#FCE9D8' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[30px] sm:text-[45px] lg:text-[52px] text-center font-black leading-tight tracking-tight">
          VEJA COMO CADA PERÍMETRO É EXPLICADO
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.03] bg-white shadow-sm border border-black/5"
              >
                <div
                  className="h-14 w-14 shrink-0 rounded-xl flex items-center justify-center shadow-inner"
                  style={{ backgroundColor: step.iconBg }}
                >
                  <Icon className="h-7 w-7" style={{ color: step.iconColor }} />
                </div>
                <div className="text-base sm:text-lg leading-snug">
                  <strong className="block font-black text-black tracking-tight uppercase">
                    {step.title}
                  </strong>
                  <span className="text-stone-700 text-sm sm:text-base">
                    {step.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
