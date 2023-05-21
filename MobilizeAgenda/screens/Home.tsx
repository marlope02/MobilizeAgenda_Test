import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';





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
        <TouchableOpacity onPress={handleSearch}>
          <Icon name='search' color='#000' />
        </TouchableOpacity>
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
              <TouchableOpacity style={styles.square1}>
                <Image source={require('./assets/karaoke.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Noite de karaoke</Text>
                <Text style={styles.squareText}>Café Onófrio</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square2}>
                <Image source={require('./assets/basket.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Jogo Basketball</Text>
                <Text style={styles.squareText}>Pavilhão da Trofa</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square3}>
                <Image source={require('./assets/teatro.jpg')} style={styles.SquareImage} />
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
                <Image source={require('./assets/karaoke.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Noite de karaoke</Text>
                <Text style={styles.squareText}>Café Onófrio</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square2}>
                <Image source={require('./assets/basket.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Jogo Basketball</Text>
                <Text style={styles.squareText}>Pavilhão da Trofa</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square3}>
                <Image source={require('./assets/teatro.jpg')} style={styles.SquareImage} />
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
                <Image source={require('./assets/karaoke.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Noite de karaoke</Text>
                <Text style={styles.squareText}>Café Onófrio</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square2}>
                <Image source={require('./assets/basket.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Jogo Basketball</Text>
                <Text style={styles.squareText}>Pavilhão da Trofa</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square3}>
                <Image source={require('./assets/teatro.jpg')} style={styles.SquareImage} />
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
                <Image source={require('./assets/karaoke.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Noite de karaoke</Text>
                <Text style={styles.squareText}>Café Onófrio</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square2}>
                <Image source={require('./assets/basket.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Jogo Basketball</Text>
                <Text style={styles.squareText}>Pavilhão da Trofa</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square3}>
                <Image source={require('./assets/teatro.jpg')} style={styles.SquareImage} />
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
                <Image source={require('./assets/karaoke.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Noite de karaoke</Text>
                <Text style={styles.squareText}>Café Onófrio</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square2}>
                <Image source={require('./assets/basket.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Jogo Basketball</Text>
                <Text style={styles.squareText}>Pavilhão da Trofa</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.square3}>
                <Image source={require('./assets/teatro.jpg')} style={styles.SquareImage} />
                <Text style={styles.squareText}>Teatro</Text>
                <Text style={styles.squareText}>Tivoli</Text>
                <Text style={styles.squareText}>22h-23h</Text>
              </TouchableOpacity>
            </ScrollView>




          </View>
        </View>
      </ScrollView>
      <View style={styles.navigationContainer}>
        <Icon
          name="home"
          type="font-awesome"
          onPress={handleNavigation1}
          size={24}
          color="black"
        />
        <Icon
          name="heart"
          type="font-awesome"
          onPress={handleNavigation2}
          size={24}
          color="black"
        />
        <Icon
          name="comments"
          type="font-awesome"
          onPress={handleNavigation3}
          size={24}
          color="black"
        />
        <Icon
          name="coffee"
          type="font-awesome"
          onPress={handleNavigation4}
          size={24}
          color="black"
        />
        <Icon
          name="cog"
          type="font-awesome"
          onPress={handleNavigation5}
          size={24}
          color="black"
        />
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    borderBottomColor: '#000',
    width: '90%',
    alignSelf: 'center',
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
    paddingHorizontal: 10,
  },
  orTexto: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
  },
  scrollVertical: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
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
    backgroundColor: '#eee',
    padding: 10,
  },
  navigationButton1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 8,
  },
  navigationButtonText1: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationButton2: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 8,
  },
  navigationButtonText2: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationButton3: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 8,
  },
  navigationButtonText3: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationButton4: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 8,
  },
  navigationButtonText4: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationButton5: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 8,
  },
  navigationButtonText5: {
    color: '#fff',
    fontWeight: 'bold',
  },

});

export default Home;
