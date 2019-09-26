/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' }); 
export default class ViewAllUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.user_id} style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>บ่อ: {item.user_pond}</Text>
              <Text>ชื่อ: {item.user_name}</Text>
              <Text>เบอร์ติดต่อ: {item.user_contact}</Text>
              <Text>สถานที่: {item.user_addresspond}</Text>
              <Text>ราคา: {item.user_price}</Text>
              <Mybutton
              title="Location"
              customClick={() => this.props.navigation.navigate('web')}
              />
            </View>
          )}
        />
        
      </View>
    );
  }
}