import React, { Component } from 'react';
import {FlatList, View,Text} from 'react-native';
import ContactInfo from './ContactInfo'
import EmployeeMenu  from './EmployeeMenu';


class ContactList extends Component {
    state = {  }

     renderContact = (contact) => {

        <ContactInfo contact={contact} />
    }
    render() { 
        return ( 
            <View>
            <FlatList
            data={this.props.contact}
            renderItem={({item}) => this.renderContact(item)}
            keyExtractor={contact => contact.id}
            />
            <EmployeeMenu/>
            </View>

         );
    }
}
 
export default ContactList;