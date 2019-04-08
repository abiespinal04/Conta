import React, { Component } from 'react';
import {FlatList, View,Text} from 'react-native';
import ContactInfo from './ContactInfo'
import EmployeeMenu from './EmployeeMenu';
import ClientList from './ClientList';
import Icon from "react-native-vector-icons/Ionicons";
import {connect} from 'react-redux';







class ContactList extends Component {
   
    
     renderContact(data){
       
        return <ContactInfo data={data} />
       
    }

  
    renderComponent = () => {
        
        return this.props.libraries !== null?
        <Text style={{paddingTop:50, paddingLeft: 6,paddingRight: 6}}>Click on the  
        + to add a new client :) </Text>: <ContactInfo data={this.props.libraries}/>
      }
   
    render() { 
        console.log(this.props);
        const{library} = this.props.libraries;
        return ( 
       
            <View>
            <View style={{alignSelf:'center',paddingTop:40}}> 
            <EmployeeMenu 
            usersList={library} 
            navigation={this.props.navigation}
            />
            {this.renderComponent()}
            </View>
      
       
          <ClientList 
          library={library}
          renderContact={this.renderContact}
          />

       
           
          
            </View>

         );
    }
}
const mapStateToProps = state => {

    return {libraries:state.library}
}

 
export default connect(mapStateToProps)(ContactList);