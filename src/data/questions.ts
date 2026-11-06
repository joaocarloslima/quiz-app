type Question = {
  text: string;
  options: string[];
  answer: number;
};

export const questions: Question[] = [
  {
    text: 'Qual componente mostra texto na tela?',
    options: ['<View>', '<Text>', '<p>'],
    answer: 1,
  },
  {
    text: 'Qual é a direção padrão do flexDirection no React Native?',
    options: ['row', 'column', 'wrap'],
    answer: 1,
  },
  {
    text: 'Como o componente pai envia dados para o filho?',
    options: ['Por props', 'Por useState', 'Por StyleSheet'],
    answer: 0,
  },
  {
    text: 'O que acontece quando chamamos o set do useState com um valor novo?',
    options: ['Nada muda', 'O React desenha a tela de novo', 'O app reinicia'],
    answer: 1,
  },
  {
    text: 'Qual componente é indicado para listas longas?',
    options: ['ScrollView', 'FlatList', 'View'],
    answer: 1,
  },
];