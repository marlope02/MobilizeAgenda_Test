import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
//import Ionicons from 'react-native-ionicons';




const Home = () => {
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

  const ImgSquare1 = require('./assets/karaoke.jpg');
  const ImgSquare2 = require('./assets/basket.jpg');
  const ImgSquare3 = require('./assets/teatro.jpg');



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
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>

        <View style={styles.orContainer}>
          <Text style={styles.orTexto}>Eventos perto de ti</Text>
        </View>

        <View style={styles.squareContainer}>
          <View style={styles.squareRow}>
            <TouchableOpacity style={styles.square1}>
              <Image source={ImgSquare1} style={styles.SquareImage} />
              <Text style={styles.squareText}>Noite de karaoke</Text>
              <Text style={styles.squareText}>Café Onófrio</Text>
              <Text style={styles.squareText}>22h-23h</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square2}>
              <Image source={ImgSquare2} style={styles.SquareImage} />
              <Text style={styles.squareText}>Jogo Basketball</Text>
              <Text style={styles.squareText}>Pavilhão da Trofa</Text>
              <Text style={styles.squareText}>22h-23h</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.squareRow}>
            <TouchableOpacity style={styles.square3}>
              <Image source={ImgSquare3} style={styles.SquareImage} />
              <Text style={styles.squareText}>Teatro</Text>
              <Text style={styles.squareText}>Tivoli</Text>
              <Text style={styles.squareText}>22h-23h</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square1}>
              <Image source={ImgSquare1} style={styles.SquareImage} />
              <Text style={styles.squareText}>Noite de karaoke</Text>
              <Text style={styles.squareText}>Café Onófrio</Text>
              <Text style={styles.squareText}>22h-23h</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.orTexto}>Cultura ao teu gosto</Text>
        </View>

        <View style={styles.squareContainer}>
          <View style={styles.squareRow}>
            <TouchableOpacity style={styles.square1}>
              <Image source={ImgSquare1} style={styles.SquareImage} />
              <Text style={styles.squareText}>Noite de karaoke</Text>
              <Text style={styles.squareText}>Café Onófrio</Text>
              <Text style={styles.squareText}>22h-23h</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square2}>
              <Image source={ImgSquare2} style={styles.SquareImage} />
              <Text style={styles.squareText}>Jogo Basketball</Text>
              <Text style={styles.squareText}>Pavilhão da Trofa</Text>
              <Text style={styles.squareText}>22h-23h</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.squareRow}>
            <TouchableOpacity style={styles.square3}>
              <Image source={ImgSquare3} style={styles.SquareImage} />
              <Text style={styles.squareText}>Teatro</Text>
              <Text style={styles.squareText}>Tivoli</Text>
              <Text style={styles.squareText}>22h-23h</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square1}>
              <Image source={ImgSquare1} style={styles.SquareImage} />
              <Text style={styles.squareText}>Noite de karaoke</Text>
              <Text style={styles.squareText}>Café Onófrio</Text>
              <Text style={styles.squareText}>22h-23h</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.orTexto}>Desporto ao teu gosto</Text>
        </View>

        <View style={styles.squareContainer}>
          <View style={styles.squareRow}>
            <TouchableOpacity style={styles.square1}>
              <Image source={ImgSquare1} style={styles.SquareImage} />
              <Text style={styles.squareText}>Noite de karaoke</Text>
              <Text style={styles.squareText}>Café Onófrio</Text>
              <Text style={styles.squareText}>22h-23h</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square2}>
              <Image source={ImgSquare2} style={styles.SquareImage} />
              <Text style={styles.squareText}>Jogo Basketball</Text>
              <Text style={styles.squareText}>Pavilhão da Trofa</Text>
              <Text style={styles.squareText}>22h-23h</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.squareRow}>
            <TouchableOpacity style={styles.square3}>
              <Image source={ImgSquare3} style={styles.SquareImage} />
              <Text style={styles.squareText}>Teatro</Text>
              <Text style={styles.squareText}>Tivoli</Text>
              <Text style={styles.squareText}>22h-23h</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square1}>
              <Image source={ImgSquare1} style={styles.SquareImage} />
              <Text style={styles.squareText}>Noite de karaoke</Text>
              <Text style={styles.squareText}>Café Onófrio</Text>
              <Text style={styles.squareText}>22h-23h</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>






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
    backgroundColor: '#ffff',
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
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  orTexto: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#444',
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
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  square1: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    height: '100%',
    width: '48%',
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#ccc',
    overflow: 'hidden',
    marginBottom: 5,
    backgroundColor: '#FF5630',

  },
  square2: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    height: '100%',
    width: '48%',
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#ccc',
    overflow: 'hidden',
    marginBottom: 5,
    backgroundColor: '#FFAB00'
  },
  square3: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    height: '100%',
    width: '48%',
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#ccc',
    overflow: 'hidden',
    marginBottom: 5,
    backgroundColor: '#00B8D9',
  },
  squareText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  squareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  SquareImage: {
    width: 148,
    height: 85,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  scrollViewContainer: {
    flex: 1,
    padding: 10,
  },
});


export default Home;
