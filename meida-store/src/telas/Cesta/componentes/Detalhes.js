import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  botao,
}) {
  return (
    <>
      <Texto style={estilos.nome}>{nome}</Texto>
      <View style={estilos.fazenda}>
        <Image source={logoFazenda} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>
      <TouchableOpacity style={estilos.botao} onPress={() => {}}>
        <Texto style={estilos.textoBotao}>{botao}</Texto>
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    color: '#464646',
    fontSize: 22,
    lineHeight: 36,
    fontWeight: 'bold',
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  imagemFazenda: {
    width: 28,
    height: 28,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 8,
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 24,
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 32,
    marginTop: 6,
  },
  botao: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
