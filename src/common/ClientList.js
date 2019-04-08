import React, { Component } from 'react';
import {FlatList} from 'react-native';


class ClientList extends Component {
    state = {  }

    handleContact = () => {

    }
    render() { 
        const {library,renderContact} = this.props;
        return ( 
            
            <FlatList
            data={library}
            extraData={this.props}
            //the {item} is destructed from the renderItem
            renderItem={({item}) => renderContact}
            keyExtractor={libray => libray.id}
            />
         );
    }
}
 
export default ClientList;