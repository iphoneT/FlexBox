/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View,Button,StyleSheet } from 'react-native';

class App extends React.Component {

  render() {
    return (
      <View style={{ flexWrap: 'wrap',flex: 1, justifyContent:'space-between',flexDirection:'column' }}>
        <View style={{ width:120,height:120, backgroundColor:'red'}} ></View>
        <View style={{ width:120,height:120, backgroundColor:'orange'}} ></View>
        <View style={{ width:120,height:120, backgroundColor:'blue'}} ></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ButtonStyle: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})
export default App;