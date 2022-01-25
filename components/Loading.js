import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Loading...
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
       justifyContent: 'flex-end',
       paddingHorizontal: 30,
       paddingVertical: 100,
       backgroundColor: 'lightblue',
    },
    text: {
        fontSize: 30,
        color: '#2c2c2c'
    }
  });