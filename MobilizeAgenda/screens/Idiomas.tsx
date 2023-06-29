import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


interface IdiomasScreenProps {
  navigation: any;
}


const Idiomas = (props: IdiomasScreenProps) => {
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
  
  const navigation = useNavigation();
  
  const handleBack = () => {
    navigation.goBack();
  }

  const handleIdiomaPress =() => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity>
      <AntDesignIcon name="leftcircleo" size={30} color="#161C34" onPress={handleBack} />
      </TouchableOpacity>
      <Text style={styles.title}>Idiomas</Text>
      {idiomas.map((idioma, index) => (
        <View key={index}>
          <View style={styles.idiomaContainer}>
            <TouchableOpacity onPress={handleIdiomaPress}>
              <Text style={styles.idioma}>{idioma}</Text>
            </TouchableOpacity>
          </View>
          {index !== idiomas.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff"

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
  idiomaContainer: {
    alignItems: 'center',
  },
  idioma: {
    fontSize: 16,
    marginBottom: 4,
    color: '#212B36'},
});

export default Idiomas;
