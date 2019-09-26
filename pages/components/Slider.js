import React, { Component } from 'react';
import { View, Text, Slider} from 'react-native'

export default class SliderExample extends Component {
   state = {price: ''}
   updatePrice = (price) => {
      this.setState({ price: price*100 })
   }
   render() {
      return (
         <View>
            <Slider onValueChange = {this.updatePrice} />
            <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price}</Text>
         </View>
      )
   }
}
