import React from 'react';
import { MAP_IMAGES } from '../data/content';

export const MapsMarquee: React.FC = () => {
  // Duplicate array for seamless infinite looping
  const duplicatedImages = [...MAP_IMAGES, ...MAP_IMAGES];

  return (
    <section
      id="secao-2"
      className="w-full px-4 py-16 sm:py-20 overflow-hidden"
      style={{ backgroundColor: '#FCE9D8' }}
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <h2
          className="font-heading text-[32px] sm:text-[48px] lg:text-[56px] text-black font-black leading-tight tracking-tight"
        >
          VEJA OS MAPAS QUE VOCÊ VAI RECEBER JÁ
        </h2>

        <div className="mt-10 relative overflow-hidden w-screen max-w-full -ml-[calc(50vw-50%)]">
          <div className="animate-marquee-smooth flex items-center">
            {duplicatedImages.map((src, index) => (
              <div key={index} className="flex-shrink-0 px-3 flex items-center">
                <img
                  src={src}
                  alt={`Exemplo de Mapa ${index + 1}`}
                  className="h-[280px] sm:h-[420px] w-auto object-contain rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
