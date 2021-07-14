/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Button, StyleSheet, Text, Image} from 'react-native';

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
        <View style={{width: 150, height: 130, backgroundColor: 'red'}} />
        <View
          style={{
            width: '100%',
            height: '40%',
            backgroundColor: 'yellow',
            justifyContent: 'center',
          }}>
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
        <View style={{width: '100%', height: '30%', backgroundColor: 'blue',justifyContent: 'center',}}>
        <Image
            source={require('./images/b.jpg')}
            style={{
              width: '90%',
              height: '90%',
              alignSelf: 'center',
              resizeMode: 'cover',
            }}
          />
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
