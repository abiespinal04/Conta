import React, { Component } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';


class EmployeeMenu extends Component {
    state = {  }
    render() { 
        const {EmployeeMenu,EmployeeView} = styles
        return ( 

            <View style={EmployeeView}>
                <Text style={EmployeeMenu}>
                    EMPLOYEE
                </Text>
                <TouchableOpacity>
                <Text style={{fontSize:30}}>+</Text>
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
        paddingRight: 280
        
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
        width:'100%'
    }
}
export default EmployeeMenu;