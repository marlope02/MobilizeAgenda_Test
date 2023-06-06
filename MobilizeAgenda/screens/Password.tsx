import React, { useState } from 'react';
import { View, Image, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleCurrentPasswordChange = (text) => {
    setCurrentPassword(text);
  };

  const handleNewPasswordChange = (text) => {
    setNewPassword(text);
  };

  const handleConfirmNewPasswordChange = (text) => {
    setConfirmNewPassword(text);
  };

  const handleChangePassword = () => {
    // Logic for changing the password
    console.log('Change Password');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Mudar Password</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha Atual</Text>
          <TextInput
            style={styles.input}
            value={currentPassword}
            onChangeText={handleCurrentPasswordChange}
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nova Senha</Text>
          <TextInput
            style={styles.input}
            value={newPassword}
            onChangeText={handleNewPasswordChange}
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirmar Nova Senha</Text>
          <TextInput
            style={styles.input}
            value={confirmNewPassword}
            onChangeText={handleConfirmNewPasswordChange}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Mudar Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 16,
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#212B36'
  },
  inputContainer: {
    marginBottom: 10,
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#212B36'
  },
  input: {
    height: 40,
    borderColor: 'rgba(145, 158, 171, 0.32)',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius:8,
  },
  button: {
    backgroundColor: '#00AB55',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: '50%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ChangePasswordPage;
