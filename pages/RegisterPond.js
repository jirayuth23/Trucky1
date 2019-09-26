/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, Picker, StyleSheet,Text } from 'react-native';
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

export default class RegisterPond extends React.Component {
  state = {department: ''}
   updateDepartment = (department) => {
      this.setState({ department: department })
   }

  constructor(props) {
    super(props);
    this.state = {
        user_contect: '',
      user_price: '',
      
      user_type: '',
      user_pond: '',
      user_addresspond: '',
     
      

    };
  }
  register_pond = () => {
    var that = this;
    const { user_type } = this.state;
    const { user_contect } = this.state;
    const { user_pond } = this.state;
    
    const { user_addresspond } = this.state;
    const { user_price } = this.state;
    //alert(user_name, user_lastname, user_contact, user_address, user_bod);
    
           if (user_type) {
            if (user_pond) {
              if (user_addresspond) {
                if (user_price) {
               
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO table_user (user_price, user_type, user_pond, user_addresspond) VALUES (?,?,?,?)',
              [user_price, user_type, user_pond, user_addresspond],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('Edit'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Registration Failed');
                  }
                
              }
            );
          });
       
        } else {
        alert('ราคา');
        }
        } else {
          alert('ใส่ที่อยู่บ่อ,โรงโม่,ลาน');
        }
        } else {
          alert('ใส่ชื่อบ่อ,โรงโม่,ลาน');
        }
      } else {
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
            <View>
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
            
         </View>

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
              placeholder="ราคาคิวละ"
              onChangeText={user_price => this.setState({ user_price })}
              style={{ padding:10 }}
            />
            
            
            <Mybutton
              title="Submit"
              customClick={this.register_pond.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}