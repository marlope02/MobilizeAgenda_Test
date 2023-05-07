import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const image = require('./assets/background.jpg');
const googleIcon = require('./assets/google.png');
const facebookIcon = require('./assets/facebook.png');
const twitterIcon = require('./assets/twitter.png');
const appleIcon = require('./assets/apple.png');




const Signup = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    // Handle login logic here
  };





  return (


    <ImageBackground source={image} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.form}>
          <Text style={styles.credenciais}>Criar Conta</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={setNome}
            value={nome}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
          <View style={styles.orContainer}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>Ou registe-se com:</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={googleIcon} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={facebookIcon} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={twitterIcon} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={appleIcon} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signupButton} onPress={handleLogin}>
            <Text style={styles.signupButtonText}>Criar Conta</Text>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <Text style={styles.orTexto}>Já tem conta? Faça Login</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '80%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  signupButton: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF5630',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#FF5630',
    fontSize: 18,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#444',
  },
  orTexto: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#444',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  credenciais: {
    marginBottom: 36,
    fontSize: 16,
    color: '#444',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  socialIcon: {
    width: 30,
    height: 30
  },
});

export default Signup;