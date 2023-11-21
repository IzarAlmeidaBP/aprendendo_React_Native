import React from 'react';
import { View, Image, Text, FlatList, StyleSheet } from 'react-native';

export default function Itens({ titulo, lista }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titulo}</Text>
      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.imagem} style={styles.imagem} />
            <Text>{item.nome}</Text>
          </View>
        )}
        keyExtractor={(item) => item.nome}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagem: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
  },
});
