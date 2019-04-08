import React, { Component } from 'react';
import {Modal,View,Text,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {connect} from 'react-redux';
import * as actions from '../actions'


class EmployeeMenu extends Component {
    state = { modalVisible: false }


    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    handleUser = (usersList) => {
        

        this.props.addUser(usersList)

        const newUsersList = [...usersList];
        newUsersList[0].title = 'Abi';

    }    
    render() { 
        const handleName = () => {
        
        }
        const {EmployeeMenu,EmployeeView} = styles
        const {usersList} = this.props;
        return ( 
            <View style={EmployeeView}>
          
                <Text style={EmployeeMenu}>
                Client
                </Text>
                <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Details')}
                >
               <Icon
                name="ios-add-circle"
           
                size={25}
                />
                </TouchableOpacity>
              
            </View>

         );
        
    }


}

 
const styles={
    EmployeeMenu:{
        fontWeight:'bold',
        fontSize:20,
        alignSelf:'center',
        shadowOpacity:.2,
        elevation:5,
        paddingLeft: 5,
        paddingRight: 320
        
    },
    EmployeeView:{
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        alignSelf:'center',
        flex:1,
        flexDirection: 'row',
        direction:'ltr',
        position:'absolute',
        shadowRadius:6,
        elevation:5,
        width:'100%',
        
    }
}

const mapStateToProps = (state,onwProps) => {

    

    return{user:state.user}

}
 
export default connect(mapStateToProps,actions)(EmployeeMenu);