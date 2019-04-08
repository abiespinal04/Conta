import React, { Component } from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers'
 import {createAppContainer,createStackNavigator} from 'react-navigation'
import Home from './src/common/Home'
import AddUser from './src/screens/AddUser'



const stack = createStackNavigator({
  Home: {screen:Home},
  Details: AddUser,
}
,
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(stack);

class App extends Component {


  
  render() { 
    return ( 
    
    
    <AppContainer/>
    
     );
  }
}

export default App;
