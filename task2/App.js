/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails'
import Navigator from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  {/*const [movie, setMovie] = useState([
    {name: 'Iron Man', key: '1'},
    {name: 'Narnia', key: '2'},
    {name: 'The 3 kingdom', key: '3'},
    {name: 'Fast and Furious', key: '4'},
    {name: 'Men in Black ', key: '5'},
    {name: 'Men in Black 2', key: '6'},
    {name: 'Men in Black 3', key: '7'},
  ]);*/}
  
  return (
      <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen
          name="Details"
          component={ReviewDetails}
          options={{ title: 'Review Details' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  item: {
    padding: 25,
    fontSize: 24,
    width: '60%',
    backgroundColor: 'brown',
    marginTop: 15,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
