/*Example of SQLite Database in React Native*/
import React from 'react';
//For React Navigation Version 2+
//import {createStackNavigator} from 'react-navigation';
//For React Navigation Version 3+
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './pages2222/HomeScreen';
import RegisterUser from './pages2222/RegisterUser';
import UpdateUser from './pages2222/UpdateUser';
import ViewUser from './pages2222/ViewUser';
import ViewAllUser from './pages2222/ViewAllUser';
import Type from './pages2222/Type';
import Guest from './pages2222/Guest';
import Edit from './pages2222/Edit';
import EditPond from './pages2222/EditPond';
import web from './pages2222/web';
import TestUpdate from './pages2222/TestUpdate';
import Login from './pages2222/Login';
import RegisterPond from './pages2222/RegisterPond';

 
const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    
  },
  ViewUser: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  ViewAllUser: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'สถานที่',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  UpdateUser: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Edit&View',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  
  },
  Type: {
    screen: Type,
    navigationOptions: {
      title: 'ประเภท',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  
  },
  Guest: {
    screen: Guest,
    navigationOptions: {
      title: 'Guest',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  
  Edit: {
    screen: Edit,
    navigationOptions: {
      title: 'Edit&View',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  EditPond: {
    screen: EditPond,
    navigationOptions: {
      title: 'EditPond',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  RegisterPond: {
    screen: RegisterPond,
    navigationOptions: {
      title: 'RegisterPond',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
  
  web: {
    screen: web,
    navigationOptions: {
      title: 'Location',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },

  TestUpdate: {
    screen: TestUpdate,
    navigationOptions: {
      title: 'TestUpdate',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
 
  /*
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  }, */
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#0099CC',
    },
  },
 

  
});
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);