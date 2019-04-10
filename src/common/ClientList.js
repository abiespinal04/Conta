import React, { Component } from 'react';
import {FlatList,View} from 'react-native';
import ContactInfo from './ContactInfo'
import JSONData from '../reducers/DataList.json'



class ClientList extends Component {
    state = {  }

    handleContact = (item) => {
        console.log(item)
        return <ContactInfo client={item}/>
    }
    render() { 
        const {client} = this.props;
        return ( 
            
         
            <View >
            <FlatList
            data={client}
            extraData={this.props}
            //the {item} is destructed from the renderItem
            renderItem={({item}) => this.handleContact(item)}
            keyExtractor={(item) => item.toString()}
            />
      
           </View>
         );
    }
}
 
export default ClientList;