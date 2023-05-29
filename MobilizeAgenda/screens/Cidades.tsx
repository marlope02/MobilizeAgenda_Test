import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Cidades = () => {
  const cidades = [
    'Lisboa',
    'Porto',
    'Braga',
    'Coimbra',
    'Funchal',
    'Évora',
    'Guarda',
    'Leiria',
    'Viseu',
    'Bragança',
    'Viana do Castelo',
    'Aveiro',
    'Beja',
    'Castelo Branco',
    'Faro',
    'Portalegre',
    'Santarém',
    'Setúbal',
    'Vila Real',
    'Angra do Heroísmo',
    'Horta',
    'Ponta Delgada',
    'Praia da Vitória',
    'Abrantes',
    'Albufeira',
    'Alcobaça',
    'Barcelos',
    'Caldas da Rainha',
    'Chaves',
    'Covilhã',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cidades</Text>
      <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
        {cidades.map((cidade, index) => (
          <View key={index}>
            {index === 0 ? null : <View style={styles.line} />}
            <Text style={styles.cidade}>{cidade}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#212B36'
  },
  space:{
    margin:10,
  },
  cidade: {
    fontSize: 16,
    marginVertical: 10,
    color: '#212B36'
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: '90%',
    alignSelf: 'center',
  },
  
  line: {
    borderBottomWidth: 1,
    backgroundColor: '#919EAB',
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    height: 1,
  },
});

export default Cidades;
