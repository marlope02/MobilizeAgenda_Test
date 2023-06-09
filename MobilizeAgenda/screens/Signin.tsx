import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iocon from 'react-native-vector-icons/AntDesign';


interface SigninScreenProps {
  navigation: any;
}

const image = require('../assets/background.jpg');



const Signin = (props: SigninScreenProps) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    props.navigation.navigate("Home")
  };

  const handleSignup = () => {
    props.navigation.navigate("Signup")
  };



  return (


    <ImageBackground source={image} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.form}>
          <Text style={styles.mobilize}>MobilizeAgenda</Text>
          <Text style={styles.credenciais}>Por favor entre com as suas credenciais</Text>
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
          <View style={styles.orContainer}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>Ou entre com:</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity onPress={handleLogin}>
              <Iocon name="googleplus" size={55} color="#DB4A39" style={styles.socialIcon} />
            </TouchableOpacity >
            <TouchableOpacity onPress={handleLogin}>
              <Icon name="facebook" size={55} color="#3B5998" style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin}>
              <Icon name="twitter" size={55} color="#00ACEE" style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin}>
              <Icon name="apple" size={55} color="#6F6E70" style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>Criar conta</Text>
          </TouchableOpacity>
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
  button: {
    width: '100%',
    height: 50,
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: '#FF5630',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
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
    fontSize: 16,
    color: '#444',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  mobilize: {
    marginBottom: 36,
    fontSize: 24,
    color: '#FF5630',
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
    marginHorizontal: 5,
  },
  socialIcon: {
    width: 55,
    height: 55,
    marginHorizontal: 10,
    marginBottom: 10
  },
});

export default Signin;