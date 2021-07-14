import React from 'react';
import { View,Button,StyleSheet } from 'react-native';

class Mac extends React.Component {

  render() {
    return (
      <View style={{ flexWrap: 'wrap',flex: 1, justifyContent:'space-between',flexDirection:'column' }}>
        <Text>From Mac testing 111</Text>
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
export default Mac;