import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppRegistry, Image } from 'react-native';

const instructions = Platform.select({
  
});
class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.instructions}>Hello {this.props.name}!</Text>
      </View>
    );
  }
}
export default class App extends Component {
  render() {
    let pic = {
          uri: 'https://www.img.in.th/images/e0ccad25b4b034f469b3a51b93823b80.png'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>TRUCKY</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image source={pic} style={{width: 300, height: 300}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
  },
});

