import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SigninScreen from './screens/Signin';
import HomeScreen from './screens/Home';
import SignupScreen from './screens/Signup';
import ActivityScreen from './screens/Activity';
import CidadesScreen from './screens/Cidades';
import ContactosScreen from './screens/Contactos';
import FavoritosScreen from './screens/Favoritos';
import IdiomasScreen from './screens/Idiomas';
import MensagensScreen from './screens/Mensagens';
import PasswordScreen from './screens/Password';
import PerfilScreen from './screens/Perfil';
import SettingsScreen from './screens/Settings';





const {Navigator, Screen} = createStackNavigator();

const AppNavigator = () => {
  return (
  <NavigationContainer>
    <Navigator headerMode="none" initialRouteName='Signin'>
      <Screen name="Signin" component={SigninScreen} />
      <Screen name="Signup" component={SignupScreen} />
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Activity" component={ActivityScreen} />
      <Screen name="Cidades" component={CidadesScreen} />
      <Screen name="Contactos" component={ContactosScreen} />
      <Screen name="Favoritos" component={FavoritosScreen} />
      <Screen name="Idiomas" component={IdiomasScreen} />
      <Screen name="Mensagens" component={MensagensScreen} />
      <Screen name="Password" component={PasswordScreen} />
      <Screen name="Perfil" component={PerfilScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  </NavigationContainer>
  )
}

export default AppNavigator;


