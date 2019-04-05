import React, { Component } from 'react';
import {View,Text} from 'react-native';
import ContactList from './ContactList'




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
            <ContactList/>
         );
    }
}
 
export default Home;