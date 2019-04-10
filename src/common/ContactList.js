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
        const{textStyle} = styles
        // this.renderContact(client);
        // console.log(client);
        return Object.getOwnPropertyNames(client).length === 0?
        <Text style={textStyle}>Click on the  
        + to add a new client :) </Text> : <ClientList client={client}/>
      }
   
    render() { 
       
        const{client} = this.props;
        return ( 
       
           
            <View >
          
            <View style={{alignSelf:'center',paddingTop:35}}> 
          
            <EmployeeMenu 
            usersList={client} 
            navigation={this.props.navigation}
            />
             <SearchBar library={client}/> 
      
            </View>
           
          
            {this.renderComponent()}
           </View>
          
          

         );
    }
}
const styles = {
    textStyle:{
        alignSelf:'center', 
        fontSize: 20,
        paddingTop:80, 
        paddingLeft: 6,
        paddingRight: 6
    }
}
const mapDispatchToProps = state => {

    return {client:state.myclient}
}

 
export default connect(mapDispatchToProps)(ContactList);