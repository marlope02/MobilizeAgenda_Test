import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iocon from 'react-native-vector-icons/Feather';


interface SettingsScreenProps {
  navigation: any;
}


const Settings = (props: SettingsScreenProps) => {
  const handleNavigation1 = () => {
    props.navigation.navigate("Home")
  }

  const handleNavigation2 = () => {
    props.navigation.navigate("Favoritos")
  }

  const handleNavigation3 = () => {
    props.navigation.navigate("Contactos")
  }

  const handleNavigation4 = () => {
    // Handle navigation to page 4 here
  }

  const handleNavigation5 = () => {
    props.navigation.navigate("Settings")
  }


  const handleCidade = () => {
    props.navigation.navigate("Cidades")
  }

  const handleIdioma = () => {
    props.navigation.navigate("Idiomas")
  }

  const handleProfilePress = () => {
    props.navigation.navigate('Perfil');
  };

  const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);
  const [vibrationEnabled, setVibrationEnabled] = useState(false);
  const ImgPerfil = require('../assets/karaoke.jpg');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.title}>Definições</Text>
          <TouchableOpacity onPress={handleProfilePress}>
            <View style={styles.imageProfileContainer}>
              <Image source={ImgPerfil} style={styles.imageProfile} />
            </View>
          </TouchableOpacity>
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
            thumbColor={vibrationEnabled ? '#ffffff' : '#ffffff'}
            onValueChange={value => setVibrationEnabled(value)}
            value={vibrationEnabled}
          />
        </View>

        <View style={styles.button}>
          <Text style={styles.subtitle}>Privacidade</Text>
        </View>
      </View>

      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={handleNavigation1}>
          <Iocon name="home" size={33} color='rgba(33, 43, 54, 0.7)' />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation2}>
          <Iocon name="heart" size={33} color='rgba(33, 43, 54, 0.7)' />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation3}>
          <Iocon name="message-circle" size={33} color='rgba(33, 43, 54, 0.7)' />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation4}>
          <Iocon name="coffee" size={33} color='rgba(33, 43, 54, 0.7)' />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation5}>
          <Iocon name="settings" size={33} color='rgba(255, 171, 0, 0.7)' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff"

  },
  content: {
    flex: 1,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#D9D9D9',
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
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
    marginHorizontal: 20,
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
});

export default Settings;
