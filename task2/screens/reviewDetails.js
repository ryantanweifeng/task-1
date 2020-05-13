import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ReviewDetails(props){
    const {navigation,route} = props
    return (
        <View style={styles.container}>
            <Text>ReviewDetails Screen</Text>
            <Text>{route.params.name}</Text>
            <Image source={{uri: 'https://dwxbwps5boihg.cloudfront.net/topic/post_picture/11568/cafe_1200x628_large.jpg'}}
       style={{width: 400, height: 400}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
});
