import React, { Component } from 'react'
import { View, Switch, Text } from 'react-native'

export default class ISwitch extends Component {
   constructor() {
      super();
      this.state = {
         switch1Value: false,
      }
   }
   toggleSwitch1 = (value) => {
      this.setState({switch1Value: value})
   }
   render() {
      return (
         <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
            <Text>Switch 1</Text>
            <Switch onValueChange = {this.toggleSwitch1} value = {this.state.switch1Value}/>
            <Text style = {{fontSize: 30, color: 'red'}}>Switch 1 is {this.state.switch1Value*1}</Text>
         </View>
      );
   }
}
