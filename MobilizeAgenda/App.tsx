import React, { useState } from 'react';
import { View, Image, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
//import { ScrollView } from 'react-native-gesture-handler';

const countries = [
  'Portugal',
  'Estados Unidos',
  'Reino Unido',
  'Austrália',
  'Alemanha',
];

const Perfil = () => {
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    birthDate: new Date(),
    country: 'United States',
    gender: 'Male',
    showDatePicker: false,
  });

  const handleInputChange = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const toggleDatePicker = () => {
    setUserData((prevData) => ({
      ...prevData,
      showDatePicker: !prevData.showDatePicker,
    }));
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || userData.birthDate;
    setUserData((prevData) => ({
      ...prevData,
      birthDate: currentDate,
      showDatePicker: false,
    }));
  };

  const handlePasswordChange = () => {
    // Logic for changing password
  };

  const handleSignOut = () => {
    // Logic for signing out
    console.log('Sign Out');
  };

  return (
    <View style={styles.container}>
      
      <Image
        source={require('./assets/background.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <ScrollView>
        <View style={styles.profileContainer}>
          <Image
            source={require('./assets/karaoke.jpg')}
            style={styles.profilePic}
          />
        </View>
        <InputWithTitle
          title="Primeiro Nome"
          value={userData.firstName}
          onChangeText={(text) => handleInputChange('Primeiro Nome', text)}
        />
        <InputWithTitle
          title="Último Nome"
          value={userData.lastName}
          onChangeText={(text) => handleInputChange('Último Nome', text)}
        />
        <InputWithTitle
          title="Email"
          value={userData.email}
          onChangeText={(text) => handleInputChange('Email', text)}
        />
        
        <View style={styles.line}></View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Data de Nascimento</Text>
          <TouchableOpacity
            style={styles.dateInput}
            onPress={toggleDatePicker}
          >
            <Text style={styles.dateText}>{userData.birthDate.toDateString()}</Text>
          </TouchableOpacity>
          {userData.showDatePicker && (
            <DateTimePicker
              value={userData.birthDate}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}
        </View>
        <DropdownWithTitle
          title="País"
          value={userData.country}
          onValueChange={(value) => handleInputChange('country', value)}
        >
          {countries.map((country) => (
            <Picker.Item key={country} label={country} value={country} />
          ))}
        </DropdownWithTitle>
        <DropdownWithTitle
          title="Género"
          value={userData.gender}
          onValueChange={(value) => handleInputChange('gender', value)}
        >
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Outro" value="Outro" />
        </DropdownWithTitle>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonChange} onPress={handlePasswordChange}>
            <Text style={styles.buttonTextChange}>Mudar Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSignout} onPress={handleSignOut}>
            <Text style={styles.buttonTextSignout}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      
      </ScrollView></View>
    </View>
  );
};

const InputWithTitle = ({ title, value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const DropdownWithTitle = ({ title, value, onValueChange, children }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{title}</Text>
      <Picker
        style={styles.dropdown}
        selectedValue={value}
        onValueChange={onValueChange}
      >
        {children}
      </Picker>
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
    height: '85%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 30,
    borderRadius: 10,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 10,

  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8, // Added borderRadius
  },
  dateInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 8, // Added borderRadius
  },
  dateText: {
    fontSize: 16,
  },
  flexFill: {
    flex: 1,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: 'rgba(145, 158, 171, 0.24)',
    width: '100%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonsContainer: {
    marginTop: 20,
  },
  buttonChange: {
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFAB00',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSignout: {
    marginTop: 10,
    backgroundColor: '#B71D18',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#B71D18',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextChange: {
    color: '#FFAB00',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  },
  buttonTextSignout: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  },
  dropdown: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default Perfil;
