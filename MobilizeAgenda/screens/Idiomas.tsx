import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Idiomas = () => {
  const idiomas = [
    'Português',
    'Inglês',
    'Espanhol',
    'Francês',
    'Italiano',
    'Alemão',
    'Português',
    'Inglês',
    'Espanhol',
    'Francês',
    'Italiano',
    'Alemão',
    'Português',
    'Inglês',
    'Espanhol',
    'Francês',
    'Italiano',
    'Alemão',
    'Português',
    'Inglês',
    'Espanhol',
    'Francês',
    'Italiano',
    'Alemão',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idiomas</Text>
      <ScrollView contentContainerStyle={{ width:'100%', alignItems: 'center', justifyContent: 'space-around' }}>
        {idiomas.map((idioma, index) => (
          <View key={index}>
            {index === 0 ? null : <View style={styles.line} />}
            <Text style={styles.idioma}>{idioma}</Text>
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
    height: '100%',
    width:'100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#212B36'
  },
  space: {
    margin: 10,
  },
  idioma: {
    fontSize: 18,
    marginVertical: 10,
    color: '#212B36'
  },

  line: {
    borderBottomWidth: 1,
    backgroundColor: '#919EAB',
    alignSelf: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
});

export default Idiomas;
