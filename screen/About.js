import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {
   const goToTab1 = () => {
      Actions.tab1()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToTab1}>
         <Text>This is ABOUT</Text>
      </TouchableOpacity>
   )
}
export default About