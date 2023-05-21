import React, { useState } from 'react';
import { View, FlatList, TextInput, Button, StyleSheet, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const MessagePage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') {
      return;
    }

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setNewMessage('');
  };

  const handleBack = () => {
    // Handle back button press
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View style={styles.backButtonContainer}>
            <Button title="Back" onPress={handleBack} />
          </View>
          <View style={styles.profileContainer}>
            <View style={styles.profilePictureContainer}>
              <Image source={require('./assets/karaoke.jpg')} style={styles.profilePicture} />
            </View>
            <View style={styles.profileTextContainer}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.status}>Online</Text>
            </View>
          </View>
          <View style={styles.flexPlaceholder} />
        </View>
        <View style={styles.line}></View>
      </View>
      <ScrollView>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={text => setNewMessage(text)}
          placeholder="Type your message"
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center', // Align content in the middle vertically
  },
  headerContainer: {
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonContainer: {
    marginLeft: 8,
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePictureContainer: {
    marginRight: 8,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: 'gray',
  },
  messageContainer: {
    padding: 8,
    marginBottom: 8,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
  },
  flexPlaceholder: {
    flex: 1,
  },
});

export default MessagePage;
