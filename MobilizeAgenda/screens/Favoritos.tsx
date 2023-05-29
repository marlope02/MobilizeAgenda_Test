import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const cardData = [
  {
    id: 1,
    image: require('./assets/karaoke.jpg'),
    title: 'Noite de karaoke',
    place: 'Café Onófrio',
    time: '22h-23h',
  },
  {
    id: 2,
    image: require('./assets/basket.jpg'),
    title: 'Jogo Basketball',
    place: 'Pavilhão da Trofa',
    time: '22h-23h',
  },
  {
    id: 3,
    image: require('./assets/teatro.jpg'),
    title: 'Teatro',
    place: 'Tivoli',
    time: '22h-23h',
  },
  {
    id: 4,
    image: require('./assets/karaoke.jpg'),
    title: 'Noite de karaoke',
    place: 'Café Onófrio',
    time: '22h-23h',
  },
  {
    id: 5,
    image: require('./assets/basket.jpg'),
    title: 'Jogo Basketball',
    place: 'Pavilhão da Trofa',
    time: '22h-23h',
  },
  {
    id: 6,
    image: require('./assets/teatro.jpg'),
    title: 'Teatro',
    place: 'Tivoli',
    time: '22h-23h',
  },
  // Add more cards as needed
];

const CardScrollPage = () => {



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

  const handleNavigation3 = () => {
    // Handle navigation to page 3 here
  }

  const handleNavigation4 = () => {
    // Handle navigation to page 4 here
  }

  const handleNavigation5 = () => {
    // Handle navigation to page 5 here
  }



  return (
    <View style={styles.container}>
      < View style={styles.header}>
        <Text style={styles.title}>Favoritos</Text>
        <Image
          source={require('./assets/karaoke.jpg')}
          style={styles.myProfilePic}
        />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TouchableOpacity onPress={handleSearch}>
            <Icon name="search" color="rgba(145, 158, 171, 0.32)" size={24} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={handleSearchTextChange}
            onSubmitEditing={handleSearch}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {cardData.map((card) => (
          <View style={styles.card} key={card.id}>
            <Image source={card.image} style={styles.image} />
            <View style={styles.descriptionContainer}>
              <Text style={styles.titleDescription}>{card.title}</Text>
              <View style={styles.placeTimeContainer}>
                <Text style={styles.place}>{card.place}</Text>
                <Text style={styles.time}>{card.time}</Text>
              </View>
            </View>
          </View>
        ))}
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
            color='rgba(255, 86, 48, 0.7)'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigation3}>
          <Icon
            name="message-circle"
            size={33}
            color='rgba(33, 43, 54, 0.7)'
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
    backgroundColor: '#fff',

  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  searchInput: {
    fontSize: 16,
    color: '#919EAB',
    marginLeft: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
  myProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 20,
  },
  card: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  descriptionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  title: {
    color: '#212B36',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    marginLeft: 20,
  },
  titleDescription: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    marginLeft: 20,
  },
  placeTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  place: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 10
  },
  time: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 5,
    marginRight: 10
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
});

export default CardScrollPage;
