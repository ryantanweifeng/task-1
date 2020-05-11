/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

export default function App() {
  const [movie, setMovie] = useState([
    {name: 'Iron Man', key: '1'},
    {name: 'Narnia', key: '2'},
    {name: 'The 3 kingdom', key: '3'},
    {name: 'Fast and Furious', key: '4'},
    {name: 'Men in Black ', key: '5'},
    {name: 'Men in Black 2', key: '6'},
    {name: 'Men in Black 3', key: '7'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={movie}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
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
