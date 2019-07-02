/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions,Alert,Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class App extends Component {
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
      
      <View style={{width:width/1, height:height/1, justifyContent:'center', alignItems:'center', }}>
        <Image 
        style={{width:width/1,height:height/1,flex:1}}
        source={require('../assets/splash.png')}></Image>
      </View>
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
  
});
