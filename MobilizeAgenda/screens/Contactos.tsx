import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface ContactosScreenProps {
  navigation: any;
}


const Contactos = (props: ContactosScreenProps) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', online: true, profilepicture: require('../assets/karaoke.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 2, name: 'Jane Smith', online: false, profilepicture: require('../assets/basket.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 3, name: 'Alice Johnson', online: true, profilepicture: require('../assets/background.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 4, name: 'John Doe', online: true, profilepicture: require('../assets/karaoke.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 5, name: 'Jane Smith', online: false, profilepicture: require('../assets/basket.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 6, name: 'Alice Johnson', online: true, profilepicture: require('../assets/basket.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 7, name: 'John Doe', online: true, profilepicture: require('../assets/karaoke.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 8, name: 'Jane Smith', online: false, profilepicture: require('../assets/basket.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 9, name: 'Alice Johnson', online: true, profilepicture: require('../assets/background.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 10, name: 'John Doe', online: true, profilepicture: require('../assets/karaoke.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 11, name: 'Jane Smith', online: false, profilepicture: require('../assets/basket.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 12, name: 'Alice Johnson', online: true, profilepicture: require('../assets/background.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    // Add more contacts as needed
  ]);

  const [searchText, setSearchText] = useState('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = () => {
    // Handle search logic here
  }

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


  const renderContact = ({ item }) => (
    <View style={styles.contactContainer}>
      <Image
        source={item.profilepicture}
        style={styles.profilePic}
      />
      {item.online && <View style={styles.onlineIndicator} />}
      <View style={styles.contactInfo}>
        <View style={styles.contactNameContainer}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.lastOnline}>{item.lastOnline}</Text>
        </View>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
    </View>
  );
  

  const renderOnlineUsers = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {contacts.map((contact) => (
        contact.online && (
          <Image 
            key={contact.id}
            source={contact.profilepicture}
            style={styles.onlineProfilePic}
          />
        )
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chat</Text>
        <Image
          source={require('../assets/karaoke.jpg')}
          style={styles.myProfilePic}
        />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TouchableOpacity onPress={handleSearch}>
            <Icon name="search" color="#000" size={16} style={styles.searchIcon} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            onSubmitEditing={handleSearch}
          />

        </View>
      </View>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Contactos Online</Text>
          {renderOnlineUsers()}
        </View>
        <View style={styles.line}></View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Conversas</Text>
          <FlatList
            data={filteredContacts}
            renderItem={renderContact}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>

      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={handleNavigation1}>
          <Icon
            name="home"
            size={33}
            color='rgba(33, 43, 54, 0.7)'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation2}>
          <Icon
            name="heart"
            size={33}
            color='rgba(33, 43, 54, 0.7)'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation3}>
          <Icon
            name="message-circle"
            size={33}
            color='rgba(0, 171, 85, 0.7)'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation4}>
          <Icon
            name="coffee"
            size={33}
            color='rgba(33, 43, 54, 0.7)'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation5}>
          <Icon
            name="settings"
            size={33}
            color='rgba(33, 43, 54, 0.7)'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 0,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -40,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212B36',
    marginLeft:20
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  onlineIndicator: {
    position: 'relative',
    bottom: -20,
    right: 10,
    width: 11,
    height: 11,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  
  
  myProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: 'rgba(145, 158, 171, 0.24)',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  onlineProfilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  section: {
    marginBottom: 10,
    marginHorizontal: 20
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#212B36',
  },
  contactContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(145, 158, 171, 0.32)',
    padding: 10,
  },
  contactInfo: {
    marginLeft: 10,
    flex: 1,
  },
  contactNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contactName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#212B36',
  },
  lastOnline: {
    fontSize: 12,
    color: '#919EAB',
  },
  lastMessage: {
    fontSize: 14,
    color: '#637381',
  },
  onlineIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(145, 158, 171, 0.32)',
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: 20,
  },
  searchIcon: {
    marginLeft: 5,
    color: '#919EAB',
  },
  searchInput: {
    fontSize: 16,
    color: '#919EAB',
    marginLeft: 10,
  },
});

export default Contactos;
