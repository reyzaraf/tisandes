/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions,Alert,ImageBackground} from 'react-native';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class RegisterForm extends Component{
  constructor(){
    super();
    this.state={
      tempUsername:'',
      tempPassword:''
    }
  }
  fungsiCekValue(){
    Alert.alert(this.state.tempUsername, this.state.tempPassword);
  }
  render() {
    return (
      <ImageBackground
      style={{width:width/1,height:height/2}}
      source={require('../assets/bgsignup.png')}
      >
      <View style={{width:width/1, height:height/1, justifyContent:'center', alignItems:'center', }}>
        <Text style={{ fontSize:width/12, }}>
            T I S A N D E
        </Text>
        <View style={{
          justifyContent:'center',
          width:width/1.2,
          height:height/10,
          backgroundColor:'#c5cae9',
          borderRadius:width/20}}>
          <TextInput 
          style={{fontSize:width/20,textAlign:'center'}}
          placeholder={ 'Username' }
          onChangeText={(username)=>this.setState({tempUsername:username})}
           />
        </View>
        <View style={{
          justifyContent:'center',
          width:width/1.2,
          height:height/10,
          marginTop:width/25,
          backgroundColor:'#c5cae9',
          borderRadius:width/20}}>
          <TextInput
          style={{fontSize:width/20,textAlign:'center'}}
          placeholder={'Password'}
          onChangeText={(password)=>this.setState({tempPassword:password})}
          />
        </View>
        <View style={{
            width:width/1.2,
            height:height/50,
            alignItems:'center',
        }}>
           
          <Text style={styles.titleinput}>
            Name
          </Text> 
        </View>
        <View style={{
          justifyContent:'center',
          width:width/1.2,
          height:height/10,
          marginTop:width/25,
          backgroundColor:'#c5cae9',
          borderRadius:width/20}}>
          
        </View>
        <View style={{
          justifyContent:'center',
          width:width/1.2,
          height:height/10,
          marginTop:width/25,
          backgroundColor:'#c5cae9',
          borderRadius:width/20}}>
          <TextInput
          style={{fontSize:width/20,textAlign:'center'}}
          placeholder={'Password'}
          onChangeText={(password)=>this.setState({tempPassword:password})}
          />
        </View>
        <TouchableOpacity style={styles.btn}
        onPress={()=>this.fungsiCekValue()}
        >
          <Text style={{
            color:'white',
            fontSize:width/20,
            fontWeight:'bold'
          }}>Save</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  titleinput:{
    fontSize:15,
    textAlign:'left',
  },
  btn:{
    width:width/1.2,
    height:height/10, 
    backgroundColor:'#5c6bc0',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:width/20,
    marginTop:width/10,},
});
