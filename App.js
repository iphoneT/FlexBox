/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flexWrap: 'wrap',
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}>
<<<<<<< HEAD
        <View style={{width: 150, height: 130, backgroundColor: 'red'}} />
        <View
          style={{
            width: '100%',
            height: '40%',
            backgroundColor: 'yellow',
            justifyContent: 'center',
          }}>
=======
        <View style={{ width: 150, height: 130, backgroundColor: 'red' }} />
        <View style={{ width: 130, height: 140, backgroundColor: 'yellow' }}>
>>>>>>> 46b36643870de3555b5b24a846c472b19b479ca5
          <Image
            source={require('./images/a.jpeg')}
            style={{
              width: '90%',
              height: '90%',
              alignSelf: 'center',
              resizeMode: 'cover',
            }}
          />
        </View>
<<<<<<< HEAD
        <View style={{width: 200, height: 200, backgroundColor: 'blue'}}>
=======
        <View style={{ width: 200, height: 200, backgroundColor: 'blue' }}>
>>>>>>> 46b36643870de3555b5b24a846c472b19b479ca5
          <Image source={require('./images/b.jpg')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ButtonStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default App;
