import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const MyComponent = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  }

  const handleSearch = () => {
    // Handle search logic here
  }

  const handleNavigation1 = () => {
    // Handle navigation to page 1 here
  }

  const handleNavigation2 = () => {
    // Handle navigation to page 2 here
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearchTextChange}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.navigationButton1} onPress={handleNavigation1}>
          <Text style={styles.navigationButtonText1}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton2} onPress={handleNavigation2}>
          <Text style={styles.navigationButtonText2}>Fav</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton3} onPress={handleNavigation2}>
          <Text style={styles.navigationButtonText3}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton4} onPress={handleNavigation2}>
          <Text style={styles.navigationButtonText4}>Cup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton5} onPress={handleNavigation2}>
          <Text style={styles.navigationButtonText5}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
    borderRadius: 5,
  },
  navigationButtonText1: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationButton2: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 5,
  },
  navigationButtonText2: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationButton3: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 5,
  },
  navigationButtonText3: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationButton4: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 5,
  },
  navigationButtonText4: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationButton5: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 5,
  },
  navigationButtonText5: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MyComponent;
