import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iocon from 'react-native-vector-icons/AntDesign';


const image = require('../assets/background.jpg');

interface SignupScreenProps {
  navigation: any;
}

const Signup = (props: SignupScreenProps) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignup = () => {
    props.navigation.navigate('Signin');
  };
  const handleLogin = () => {
    props.navigation.navigate('Signin');
  };





  return (


    <ImageBackground source={image} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.form}>
          <Text style={styles.title}>Criar Conta</Text>
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
            <TouchableOpacity onPress={handleSignup}>
              <Iocon name="googleplus" size={55} color="#DB4A39" style={styles.socialIcon} />
            </TouchableOpacity >
            <TouchableOpacity onPress={handleSignup}>
              <Icon name="facebook" size={55} color="#3B5998" style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignup}>
              <Icon name="twitter" size={55} color="#00ACEE" style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignup}>
              <Icon name="apple" size={55} color="#6F6E70" style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>Criar Conta</Text>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <Text style={styles.orlogin}>Já tem conta? Faça </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.orPresslogin}>Login</Text>
            </TouchableOpacity>
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
    borderColor: 'rgba(145, 158, 171, 0.32)',
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
    fontSize: 15,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#221B36',
  },
  orlogin: {
    marginHorizontal: 0,
    marginTop: 20,
    fontSize: 16,
    color: '#221B36',
  },
  orPresslogin: {
    marginHorizontal: 0,
    marginTop: 20,
    fontSize: 16,
    color: '#006C9C',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(145, 158, 171, 0.24)',
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
    color: '#221B36',
    fontWeight: 'bold',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 20
  },
  socialIcon: {
    width: 55,
    height: 55,
    marginHorizontal: 10,
    marginBottom: 20
  },
});

export default Signup;