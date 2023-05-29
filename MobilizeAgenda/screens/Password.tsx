import React, { useState } from 'react';
import { View, Image, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  // Add more countries here
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
    console.log('Change Password');
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
        <View style={styles.profileContainer}>
          <Image
            source={require('./assets/karaoke.jpg')}
            style={styles.profilePic}
          />
        </View>
        <InputWithTitle
          title="First Name"
          value={userData.firstName}
          onChangeText={(text) => handleInputChange('firstName', text)}
        />
        <InputWithTitle
          title="Last Name"
          value={userData.lastName}
          onChangeText={(text) => handleInputChange('lastName', text)}
        />
        <InputWithTitle
          title="Email"
          value={userData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Birth Date</Text>
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
          title="Country"
          value={userData.country}
          onValueChange={(value) => handleInputChange('country', value)}
        >
          {countries.map((country) => (
            <Picker.Item key={country} label={country} value={country} />
          ))}
        </DropdownWithTitle>
        <DropdownWithTitle 
          title="Gender"
          value={userData.gender}
          onValueChange={(value) => handleInputChange('gender', value)}
        >
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Other" value="Other" />
        </DropdownWithTitle>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonChange} onPress={handlePasswordChange}>
            <Text style={styles.buttonTextChange}>Mudar Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSignout} onPress={handleSignOut}>
            <Text style={styles.buttonTextSignout}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 40,
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
  },
  datePicker: {
    width: '100%',
    marginTop: 5,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  dateInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 16,
  },
  dropdown: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
  flexFill: {
    flex: 1,
  },
  buttonsContainer: {
    marginTop: 20,
  },
  buttonChange: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonSignout: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonTextChange: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonTextSignout: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Perfil;
