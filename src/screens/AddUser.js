import React, { Component } from 'react';
import {ScrollView,DatePickerIOS,Picker,TextInput,Text,View,TouchableOpacity} from 'react-native';
import CardSection from '../common/CardSection'
import Card from '../common/Card'


class AddUser extends Component {
    state = { 
    startDate: new Date(),
    endDate: new Date(),
    
    
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

      setStartDate =(newDate) =>  {
        this.setState({startDate: newDate});
      }
      setEndDate =(newDate) =>  {
        this.setState({endDate: newDate});
      }
    render() { 
        const{textStyles,containerStyle,combinedText,textStylesCenter} = styles;
        return ( 
       
            <ScrollView 
            bounces={true}
             >
            <View style={containerStyle}>
            <Card>
            <View style={containerStyle} >
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
            <Text style={textStylesCenter}>QUOTA</Text>
        <Picker
            selectedValue={this.state.language}
        
            onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
            }>
        <Picker.Item label="Daily" value="daily" />
        <Picker.Item label="Weekly" value="weekly" />
        <Picker.Item label="Bi-Weekly" value="bi-weekly" />
        <Picker.Item label="Monthly" value="monthly" />
        <Picker.Item label="Yearly" value="yearly" />
        </Picker>
        </Card>
        <Card>
        <Text style={textStylesCenter}>Start</Text>
       
          <DatePickerIOS
          date={this.state.startDate}
          mode={'date'}
          onDateChange={(newDate)=> this.setStartDate(newDate)}
          
        />

        </Card>

        <Card>
        <Text style={textStylesCenter}>End</Text>
       
          <DatePickerIOS
          date={this.state.endDate}
          mode={'date'}
          onDateChange={(newDate)=> this.setEndDate(newDate)}
          
        />

        </Card>
          </View>
          </Card>

      
        

        <View style={{alignSelf:'center'}}>
                <TouchableOpacity>
                    <Text style={textStylesCenter}>Summit</Text>
                </TouchableOpacity>
        </View>
          
        </View>

        </ScrollView>
         );
    }
}

const styles={
    textStyles:{
        fontWeight:'bold',
        fontSize:20,
    },
    textStylesCenter:{
        fontWeight:'bold',
        fontSize:20,
        alignSelf:'center'
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