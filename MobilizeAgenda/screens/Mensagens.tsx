import React, { useState } from 'react';
import { View, FlatList, TextInput, Button, Text, Image, StyleSheet } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const handleBack = () => {
  // Handle navigation to page 5 here
}

const Mensagens = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [recipientOnline, setRecipientOnline] = useState(true); // Set the recipient's online status here

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([
        ...messages,
        { id: Date.now(), text: message, timestamp: new Date() },
      ]);
      setMessage('');
    }
  };

  const renderMessage = ({ item }) => {
    const isSentMessage = item.sender === 'user'; // Replace 'user' with the appropriate logic
    return (
      <View style={[
        styles.messageContainer,
        isSentMessage ? styles.sentMessageContainer : styles.receivedMessageContainer,
      ]}>
        <Image style={styles.profilePic} source={require('../assets/karaoke.jpg')} />
        <View style={styles.messageContent}>
          <Text style={styles.messageText}>{item.text}</Text>
          <Text style={styles.timestampText}>{item.timestamp.toLocaleString()}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <AntDesignIcon name="leftcircleo" size={30} color="#161C34" onPress={handleBack} />
      </View>
      <View style={styles.header}>
        <Image style={styles.profilePic} source={require('../assets/background.jpg')} />
        <View>
          <Text style={styles.recipientName}>John Doe</Text>
          {recipientOnline && <Text style={styles.onlineText}>Online now</Text>}
        </View>
      </View>
      <View style={styles.line}></View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.messagesContainer}
      />

      <View style={styles.inputLine}></View>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcon name="emoticon" size={24} color="#777" style={styles.iconButton} />
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message"
        />
        <MaterialCommunityIcon name="microphone-outline" size={24} color="#777" style={styles.iconButton} />
        <MaterialCommunityIcon name="camera" size={24} color="#777" style={styles.iconButton} />
        <MaterialCommunityIcon name="send" size={24} color="#777" style={styles.iconButton} onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buttonContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  recipientName: {
    fontSize: 14,
    fontWeight: 'normal',
    marginLeft: 8,
    color: "#212B36",
  },
  onlineText: {
    color: '#36B37E',
    marginLeft: 8,
    fontSize: 14
  },
  messagesContainer: {
    flexGrow: 1,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#F4F6F8',
    marginBottom: 8,
    borderRadius: 8,
  },
  sentMessageContainer: {
    backgroundColor: '#C8FACD',
  },
  receivedMessageContainer: {
    backgroundColor: '#F4F6F8',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  messageContent: {
    marginLeft: 8,
  },
  messageText: {
    fontSize: 16,
  },
  timestampText: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#212B36',
    fontSize: 16,
    paddingHorizontal: 8,
  },
  inputLine: {
    borderBottomWidth: 1,
    borderColor: 'rgba(145, 158, 171, 0.24)',
    width: '100%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: 'rgba(145, 158, 171, 0.24)',
    width: '100%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  iconButton: {
    marginHorizontal: 4,
  },
});

export default Mensagens;
