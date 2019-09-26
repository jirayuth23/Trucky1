import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Edit from './pages/Edit';
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'blue' }]} />
  
);
 
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'blue' }]} />
  
    
);
 
export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'MainManu' },
      { key: 'second', title: 'Edit' },
    ],
  };
 
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});