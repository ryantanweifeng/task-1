/**
 Day 1 task
 - to create a view where user type and print below the fieldText.
 */

import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';

export default function App(){
  const [movie, setMovie] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="e.g Iron Man"
        onChangeText={(val) => setMovie(val)}
        defaultValue={movie}
      />
      <Text>Text shown below:</Text>
      <Text>{movie}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    
  },
  input: {
    borderColor: '#777',
    borderWidth: 1,
    width: 200,
  }
});
