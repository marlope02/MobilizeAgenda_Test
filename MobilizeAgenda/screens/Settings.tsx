import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iocon from 'react-native-vector-icons/Feather';




const Settings = () => {

  const handleNavigation1 = () => {
    // Handle navigation to page 1 here
  }

  const handleNavigation2 = () => {
    // Handle navigation to page 2 here
  }

  const handleNavigation3 = () => {
    // Handle navigation to page 3 here
  }

  const handleNavigation4 = () => {
    // Handle navigation to page 4 here
  }

  const handleNavigation5 = () => {
    // Handle navigation to page 5 here
  }

  const handleCidade = () => {
    // Handle navigation to page 5 here
  }

  const handleIdioma = () => {
    // Handle navigation to page 5 here
  }

  const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);

  const [vibrationEnabled, setVibrationEnabled] = useState(false);


  const ImgPerfil = require('./assets/karaoke.jpg');



  return (

    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Definições</Text>
        <View style={styles.imageProfileContainer}>
          <Image source={ImgPerfil} style={styles.imageProfile} />
        </View>
      </View>

      <View style={styles.space} />

      <TouchableOpacity style={styles.button} onPress={handleCidade}>
        <Text style={styles.subtitle}>Cidade</Text>
        <Text style={[styles.description, styles.descriptionRight]}>Maia</Text>
        <Icon name="right" size={24} color="#212B36" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleIdioma}>
        <Text style={styles.subtitle}>Idioma</Text>
        <Text style={[styles.description, styles.descriptionRight]}>Português</Text>
        <Icon name="right" size={24} color="#212B36" />
      </TouchableOpacity>

      <View style={styles.button}>
        <Text style={styles.subtitle}>Tema Escuro</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: '#871D18', true: '#007B55' }}
          thumbColor={darkThemeEnabled ? '#ffffff' : '#ffffff'}
          onValueChange={value => setDarkThemeEnabled(value)}
          value={darkThemeEnabled}
        />
      </View>

      <View style={styles.button}>
        <Text style={styles.subtitle}>Vibração</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: '#871D18', true: '#007B55' }}
          thumbColor={vibrationEnabled ? '#ffffff' : '#fffffff'}
          onValueChange={value => setVibrationEnabled(value)}
          value={vibrationEnabled}
        />
      </View>

      <View style={styles.button}>
        <Text style={styles.subtitle}>Privacidade</Text>
      </View>


      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={handleNavigation1}>
          <Iocon
            name="home"
            size={33}
            color='rgba(33, 43, 54, 0.7)'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation2}>
          <Iocon
            name="heart"
            size={33}
            color='rgba(33, 43, 54, 0.7)'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation3}>
          <Iocon
            name="message-circle"
            size={33}
            color='rgba(33, 43, 54, 0.7)'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation4}>
          <Iocon
            name="coffee"
            size={33}
            color='rgba(33, 43, 54, 0.7)'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation5}>
          <Iocon
            name="settings"
            size={33}
            color='rgba(255, 171, 0, 0.7)'
          />
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  space: {
    margin: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#212B36'
  },
  imageProfileContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#212B36'
  },
  description: {
    fontSize: 12,
    textAlign: 'right',
    color: '#212B36',
  },
  descriptionRight: {
    flex: 1,
    textAlign: 'right',

  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f2f2f2',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navigationButton1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 8,
  },
  navigationButtonText1: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationButton2: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 8,
  },
  navigationButtonText2: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationButton3: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 8,
  },
  navigationButtonText3: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationButton4: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 8,
  },
  navigationButtonText4: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationButton5: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 8,
  },
  navigationButtonText5: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


export default Settings;
