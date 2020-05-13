import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ReviewDetails(props){
    const {navigation,route} = props
    return (
        <View style={styles.container}>
            <Text>ReviewDetails Screen</Text>
            <Text>{route.params.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
});
