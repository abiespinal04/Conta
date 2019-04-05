import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';



class ContactInfo extends Component {
    state = {  }
    render() { 
        return ( 

            <View>
                <Text> </Text>
            </View>
         );
    }
}
const mapStateToProps = (state,onwProps) => {

    

    return{}

}
 
export default connect(mapStateToProps)(ContactInfo);