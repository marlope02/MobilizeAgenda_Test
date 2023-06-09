import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const imageHeight = width / 2;

interface ActivityScreenProps {
  navigation: any;
}



const Actividade = (props: ActivityScreenProps) => {
  const navigation = useNavigation();
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleHeartPress = () => {
    setIsHeartFilled(!isHeartFilled);
  };



  return (
    <View style={styles.container}>
    <ImageBackground style={styles.image} source={require('../assets/karaoke.jpg')}>
      <View style={styles.buttonContainer}>
        <AntDesignIcon name="leftcircleo" size={30} color="white" onPress={handleBack} />
      </View>
      <View style={styles.heartIconContainer}>
        <TouchableOpacity onPress={handleHeartPress}>
          <FontAwesomeIcon name="heart" size={30} color={isHeartFilled ? 'red' : 'white'} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
    <Text style={styles.title}>Noite de Karaoke</Text>

      <Text style={styles.title}>Noite de Karaoke</Text>

      <ScrollView style={styles.description}>
        <View style={styles.row}>
          <Text style={styles.subtitle}>Localização:</Text>
          <Text style={[styles.text, { maxWidth: '70%' }]}>Café Onófrio (Rua Santos Magalhães, Nº 41)</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>Dia:</Text>
          <Text style={[styles.text, { maxWidth: '70%' }]}>31 de Março de 2023</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>Horário:</Text>
          <Text style={[styles.text, { maxWidth: '70%' }]}>21:00 até às 00:00</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subtitle}>Descrição:</Text>
          <Text style={styles.text}>Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr Descrição Descrição Descrição Descr</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "#fff"

  },
  image: {
    width: '100%',
    height: imageHeight,
  },
  buttonContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
  },
  heartIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#212B36',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  description: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#212B36',
    textAlign: 'right',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 2,
    color: '#212B36',
    alignItems: 'center',
  },
});

export default Actividade;
