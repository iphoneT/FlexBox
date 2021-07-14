import React from 'react';
import { View,Button,StyleSheet } from 'react-native';

class Mac extends React.Component {

  render() { 
    return (
      <View style={{ flexWrap: 'wrap',flex: 1, justifyContent:'space-between',flexDirection:'column' }}>
<<<<<<< HEAD
        <Text>From Mac testing 4567890</Text>
=======
        <Text>From Mac testing 111</Text>
>>>>>>> 1a1d33afa6db5bcdc8ea491f2fc835bf8f3149a3
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