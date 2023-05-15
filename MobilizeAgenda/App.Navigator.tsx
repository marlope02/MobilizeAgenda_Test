import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SigninScreen from './screens/Signin';
import HomeScreen from './screens/Home';
import SignupScreen from './screens/Signup';




const {Navigator, Screen} = createStackNavigator();

const AppNavigator = () => {
  return (
  <NavigationContainer>
    <Navigator /*headerMode="none"*/ initialRouteName='Signin'>
      <Screen name="Signin" component={SigninScreen} />
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Signup" component={SignupScreen} />
    </Navigator>
  </NavigationContainer>
  )
}

export default AppNavigator;


