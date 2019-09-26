import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

class IScroll extends Component {
   state = {
      names: [
         {'name': 'บ่อ1', 'id': 1},
         {'name': 'บ่อ2', 'id': 2},
         {'name': 'บ่อ3', 'id': 3},
         {'name': 'บ่อ4', 'id': 3},
         {'name': 'บ่อ5', 'id': 3},
         {'name': 'บ่อ6', 'id': 3},
      ]
   }
   render() {
      return (
         <View>
            <Text style={{fontSize:40}}>ดินลูกรัง</Text>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                        <Text key = {item.id} style = {styles.item}>{item.name}</Text>                     
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default IScroll

const styles = StyleSheet.create ({
  item: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: 30,
     margin: 2,
     borderColor: '#2a4944',
     borderWidth: 1,
     backgroundColor: '#d2f7f1'
  }
})
