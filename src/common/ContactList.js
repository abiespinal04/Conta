import React, { Component } from 'react';
import {FlatList, View,Text} from 'react-native';
import ContactInfo from './ContactInfo'
import EmployeeMenu from './EmployeeMenu';
import ClientList from './ClientList';
import Icon from "react-native-vector-icons/Ionicons";
import Card from './Card'
import SearchBar from './SearchBar';
import {connect} from 'react-redux';







class ContactList extends Component {
   
   
    //  renderContact(client){
       
    //     return <ContactInfo client={client} />
       
    // }

  
    renderComponent = () => {
        const{client} = this.props;
        // this.renderContact(client);
        // console.log(client);
        return Object.getOwnPropertyNames(client).length === 0?
        <Text style={{paddingTop:50, paddingLeft: 6,paddingRight: 6}}>Click on the  
        + to add a new client :) </Text> : <ClientList client={client}/>
      }
   
    render() { 
       
        const{client} = this.props;
        return ( 
       
           
            <View >
            <SearchBar library={client}/> 
            <View style={{alignSelf:'center',paddingTop:40}}> 
          
            <EmployeeMenu 
            usersList={client} 
            navigation={this.props.navigation}
            />
            

      
            </View>
          
            {this.renderComponent()}
           </View>
          
          

         );
    }
}
const mapDispatchToProps = state => {

    return {client:state.myclient}
}

 
export default connect(mapDispatchToProps)(ContactList);