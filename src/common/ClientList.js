import React, { Component } from 'react';
import {FlatList,View} from 'react-native';
import ContactInfo from './ContactInfo'
import JSONData from '../reducers/DataList.json'


class ClientList extends Component {
    state = {  }

    handleContact = (item) => {

        return <ContactInfo data={item}/>
    }
    render() { 
        const {library} = this.props;
        return ( 
            
         
            <View >
            <FlatList
            data={library}
            extraData={this.props}
            //the {item} is destructed from the renderItem
            renderItem={({item}) => this.handleContact(item)}
            keyExtractor={library => library.id}
            />
           </View>
         );
    }
}
 
export default ClientList;