import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const { width } = Dimensions.get('window');

const imageHeight = width / 2;

const handleBack = () => {
  // Handle navigation to page 5 here
}

const Actividade = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./assets/karaoke.jpg')}>
        <TouchableOpacity onPress={handleBack} style={styles.button}>
          <Ionicons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>

      <Text style={styles.title}>Noite de Karaoke</Text>

      <ScrollView style={styles.description}>
        {/* Rest of the code */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: imageHeight,
  },
  button: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
    alignItems: 'center',
  },
  description: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  // Rest of the styles...
});

export default Actividade;
