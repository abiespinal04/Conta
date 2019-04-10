import React, { Component } from 'react';
import {TextInput,View} from 'react-native';


const handleEditable = (props) => {
    
    return props.library === null ? false : true;
    }

const SearchBar = (props) => {
    return ( 
        <View style={{alignSelf:'center',paddingBottom:10}}>
        <TextInput
        placeholder='Search'
        style={{height: 40,width:230, borderColor: 'gray', borderWidth: 1}}
        editable = {handleEditable(props)}
        maxLength = {20}
        />
        </View>
     );
}
 
export default SearchBar;  