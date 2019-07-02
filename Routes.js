import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Buku from './screen/Buku.js'
import Register from './screen/RegisterForm.js';
import Home from './screen/Home.js';
import About from './screen/About.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
        {/* <Scene key = "register" component = {Register} hideNavBar={true} initial = {true} />
         <Scene key = "home" component = {Home} title = "Home"  />
         <Scene key = "about" component = {About} title = "About" /> */}
         <Scene key = "about" component = {About} title = "About" />
         <Scene 
         hideNavBar
         key="tabbar"
         showLabel={false}
         tabs
         >
                  <Scene
                  hideNavBar={true}
                  key = "tab1"
                  title= "firsttab"

                  >
                        <Scene key = "buku" component = {Buku} hideNavBar={true}  />
                        {/* <Scene key = "home" component = {Home} title = "Home"  initial = {true}/>
                        <Scene key = "about" component = {About} title = "About" />
                */}
                  </Scene>
               
                  <Scene
                  key = "tab2"
                  title= "secondtab"
                  >
                     <Scene key = "register" component = {Register} hideNavBar={true} initial = {true} />
                     <Scene key = "home" component = {Home} title = "Home"  />
                     <Scene key = "about" component = {About} title = "About" />
                  
                  </Scene>   
         </Scene>
      </Scene>

   </Router>
)
export default Routes