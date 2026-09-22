import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="secao-13" className="px-4 py-14 text-center text-sm sm:text-base space-y-4 bg-[#111111] text-white">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="font-semibold text-base sm:text-lg">
          ©️ Todos os direitos reservados.
        </p>
        <p className="opacity-75 leading-relaxed text-xs sm:text-sm text-stone-300">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato em horário comercial de Segunda a Sextas das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.
        </p>
      </div>
    </footer>
  );
};
