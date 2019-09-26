/*Screen to update the user*/
import React from 'react';
import { View, YellowBox, ScrollView, KeyboardAvoidingView, Alert, } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
 
export default class TestUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_user_contact: '',
      user_name: '',
      user_contact: '',
      user_address: '',
      user_password: '',
    };
  }
  searchUser = () => {
    const {input_user_contact} =this.state;
    console.log(this.state.input_user_id);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user where user_contact = ?',
        [input_user_contact],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len',len);
          if (len > 0) {
            console.log(results.rows.item(0).user_contact);
            this.setState({
             user_name:results.rows.item(0).user_name,
            });
            this.setState({
             user_contact:results.rows.item(0).user_contact,
            });
            this.setState({
             user_address:results.rows.item(0).user_address,
            });
            this.setState({
              user_password:results.rows.item(0).user_password,
             });
          }else{
            alert('No user found');
            this.setState({
              user_name:'',
              user_contact:'',
              user_address:'',
              user_password:'',
            });
          }
        }
      );
    });
  };
  updateUser = () => {
    var that=this;
    const { input_user_contact } = this.state;
    const { user_name } = this.state;
    const { user_contact } = this.state;
    const { user_address } = this.state;
    const { user_password} = this.state;
    if (user_name){
      if (user_contact){
        if (user_address){
          if (user_password){
          db.transaction((tx)=> {
            tx.executeSql(
              'UPDATE table_user set user_name=?, user_contact=? , user_address=? , user_password=? where user_contact=?',
              [user_name, user_contact, user_address, user_password, input_user_contact],
              (tx, results) => {
                console.log('Results',results.rowsAffected);
                if(results.rowsAffected>0){
                  Alert.alert( 'Success', 'User updated successfully',
                    [
                      {text: 'Ok', onPress: () => that.props.navigation.navigate('HomeScreen')},
                    ],
                    { cancelable: false }
                  );
                }else{
                  alert('Updation Failed');
                }
              }
            );
          });
        }else{
          alert('Please fill Password');
        }
        }else{
          alert('Please fill Address');
        }
      }else{
        alert('Please fill Contact Number');
      }
    }else{
      alert('Please fill Name');
    }
  };
 
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Enter Contact"
              style={{ padding:10 }}
              onChangeText={input_user_contact => this.setState({ input_user_contact })}
            />
            <Mybutton
              title="Search User"
              customClick={this.searchUser.bind(this)}
            />
            <Mytextinput
              placeholder="Enter Name"
              value={this.state.user_name}
              style={{ padding:10 }}
              onChangeText={user_name => this.setState({ user_name })}
            />
            <Mytextinput
              placeholder="Enter Contact No"
              value={''+ this.state.user_contact}
              onChangeText={user_contact => this.setState({ user_contact })}
              maxLength={10}
              style={{ padding:10 }}
              keyboardType="numeric"
            />
            <Mytextinput
              value={this.state.user_address}
              placeholder="Enter Address"
              onChangeText={user_address => this.setState({ user_address })}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{textAlignVertical : 'top', padding:10}}
            />
            <Mytextinput
              value={this.state.user_password}
              placeholder="Enter password"
              onChangeText={user_password => this.setState({ user_password })}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{textAlignVertical : 'top', padding:10}}
            />
            <Mybutton
              title="Update User"
              customClick={this.updateUser.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}