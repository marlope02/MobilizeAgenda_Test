import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  
  const handleBack = () => {

  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity>
      <AntDesignIcon name="leftcircleo" size={30} color="#161C34" onPress={handleBack} />
      </TouchableOpacity>
      <Text style={styles.title}>Cidades</Text>
      {cidades.map((cidade, index) => (
        <View key={index}>
          <View style={styles.cidadeContainer}>
            <Text style={styles.cidade}>{cidade}</Text>
          </View>
          {index !== cidades.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 55,
    alignSelf: 'center',
    color: '#212B36'
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(145, 158, 171, 0.24)',
    marginVertical: 8,
  },
  cidadeContainer: {
    alignItems: 'center',
  },
  cidade: {
    fontSize: 16,
    marginBottom: 4,
    color: '#212B36'
  },
});

export default Cidades;
