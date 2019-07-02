import React, { Component } from 'react';

import { View,Dimensions ,Text, StyleSheet, TouchableOpacity, Image, Platform, Animated } from 'react-native';

const Sliding_Drawer_Width = 204;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Buku extends Component {

  constructor()
  {
      super();

      this.Animation = new Animated.Value(0);

      this.Sliding_Drawer_Toggle = true;
  }


  ShowSlidingDrawer = () =>
  {
      if( this.Sliding_Drawer_Toggle === true )
      {
              Animated.timing(
                  this.Animation,
                  {
                      toValue: 1,
                      duration: 500
                  }
              ).start(() =>
              {
                  this.Sliding_Drawer_Toggle = false;
              });
                  
      }
      else
      {
              Animated.timing(
                  this.Animation,
                  {
                      toValue: 0,
                      duration: 500
                  }
              ).start(() =>
              {
                  this.Sliding_Drawer_Toggle = true;
              });
      }
  }

  render() {

    const Animation_Interpolate = this.Animation.interpolate(
      {
          inputRange: [ 0, 1 ],
          outputRange: [ -(Sliding_Drawer_Width - 32), 0 ]
      });

    return (

          <View style = { styles.MainContainer }>


          {/* <Text style = {styles.TextStyle}> 
          Components Which You Want To Show in App, Place Them Here. </Text> */}
                

                <Animated.View style = {[ styles.Root_Sliding_Drawer_Container, { transform: [{ translateX: Animation_Interpolate }]}]}>

                    
                    <View style = { styles.Main_Sliding_Drawer_Container }>

                    {/* Put All Your Components Here Which You Want To Show Inside Sliding Drawer. */}

                        {/* <Text style = { styles.TextStyle } > Put All Your Components Here Which You Want To Show Inside Sliding Drawer. </Text>   */}
                        <View style={{flex:1,height:height/10,width:width/2.4,backgroundColor:'#2c3e50',alignContent:'center',alignItems:'center'   }}>
                            <Image style={{width:50,height:50,justifyContent:'center',}} source={require('../assets/splash.png')} />
                            <Text style={{textAlign:"center"}}>sda</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text>Menu</Text>
                            <Text>Menu</Text>
                            <Text>Menu</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress = { this.ShowSlidingDrawer } style = {{ padding: 1 }}>

                        <Image source = {{ uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Arrow_Icon.png' }} style = {{resizeMode: 'contain', width: 30, height: 30 }} />
                    
                    </TouchableOpacity>
                
                
                </Animated.View>

                
          </View>
       
    );
  }
}

const styles = StyleSheet.create(
  {
      MainContainer:
      {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      },
  
      Root_Sliding_Drawer_Container:
      {
          flex:1,
          position: 'absolute',
          flexDirection: 'row',
          left: 0,
          bottom: 0,
          top: (Platform.OS == 'ios') ? 20 : 0,
          width: Sliding_Drawer_Width,
      },
  
      Main_Sliding_Drawer_Container:
      {
          flex: 1,
          backgroundColor: '#FFFFFF',
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center'
      },
  
      TextStyle: {
  
          fontSize: 25,
          padding: 10, 
          textAlign: 'center',
          color: '#FF5722'
      }
  
  });