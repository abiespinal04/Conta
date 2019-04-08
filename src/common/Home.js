import React, { Component } from 'react';
import {View,Text} from 'react-native';
import ContactList from './ContactList';
import EmployeeMenu  from './EmployeeMenu';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers'





class Home extends Component {
    state = {  }

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
   
    render() { 

        return ( 
    <Provider store={createStore(reducers)}>
    
    
    <ContactList navigation={this.props.navigation}/>
      
 
      </Provider>
        
         );
    }

 
}

 
export default Home;