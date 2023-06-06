import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


interface HomeScreenProps {
  navigation: any;
}




const Home = (props: HomeScreenProps) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  }

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

  const handleActivity = () => {
    props.navigation.navigate("Activity")
  }






  return (

    <View style={styles.container}>

      < View style={styles.header}>
        <Text style={styles.title}>Eventos</Text>
        <Image
          source={require('../assets/karaoke.jpg')}
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


      <View style={styles.horizontalScroll}>
        <ScrollView horizontal={true}>
          <TouchableOpacity style={styles.horizontalScrollItem}>
            <Text style={styles.horizontalScrollText}>Para Ti</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalScrollItem}>
            <Text style={styles.horizontalScrollText}>Desporto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalScrollItem}>
            <Text style={styles.horizontalScrollText}>Cultura</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalScrollItem}>
            <Text style={styles.horizontalScrollText}>Andebol</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalScrollItem}>
            <Text style={styles.horizontalScrollText}>Música</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalScrollItem}>
            <Text style={styles.horizontalScrollText}>Teatro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalScrollItem}>
            <Text style={styles.horizontalScrollText}>Basket</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.line}></View>

      <ScrollView style={styles.scrollVertical}>

        <View style={styles.orContainer}>
          <Text style={styles.orTexto}>Eventos perto de ti</Text>
        </View>

        <View style={styles.squareContainer}>
          <View style={styles.squareRow}>
            <ScrollView horizontal={true}>
              <TouchableOpacity style={styles.square1} onPress={handleActivity}>
                <Image source={require('../assets/karaoke.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Noite de karaoke</Text>
                <Text style={styles.squareText}>Café Onófrio</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square2}>
                <Image source={require('../assets/basket.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Jogo Basketball</Text>
                <Text style={styles.squareText}>Pavilhão da Trofa</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square3}>
                <Image source={require('../assets/teatro.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Teatro</Text>
                <Text style={styles.squareText}>Tivoli</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.orTexto}>Cultura ao teu gosto</Text>
        </View>

        <View style={styles.squareContainer}>
          <View style={styles.squareRow}>
            <ScrollView horizontal={true}>
              <TouchableOpacity style={styles.square1}>
                <Image source={require('../assets/karaoke.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Noite de karaoke</Text>
                <Text style={styles.squareText}>Café Onófrio</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square2}>
                <Image source={require('../assets/basket.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Jogo Basketball</Text>
                <Text style={styles.squareText}>Pavilhão da Trofa</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square3}>
                <Image source={require('../assets/teatro.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Teatro</Text>
                <Text style={styles.squareText}>Tivoli</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>


        <View style={styles.orContainer}>
          <Text style={styles.orTexto}>Desporto ao teu gosto</Text>
        </View>

        <View style={styles.squareContainer}>
          <View style={styles.squareRow}>
            <ScrollView horizontal={true}>
              <TouchableOpacity style={styles.square1}>
                <Image source={require('../assets/karaoke.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Noite de karaoke</Text>
                <Text style={styles.squareText}>Café Onófrio</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square2}>
                <Image source={require('../assets/basket.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Jogo Basketball</Text>
                <Text style={styles.squareText}>Pavilhão da Trofa</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square3}>
                <Image source={require('../assets/teatro.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Teatro</Text>
                <Text style={styles.squareText}>Tivoli</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.orTexto}>Cultura perto de ti</Text>
        </View>

        <View style={styles.squareContainer}>
          <View style={styles.squareRow}>
            <ScrollView horizontal={true}>
              <TouchableOpacity style={styles.square1}>
                <Image source={require('../assets/karaoke.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Noite de karaoke</Text>
                <Text style={styles.squareText}>Café Onófrio</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square2}>
                <Image source={require('../assets/basket.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Jogo Basketball</Text>
                <Text style={styles.squareText}>Pavilhão da Trofa</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square3}>
                <Image source={require('../assets/teatro.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Teatro</Text>
                <Text style={styles.squareText}>Tivoli</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.orTexto}>Desporto perto de ti</Text>
        </View>

        <View style={styles.squareContainer}>
          <View style={styles.squareRow}>
            <ScrollView horizontal={true}>
              <TouchableOpacity style={styles.square1}>
                <Image source={require('../assets/karaoke.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Noite de karaoke</Text>
                <Text style={styles.squareText}>Café Onófrio</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square2}>
                <Image source={require('../assets/basket.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Jogo Basketball</Text>
                <Text style={styles.squareText}>Pavilhão da Trofa</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square3}>
                <Image source={require('../assets/teatro.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Teatro</Text>
                <Text style={styles.squareText}>Tivoli</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
            </ScrollView>




          </View>
        </View>
      </ScrollView>
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={handleNavigation1}>
          <Icon
            name="home"
            size={33}
            color='rgba(51, 102, 255, 0.7)'
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginTop: 10,
    justifyContent: 'space-between',
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
  horizontalScroll: {
    height: 20,
    marginBottom: 5,
    marginTop: 15,
    width: '90%',
    alignSelf: 'center',
  },
  horizontalScrollItem: {
    paddingHorizontal: 10,
  },
  horizontalScrollText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'normal',
  },
  line: {
    borderBottomWidth: 1,
    borderColor: 'rgba(145, 158, 171, 0.24)',
    width: '90%',
    alignSelf: 'center',
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
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  orTexto: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212B36',
    marginLeft: 20
  },
  myProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 20,
  },
  scrollVertical: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  squareRow: {
    flexDirection: 'row',
  },
  square1: {
    width: 170,
    height: 190,
    backgroundColor: '#FF5630',
    marginRight: 10,
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
  },
  square2: {
    width: 170,
    height: 190,
    backgroundColor: '#FFAB00',
    marginRight: 10,
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
  },
  square3: {
    width: 170,
    height: 190,
    backgroundColor: '#00B8D9',
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
  },
  squareText: {
    marginHorizontal: 5,
    marginVertical: 2,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffff'
  },
  SquareImage: {
    width: 148,
    height: 85,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
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

export default Home;
