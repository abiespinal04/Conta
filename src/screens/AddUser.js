import React, { Component } from 'react';
import {Picker,TextInput,Text,View,TouchableOpacity} from 'react-native';
import CardSection from '../common/CardSection'
import Card from '../common/Card'


class AddUser extends Component {
    state = {  }

    static navigationOptions = {
        title: 'User',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

    render() { 
        const{textStyles,containerStyle} = styles;
        return ( 
       
            <Card style={{flex:1}}>
            <View style={containerStyle}>
            <Card>
            <Text style={textStyles}>FirstName</Text>
            <TextInput
            style={{height: 40}}
            placeholder="Enter FirstName"
            onChangeText={(text) => this.setState({text})}
          />
          </Card>
          <Card>
             <Text style={textStyles}>LastName</Text>
             <TextInput
            style={{height: 40}}
            placeholder="Enter LastName"
            onChangeText={(text) => this.setState({text})}
          />
            </Card>
            <Card>
             <Text style={textStyles}>Loan</Text>
             <TextInput
            style={{height: 40}}
            placeholder="Enter loan"
            onChangeText={(text) => this.setState({text})}
          />
            </Card>
            <Card>
            <Picker

  selectedValue={this.state.language}
  style={containerStyle}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Monthly" value="monthly" />
  <Picker.Item label="Weekly" value="weekly" />
</Picker>
</Card>
          </View>
          </Card>

         );
    }
}

const styles={
    textStyles:{
        fontWeight:'bold',
        fontSize:20,
    },
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderColor: '#ddd',
        position: 'relative',
      
     
      }
}
 
export default AddUser;