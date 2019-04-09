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
   
    
     renderContact(data){
       
        return <ContactInfo data={data} />
       
    }

  
    renderComponent = () => {
        const{library} = this.props.libraries;
        return library === null?
        <Text style={{paddingTop:50, paddingLeft: 6,paddingRight: 6}}>Click on the  
        + to add a new client :) </Text> : <ClientList library={library}/>
      }
   
    render() { 
        console.log(this.props);
        const{library} = this.props.libraries;
        return ( 
       
           
            <View >
            <SearchBar library={library}/> 
            <View style={{alignSelf:'center',paddingTop:40}}> 
          
            <EmployeeMenu 
            usersList={library} 
            navigation={this.props.navigation}
            />
            

      
            </View>
          
            {this.renderComponent()}
      
           
           </View>
          
          

         );
    }
}
const mapStateToProps = state => {

    return {libraries:state.library}
}

 
export default connect(mapStateToProps)(ContactList);