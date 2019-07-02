import React from 'react'
import { TouchableOpacity,StyleSheet, Text,TextInput,View,Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Home = () => {
   const goToAbout = () => {
      Actions.about()
   }
   const goToRegister = () =>{
     Actions.register()
   }

   return (
     <View style={styles.container}>
      {/* <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
         <Text>This is HOME!</Text>
      </TouchableOpacity> */}
      <View style={styles.continput}>
        <Text style={styles.titleinput}>
            Username
        </Text>
      </View>
      <View style={styles.viewinput}>
        <TextInput
          style={styles.colinput}
          placeholder={'Username'}
        />
      </View>
      
      <View style={styles.continput}>
        <Text style={styles.titleinput}>
            Password
        </Text>
      </View>
      <View style={styles.viewinput}>
        <TextInput
          style={styles.colinput}
          placeholder={'password'}
        />
      </View>
      <TouchableOpacity style = {styles.buttons} onPress = {goToRegister}>
         <Text>Login!</Text>
      </TouchableOpacity>
      <Text style={{
          alignContent:'center',
          fontSize:width/25,
          marginTop:width/40}}>
        Or
      </Text>
      
      <TouchableOpacity style = {styles.buttons} onPress = {goToRegister}>
         <Text>Regis!</Text>
      </TouchableOpacity>
      </View>
   )
}
const styles = StyleSheet.create({
  container:{
    width:width/1,
    height:height/0.9,
    justifyContent:'center',
    alignItems: 'center',
  },
  continput:{
    width:width/1.2,
    height:height/30
  },
  titleinput:{
    textAlign:'left',
    fontWeight:'900',
    fontSize:width/20
  },
  viewinput:{
    justifyContent:'center',
          width:width/1.1,
          height:height/12,
          backgroundColor:'#fff',
          borderColor: '#553C8B',
          borderWidth: 2,
          borderRadius:width/100,
          marginTop:width/50,
  },
  colinput:{
    fontSize:width/20,
    textAlign:'center'
  },
  buttons:{
        width:width/1.1,
        height:height/15, 
        backgroundColor:'#5c6bc0',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:width/50,
        marginTop:width/20
  }
})

export default Home