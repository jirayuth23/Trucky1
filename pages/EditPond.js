/*Screen to update the user*/
import React from 'react';
import { View, YellowBox, ScrollView, KeyboardAvoidingView, Alert, Picker, StyleSheet,Text,Switch } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
 
const styles = StyleSheet.create({
  text: {
     fontSize: 20,
     alignSelf: 'center',
     color: 'red'
  }
})



export default class UpdateUser extends React.Component {
  state = {department: ''}
  updateDepartment = (department) => {
     this.setState({ department: department })
  }

  constructor(props) {
    super(props);
    this.state = {
      user_type: '',
      user_pond: '',
      user_addresspond: '',
     
    },super();
    this.state = {
       switch1Value: false,
    };
  }
  toggleSwitch1 = (value) => {
    this.setState({switch1Value: value})
 }
  searchUser = () => {
    
    
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
       
        (tx, results) => {
          var len = results.rows.length;
          console.log('len',len);
          if (len > 0) {
            console.log(results.rows.item(0).user_contact);
            this.setState({
             user_name:results.rows.item(0).user_name,
            });
            this.setState({
              user_bod:results.rows.item(0).user_type,
             });
             this.setState({
              user_bod:results.rows.item(0).user_pond,
             });
             this.setState({
              user_bod:results.rows.item(0).user_addresspond,
             });
            
          }else{
           
            this.setState({
              user_type: '',
              user_pond: '',
              user_addresspond: '',
              
            });
          }
        }
      );
    });
  };
  updateUser = () => {
    var that=this;
   
    
    const { user_type } = this.state;
    const { user_pond } = this.state;
    const { user_addresspond } = this.state;
    const { user_price } = this.state;
    
    
    if (user_type){
        if (user_pond) {
        if (user_addresspond) {
          if (user_price) {
                
          db.transaction((tx)=> {
            tx.executeSql(
              'UPDATE table_user set user_type=? where user_contact=?',
              [user_type, user_pond, user_addresspond],
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
        } else {
          alert('ราคา');
        }
        } else {
          alert('ที่อยู่');
        }
        } else {
          alert('ใส่ชื่อบ่อ,โรงโม่,ลาน');
        }
        }else{
          alert('ประเภท');
        }
     
      
  };
 
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            
            
            <Picker selectedValue = {this.state.department} onValueChange = {this.updateDepartment}>
               <Picker.Item label = "ประเภท" value = "ประเภท" />
               <Picker.Item label = "ทรายหยาบ" value = "ทรายหยาบ"  />
               <Picker.Item label = "ทรายหยาบกลาง"value = "ทรายหยาบกลาง"  />
               <Picker.Item label = "ทรายละเอียด" value = "ทรายละเอียด" />
               <Picker.Item label = "ทรายถม(ทรายขี้เป็ด"value = "ทรายถม(ทรายขี้เป็ด"  />
               <Picker.Item label = "ดินทราย" value = "ดินทราย" />
               <Picker.Item label = "ดินร่วน" value = "ดินร่วน" />
               <Picker.Item label = "ดินเหนียว" value = "ดินเหนียว" />
               <Picker.Item label = "ดินลูกรัง" value = "ดินลูกรัง" />
               <Picker.Item label = "หินคลุก" value = "หินคลุก" />
               <Picker.Item label = "หินผ่าน" value = "หินผ่าน" />
               <Picker.Item label = "หินหินเกร็ด" value = "หินหินเกร็ด" />
               <Picker.Item label = "หินฝุ่น" value = "หินฝุ่น" />
               <Picker.Item label = "หิน1-1" value = "หิน1-1" />
               <Picker.Item label = "หิน3สี" value = "หิน3สี" />
               <Picker.Item label = "หินใหญ่" value = "หินใหญ่" />
               
            </Picker>
            

            
            
            <Mytextinput
              placeholder="ประเภท"
              onChangeText={user_type => this.setState({ user_type})}
              maxLength={20}
              numberOfLines={1}
              multiline={true}
              style={{ textAlignVertical: 'top',padding:10 }}
            />
            <Mytextinput
              placeholder="ใส่ชื่อบ่อ,โรงโม่,ลาน"
              onChangeText={user_pond => this.setState({ user_pond})}
              maxLength={20}
              numberOfLines={1}
              multiline={true}
              style={{ textAlignVertical: 'top',padding:10 }}
            />
            <Mytextinput
              placeholder="ใส่ที่อยู่บ่อ,โรงโม่,ลาน"
              onChangeText={user_addresspond => this.setState({ user_addresspond})}
              maxLength={20}
              numberOfLines={1}
              multiline={true}
              style={{ textAlignVertical: 'top',padding:10 }}
            />
            <Mytextinput
              placeholder="ราคา"
              onChangeText={user_price => this.setState({ user_price})}
              maxLength={20}
              numberOfLines={1}
              multiline={true}
              style={{ textAlignVertical: 'top',padding:10 }}
            />
                 
            <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text>Open/Close</Text>
            <Switch onValueChange = {this.toggleSwitch1} value = {this.state.switch1Value}/>
            </View>

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