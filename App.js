/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

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
        <View style={{width: 150, height: 130, backgroundColor: 'red'}}></View>
        <View
          style={{width: 130, height: 130, backgroundColor: 'orange'}}></View>
        <View style={{width: 200, height: 200, backgroundColor: 'blue'}}></View>
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
