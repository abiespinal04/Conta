import React, { Component } from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers'
 import {createAppContainer,createStackNavigator} from 'react-navigation'
import Home from './src/common/Home'



const stack = createStackNavigator({
  Home: Home
})



class App extends Component {


  
  render() { 
    return ( 
    
    
      <Home/>
    
     );
  }
}
 App = stack;
export default createAppContainer(App);