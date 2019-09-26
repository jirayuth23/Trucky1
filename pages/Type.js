/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View, ScrollView } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
 
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }
 
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <Mytext text="ทราย" />
        <Mybutton
          title="ทรายหยาบ"
          customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mybutton
          title="ทรายหยาบกลาง"
          customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mybutton
          title="ทรายละเอียด"
          customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mybutton
          title="ทรายถม(ทรายขี้เป็ด)"
          customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mytext text="ดิน" />
        <Mybutton
          title="ดินทราย"
          customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mybutton
          title="ดินร่วน"
          customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mybutton
          title="ดินเหนียว"
          customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mybutton
          title="ดินลูกรัง"
          customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mytext text="หิน" />
        <Mybutton
          title="หินคลุก"
          customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mybutton
          title="หินผ่าน"
          customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mybutton
        title="หินเกร็ด"
        customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mybutton
          title="หินฝุ่น"
          customClick={() => this.props.navigation.navigate('ViewAllUser')}
        />
        <Mybutton
          title="หิน1-1"
          customClick={() => this.props.navigation.navigate('')}
        />
        <Mybutton
          title="หิน3สี"
          customClick={() => this.props.navigation.navigate('')}
        />
        <Mybutton
          title="หินใหญ่"
          customClick={() => this.props.navigation.navigate('')}
        />
      </View>
      </ScrollView>
    );
  }
}