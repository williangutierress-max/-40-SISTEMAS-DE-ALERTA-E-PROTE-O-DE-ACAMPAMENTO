export interface BonusItem {
  id: number;
  title: string;
  description: string;
  image: string;
  value: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const MAP_IMAGES = [
  'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/materiais-mat_1-1789406774116.webp',
  'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/materiais-mat_2-1789406777114.webp',
  'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/materiais-mat_3-1789406780358.webp',
  'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/materiais-mat_4-1789406782797.webp',
  'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/materiais-mat_9917d7e8-1789406789603.webp',
  'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/materiais-mat_6e768960-1789406792327.webp',
  'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/materiais-mat_ec3c78ab-1789406795705.webp',
  'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/materiais-mat_729e2bd4-1789406798752.webp',
];

export const HERO_IMAGE =
  'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/hero-mockup_hero-1789146490890.webp';

export const PACOTE_IMAGE =
  'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/pacote-mockup_pacote-1789148769775.webp';

export const BASICO_MOCKUP =
  'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/planos-basico_mockup-1789150348405.webp';

export const COMPLETO_MOCKUP =
  'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/planos-completo_mockup-1789151257557.webp';

export const CHECKOUT_URLS = {
  basico: 'https://pay.lowify.com.br/go.php?offer=1363611d',
  completo: 'https://pay.lowify.com.br/checkout.php?product_id=7xjVPz',
};

export const BONUSES: BonusItem[] = [
  {
    id: 1,
    title: 'GUIA PRÁTICO DE ALARMES COM MATERIAIS IMPROVISADOS',
    description:
      'Receba um manual visual em PDF ensinando como usar latas vazias, pedras, garrafas e galhos secos para criar sistemas sonoros altamente sensíveis. O atalho perfeito para você montar o seu perímetro de segurança sem precisar gastar dinheiro com equipamentos táticos caros e pesados.',
    image:
      'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/bonus-bonus_1_img-1789157271914.webp',
    value: 'R$27',
  },
  {
    id: 2,
    title: 'MANUAL DO ACAMPAMENTO FURTIVO (STEALTH CAMPING)',
    description:
      'Receba um guia em PDF revelando técnicas de camuflagem e disciplina de luz. Aprenda a esconder a sua barraca ou rede da visão de trilhas principais e saiba como usar a fogueira subterrânea (Fogo Dakota) para não emitir luz à noite, tornando o seu acampamento praticamente invisível para humanos.',
    image:
      'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/bonus-bonus_2_img-1789157277548.webp',
    value: 'R$27',
  },
  {
    id: 3,
    title: 'PROTOCOLO DE DEFESA CONTRA ANIMAIS SILVESTRES',
    description:
      'Receba um roteiro prático em PDF ensinando técnicas de isolamento de odores. Aprenda a regra do "Triângulo de Segurança" para posicionar sua fogueira, área de dormir e armazenamento de comida (içamento em árvores), mantendo javalis, onças e roedores bem longe da sua barraca durante a madrugada.',
    image:
      'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/bonus-bonus_3_img-1789157283542.webp',
    value: 'R$27',
  },
  {
    id: 4,
    title: 'GUIA VISUAL DE NÓS PARA LINHAS DE TROPEÇO (TRIPWIRES)',
    description:
      'Receba fichas rápidas em PDF com o passo a passo dos nós de tensão e ancoragem. Descubra como esticar linhas de nylon ou paracord na altura exata para que elas fiquem firmes e sensíveis ao mínimo toque, garantindo que o seu sistema de alerta não afrouxe no meio da noite.',
    image:
      'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/bonus-bonus_4_img-1789157415886.webp',
    value: 'R$27',
  },
  {
    id: 5,
    title: 'GUIA ANTI-FALSO ALARME (À PROVA DE VENTO E CHUVA)',
    description:
      'Receba um manual técnico em PDF ensinando a calibrar a sensibilidade das suas armadilhas de alerta. Evite o terror de acordar de madrugada com o coração acelerado apenas porque um galho caiu ou o vento bateu forte na sua linha de tropeço. Tenha alertas precisos e confiáveis.',
    image:
      'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/bonus-bonus_5_img-1789157402850.webp',
    value: 'R$27',
  },
  {
    id: 6,
    title: 'SISTEMAS ELETRÔNICOS DE BAIXO CUSTO PARA MATO',
    description:
      'Receba um catálogo em PDF ensinando a adaptar tecnologias baratas e acessíveis (como alarmes de vara de pesca, sensores de presença de porta e luzes com detector de movimento) para o uso em áreas remotas. Crie uma barreira de segurança moderna e eficiente gastando menos de 50 reais.',
    image:
      'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/bonus-bonus_6_img-1789157314653.webp',
    value: 'R$27',
  },
  {
    id: 7,
    title: 'O SEGREDO DAS FOGUEIRAS DE VIGÍLIA (LONGA DURAÇÃO)',
    description:
      'Receba um infográfico em PDF mostrando como montar fogueiras autoalimentadas que queimam lentamente por 6 a 8 horas. Mantenha o perímetro iluminado e crie uma barreira natural de calor e fumaça que afasta predadores a noite toda, sem que você precise levantar de hora em hora para colocar lenha.',
    image:
      'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/bonus-bonus_7_img-1789157391639.webp',
    value: 'R$27',
  },
  {
    id: 8,
    title: 'CHECKLIST DE AÇÃO IMEDIATA (O DESPERTAR TÁTICO)',
    description:
      'Receba um protocolo visual em PDF detalhando o que você deve fazer no exato segundo em que o alarme disparar. Aprenda a sair do saco de dormir em silêncio, usar a sua lanterna de forma estratégica (sem cegar a si mesmo ou entregar sua posição) e avaliar a ameaça com segurança e controle emocional.',
    image:
      'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/cd4b5994-7a08-44ce-b881-1d9096f4f067/bonus-bonus_8_img-1789157381960.webp',
    value: 'R$27',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Eduardo Martins',
    role: 'Praticante de camping e bushcraft',
    quote:
      'Eu sempre montava a barraca e ficava pensando nos acessos ao redor, principalmente à noite. Gostei porque os mapas mostram formas de organizar melhor a área sem precisar improvisar tudo na hora.',
  },
  {
    name: 'Ricardo Almeida',
    role: 'Campista recreativo',
    quote:
      'O que mais me ajudou foi visualizar o perímetro completo. Antes eu pensava só na barraca; agora consigo observar melhor caminhos, entradas e pontos mais expostos.',
  },
  {
    name: 'Marcelo Fernandes',
    role: 'Praticante de atividades outdoor',
    quote:
      'Costumo acampar em lugares diferentes e nunca sabia como adaptar a organização do perímetro. Ter vários cenários prontos virou uma referência rápida para montar o acampamento.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Os mapas são fáceis de entender?',
    answer:
      'Sim, todos os mapas são visuais e explicados de forma clara, facilitando a aplicação no campo.',
  },
  {
    question: 'O acesso é imediato?',
    answer:
      'Sim, após a confirmação do pagamento, você recebe acesso imediato aos materiais.',
  },
  {
    question: 'Posso usar no celular?',
    answer:
      'Sim, todo o material é otimizado para visualização em dispositivos móveis.',
  },
  {
    question: 'O que fazer se não gostar do material?',
    answer:
      'Você tem uma garantia de 15 dias para solicitar reembolso, sem complicações.',
  },
  {
    question: 'Os bônus são realmente úteis?',
    answer:
      'Sim, cada bônus foi criado para complementar e enriquecer sua experiência de acampamento.',
  },
  {
    question: 'Preciso de equipamentos especiais para aplicar os sistemas?',
    answer:
      'Não, os sistemas podem ser montados com materiais simples e improvisados.',
  },
];
