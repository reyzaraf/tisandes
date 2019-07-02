/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions,Alert,ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Routes from './Routes.js';

export default class App extends Component {
  
  // constructor(){
  //   super();
  //   this.state={
  //      tempUsername:'',
  //     tempPassword:''
  //   }
  // }
  // fungsiCekValue(){
  //   Alert.alert(this.state.tempUsername, this.state.tempPassword);
  // }
  
  render() {
    return (
      <Routes />
         );
  }
}

