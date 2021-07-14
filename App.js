/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, Image} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View
            style={{
              flexWrap: 'wrap',
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}>
            <View
              style={{
                width: '100%',
                flex: 1,
                backgroundColor: 'red',
                justifyContent: 'center',
              }}>
              <Image
                source={require('./images/c.png')}
                style={{
                  width: '90%',
                  height: '90%',
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View
              style={{
                width: '100%',
                flex: 1,
                backgroundColor: 'white',
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
            <View
              style={{
                width: '100%',
                flex: 1,
                backgroundColor: 'blue',
                justifyContent: 'center',
              }}>
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
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  ButtonStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default App;
