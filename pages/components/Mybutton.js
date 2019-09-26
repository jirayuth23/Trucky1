/*Custom Button*/
import React from 'react';
import AwesomeButton from "react-native-really-awesome-button/src/themes/c137";
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const Mybutton = props => {
  return (
    <View style={styles.container}>
    <AwesomeButton style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </AwesomeButton>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
   
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
  text: {
    color: '#ffffff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
export default Mybutton;