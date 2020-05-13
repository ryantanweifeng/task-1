import React , {useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

export default function Home(props){
    const [movie, setMovie] = useState([
        {name: 'Iron Man', key: '1'},
        {name: 'Narnia', key: '2'},
        {name: 'The 3 kingdom', key: '3'},
        {name: 'Fast and Furious', key: '4'},
        {name: 'Men in Black ', key: '5'},
        {name: 'Men in Black 2', key: '6'},
        {name: 'Men in Black 3', key: '7'},
      ]);

     // console.warn(props)

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <FlatList
        data={movie}
        renderItem={({item}) => 
          <View>
            <Text style={styles.item}>{item.name}</Text>
            <Button onPress={() =>
        props.navigation.navigate('Details', { name: item.name })
        } title="Click for more details"></Button>
          </View>}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    padding: 24,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    },
    item: {
        padding: 25,
        fontSize: 24,
        backgroundColor: 'brown',
        marginTop: 15,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
})