import React, { useState, useEffect } from 'react';

export const AnnouncementBar: React.FC = () => {
  const [formattedDate, setFormattedDate] = useState('22/09/2026');

  useEffect(() => {
    try {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      setFormattedDate(`${day}/${month}/${year}`);
    } catch {
      // Fallback
    }
  }, []);

  return (
    <header id="secao-0" className="w-full text-center text-base sm:text-lg py-3.5 px-4 font-bold tracking-wide bg-[#ff0000] text-white">
      ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE <span>{formattedDate}</span>
    </header>
  );
};
