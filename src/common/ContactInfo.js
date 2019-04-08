import React, { Component } from 'react';
import {View,TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import CardSection from './CardSection';
import Card from './Card'




class ContactInfo extends Component {
    state = {  }
    render() { 
        const {ContactInfo} = styles;
        return ( 

            <CardSection>
            <TouchableOpacity>
            <View>
                <Text style={ContactInfo}>{this.props.data.title} </Text>
            </View>
            </TouchableOpacity>
            </CardSection>
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