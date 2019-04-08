import React, { Component } from 'react';
import {FlatList, View,Text} from 'react-native';
import ContactInfo from './ContactInfo'
import EmployeeMenu from './EmployeeMenu';
import {connect} from 'react-redux';







class ContactList extends Component {
   
    
     renderContact(data){
       
        return <ContactInfo data={data} />
       
    }

    componentDidMount(){
        this.props
    }
   
    render() { 
        console.log(this.props);
        const{library} = this.props.libraries;
        return ( 
       
            <View>
            <View style={{alignSelf:'center',paddingTop:40}}> 
            <EmployeeMenu usersList={library} navigation={this.props.navigation}/>
            </View>
           
       
            <FlatList
            data={library}
            extraData={this.props}
            //the {item} is destructed from the renderItem
            renderItem={({item}) => this.renderContact(item)}
            keyExtractor={libray => libray.id}
            />

       
           
          
            </View>

         );
    }
}
const mapStateToProps = state => {

    return {libraries:state.library}
}

 
export default connect(mapStateToProps)(ContactList);