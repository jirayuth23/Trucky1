/*Screen to view single user*/
import React from 'react';
import { Text, View, Button } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' }); 
export default class ViewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_contact: '',
      userData: '',
    };
  }
  
  render() {
    return (
      <View>
        <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
          <Text>User Name: {this.state.userData.user_name}</Text>
          
          <Text>User Contact: {this.state.userData.user_contact}</Text>
          <Text> Type: {this.state.userData.user_type}</Text>
          <Text> Pond: {this.state.userData.user_pond}</Text>
          <Text>User AddressPond: {this.state.userData.user_addresspone}</Text>
          <Text> price: {this.state.userData.user_price}</Text>
          
        </View>
      </View>
    );
  }
}