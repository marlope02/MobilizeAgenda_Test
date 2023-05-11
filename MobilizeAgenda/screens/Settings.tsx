import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
//import Ionicons from 'react-native-ionicons';




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

  const ImgPerfil = require('./assets/karaoke.jpg');



  return (

    <View style={styles.container}>

      <View style={styles.row}>
        <Text style={styles.title}>Definições</Text>
        <Image source={ImgPerfil} style={styles.imageProfile} />
      </View>
      <ScrollView style={styles.scrollViewVertical}>


        <View style={styles.column}>
          <TouchableOpacity style={styles.button} onPress={handleCidade}>
            
              <Text style={styles.subtitle}>Cidade</Text>
              <Text style={styles.description}>Maia</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleIdioma}>
              <Text style={styles.subtitle}>Idioma</Text>
              <Text style={styles.description}>Português</Text>
          </TouchableOpacity>
          <View style={styles.button}>         
              <Text style={styles.subtitle}>Tema Escuro</Text>
          </View>
          <View style={styles.button}>         
              <Text style={styles.subtitle}>Vibração</Text>
          </View>
          <View style={styles.button}>
              <Text style={styles.subtitle}>Privacidade</Text>
          </View>
        </View>

      </ScrollView>









      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#212B36',
    alignItems: 'flex-start',
  },
  /*row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },*/
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //marginHorizontal: 1,
  },
  scrollViewVertical: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
    marginDown: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
    marginTop: 10,
    color: '#212B36',
    textAlign: 'left',
  },
  description: {
    fontSize: 15,
    fontWeight: 'normal',
    marginTop: 10,
    color: '#212B36',
    textAlign: 'right',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#919EAB',
    width: '100%',
    //height: '40%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 5,
  },
  imageProfile: {
    width: 10,
    height: 10,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    alignSelf: 'flex-end',
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
