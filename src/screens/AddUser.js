import React, { Component } from 'react';
import {ScrollView,DatePickerIOS,Picker,TextInput,Text,View,TouchableOpacity} from 'react-native';
import CardSection from '../common/CardSection';
import Card from '../common/Card';
import {connect} from 'react-redux';
import * as actions from '../actions';


class AddUser extends Component {
    state = { 
    startDate: new Date(),
    endDate: new Date(),
    client: [{
      firstName:'',
      lastName:'',
      }]
    
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

      handleSummit = (client) => {
        this.props.AddClient(client)
      }
      setStartDate =(newDate) =>  {
        this.setState({startDate: newDate});
      }
      setEndDate =(newDate) =>  {
        this.setState({endDate: newDate});
      }

      handleTextInputFN = (text,obj) => {
        const newClient = [...this.state.client];
        newClient[0].firstName = text;
        this.setState({client: [...this.state.client], ...newClient})
      }
      handleTextInputLN = (text) => {
        const newClient = [...this.state.client];
        newClient[0].lastName = text;
        this.setState({client:newClient});
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
            onChangeText={(firstName) => this.handleTextInputFN(firstName,this.state.client[0])}
          />
          </Card>
          <Card>
          <View style={combinedText}>
             <Text style={textStyles}>LastName</Text>
             </View>
             <TextInput
            style={{height: 40}}
            placeholder="Enter LastName"
            onChangeText={(lastName) => this.handleTextInputLN(lastName)}
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
                <TouchableOpacity
                onPress={()=>this.handleSummit(this.state.client)}
                >
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

const mapStateToProps = (state) => {


  return {client: state.myclient}
}
 
export default connect(mapStateToProps,actions)(AddUser);