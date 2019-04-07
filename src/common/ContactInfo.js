import React, { Component } from 'react';
import {View,TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';




class ContactInfo extends Component {
    state = {  }
    render() { 
        const {ContactInfo} = styles;
        return ( 

            <TouchableOpacity>
            <View>
                <Text style={ContactInfo}>{this.props.data.title} </Text>
            </View>
            </TouchableOpacity>
         );
    }
}

const styles = {
    ContactInfo: {
        fontSize: 15,
        fontWeight: 'bold'
    }

}



const mapStateToProps = (state,onwProps) => {

    

    return{user:state.user}

}
 
export default connect(mapStateToProps)(ContactInfo);