import React, { Component } from 'react';
import {DatePickerIOS,Picker,TextInput,Text,View,TouchableOpacity} from 'react-native';
import CardSection from '../common/CardSection'
import Card from '../common/Card'


class AddUser extends Component {
    state = { 
    chosenDate: new Date()
     }

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

      setDate =(newDate) =>  {
        this.setState({chosenDate: newDate});
      }

    render() { 
        const{textStyles,containerStyle,combinedText} = styles;
        return ( 
       
            <Card>
            <View style={containerStyle}>
            <Card>
            <View style={combinedText}>
            <Text style={textStyles}>FirstName</Text>
            </View>
            <TextInput
            style={{height: 40}}
            placeholder="Enter FirstName"
            onChangeText={(text) => this.setState({text})}
          />
          </Card>
          <Card>
          <View style={combinedText}>
             <Text style={textStyles}>LastName</Text>
             </View>
             <TextInput
            style={{height: 40}}
            placeholder="Enter LastName"
            onChangeText={(text) => this.setState({text})}
          />
            </Card>
            <Card>
            <View style={combinedText}>
             <Text style={textStyles}>Loan Details</Text>
          </View>
         
          <TextInput
            style={{height: 40}}
            placeholder="Enter loan"
            onChangeText={(text) => this.setState({text})}
          />
           <TextInput
            style={{height: 40}}
            placeholder="Loan Interest"
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

          <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={(newDate)=> this.setDate(newDate)}
        />

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
      
     
      }, 
      combinedText:{
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
      }
}
 
export default AddUser;