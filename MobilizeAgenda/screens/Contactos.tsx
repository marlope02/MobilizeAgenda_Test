import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image, TextInput } from 'react-native';

const Contactos = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', online: true, profilepicture: require('./assets/karaoke.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 2, name: 'Jane Smith', online: false, profilepicture: require('./assets/basket.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 3, name: 'Alice Johnson', online: true, profilepicture: require('./assets/background.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 4, name: 'John Doe', online: true, profilepicture: require('./assets/karaoke.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 5, name: 'Jane Smith', online: false, profilepicture: require('./assets/basket.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 6, name: 'Alice Johnson', online: true, profilepicture: require('./assets/basket.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 7, name: 'John Doe', online: true, profilepicture: require('./assets/karaoke.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 8, name: 'Jane Smith', online: false, profilepicture: require('./assets/basket.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 9, name: 'Alice Johnson', online: true, profilepicture: require('./assets/background.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 10, name: 'John Doe', online: true, profilepicture: require('./assets/karaoke.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 11, name: 'Jane Smith', online: false, profilepicture: require('./assets/basket.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    { id: 12, name: 'Alice Johnson', online: true, profilepicture: require('./assets/background.jpg'), lastMessage: 'Hello there!', lastOnline: '1 hour ago' },
    // Add more contacts as needed
  ]);

  const [searchText, setSearchText] = useState('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );



  
  const renderContact = ({ item }) => (
    <View style={styles.contactContainer}>
      <Image
        source={item.profilepicture}
        style={styles.profilePic}
      />
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
          source={require('./assets/karaoke.jpg')}
          style={styles.profilePic}
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
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
  },
  contactRightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: '100%',
    alignSelf: 'center',
    marginVertical: 15,
  },
  onlineProfilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  section: {
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 20,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastOnline: {
    fontSize: 16,
    color: '#888',
  },
  lastMessage: {
    fontSize: 16,
    color: '#888',
  },
  searchContainer: {
    marginBottom: 30,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  onlineIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlineIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    marginRight: 5,
  },
});

export default Contactos;
