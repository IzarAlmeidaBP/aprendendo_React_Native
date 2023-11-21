import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';
const cesta = {
  topo: {
    titulo: 'Detalhe da cesta',
  },
  detalhes: {
    nome: 'Camisa do Brasil',
    logoFazenda: logo,
    nomeFazenda: 'Jenny Jack Farm',
    descricao: 'Camisa da seleção com mais titulos em copa do mundo.',
    preco: 'R$ 40,00',
    botao: 'Comprar',
  },
  itens: {
    titulo: 'Itens da cesta',
    lista: [
      {
        nome: 'Tomate',
        imagem: tomate,
      },
      {
        nome: 'Brócolis',
        imagem: brocolis,
      },
      {
        nome: 'Batata',
        imagem: batata,
      },
      {
        nome: 'Abóbora',
        imagem: abobora,
      },
      {
        nome: 'Pepino',
        imagem: pepino,
      },
    ],
  },
};

export default cesta;
