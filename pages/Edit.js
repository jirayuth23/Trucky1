/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
 
export default class Edit extends React.Component {
  
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
       
        <View style={{flex: 1,justifyContent: 'flex-start',}}>
          
        <Mybutton
          title="ViewAll "
          customClick={() => this.props.navigation.navigate('Type')}
        />
        <Mybutton
          title="ViewUser"
          customClick={() => this.props.navigation.navigate('ViewUser')}
        />
        <Mybutton
          title="EditProfile"
          customClick={() => this.props.navigation.navigate('UpdateUser')}
        />
        <Mybutton
          title="RegisterPond"
          customClick={() => this.props.navigation.navigate('RegisterPond')}
        />
        <Mybutton
          title="EditPond"
          customClick={() => this.props.navigation.navigate('EditPond')}
        />
        <Mybutton
          title="Lockout"
          customClick={() => this.props.navigation.navigate('HomeScreen')}
        />
        </View>
      </View>
      
    );
  }
}