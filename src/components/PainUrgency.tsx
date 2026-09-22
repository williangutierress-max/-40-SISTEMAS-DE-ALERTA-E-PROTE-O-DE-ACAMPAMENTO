import React, { useState, useEffect } from 'react';

export const PainUrgency: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 31); // 14 mins 31 secs default

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 14 * 60 + 59));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <section
      id="secao-4"
      className="w-full px-4 py-16 sm:py-20 text-white"
      style={{ backgroundColor: '#3e2323' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2
            className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-black text-white leading-tight tracking-tight"
            style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
          >
            E SE ALGUÉM OU ALGUM ANIMAL SE APROXIMAR ENQUANTO VOCÊ ESTIVER DORMINDO?
          </h2>

          <p
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-white/95 leading-relaxed"
            style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Organize meios passivos de alerta para aumentar sua percepção do que acontece ao redor do acampamento.
          </p>

          <div className="flex gap-6 justify-center items-center pt-4 text-white">
            <div className="text-center bg-black/20 px-4 py-2.5 rounded-2xl min-w-[90px] border border-white/10">
              <div className="text-4xl sm:text-5xl font-black tabular-nums">
                {formattedMinutes}
              </div>
              <div className="text-xs uppercase tracking-wider opacity-80 mt-1 font-semibold">
                Minutos
              </div>
            </div>

            <div className="text-4xl sm:text-5xl font-black tabular-nums pb-4 opacity-80">
              :
            </div>

            <div className="text-center bg-black/20 px-4 py-2.5 rounded-2xl min-w-[90px] border border-white/10">
              <div className="text-4xl sm:text-5xl font-black tabular-nums">
                {formattedSeconds}
              </div>
              <div className="text-xs uppercase tracking-wider opacity-80 mt-1 font-semibold">
                Segundos
              </div>
            </div>
          </div>

          <div className="pt-2">
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
              <span>QUERO GARANTIR MEU ACESSO AGORA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
