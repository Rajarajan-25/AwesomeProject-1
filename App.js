import React from 'react';


import LoginScreen from './source/common/screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const App=()=>{
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="Log In" component={LoginScreen} headerShown={false}  />  
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App



