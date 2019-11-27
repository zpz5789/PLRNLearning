import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class MyLayout extends Component {
  static navigationOptions = {
    title: '布局练习',
    headerStyle: {
      backgroundColor: '#fab',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };

  render() {
    {
      /*

    */
    }
    return (
      <View style={{flex: 1, justifyContent: 'center',alignItems:'center'}}>
        <Text>布局页</Text>
      </View>
    );
  }
}
