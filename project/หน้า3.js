import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class ISection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:40}}>ประเภท</Text>
        <SectionList
          sections={[
            {title: 'ดิน', data: ['ดินทราย', 'ดินร่วน', 'ดินเหนียว', 'ดินลูกรัง']},
            {title: 'หิน', data: [ 'หินคลุก','หินผ่าน', 'หินเกร็ด', 'หินฝุ่น', 'หิน3สี', 'หิน1-1', 'หินใหญ่']},
            {title: 'ทราย', data: [ 'ทรายหยาบ','ทรายหยาบกลาง', 'ทรายละเอียด', 'ทรายถม(ทรายขี้เป็ด)']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 26,
      fontWeight: 'bold',
      backgroundColor: 'blue',
    },
    item: {
      padding: 10,
      fontSize: 20,
      height: 44,
    },
  })
  