import React, { Component } from 'react';
import {
  BackHandler,
  Platform,
  Button,
  StyleSheet,
  Alert,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StatusBar,
  RefreshControl,
  TextInput,
  Keyboard,
  Image,
  TouchableOpacity,
  
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appbar } from 'react-native-paper';
import { Card } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import customstyles from "../assets/Css/Custom";

 

export default class SettingsScreen extends Component {
  
   constructor(props) {
    super(props);
   
  }

   componentDidMount(){
        this.props.navigation.setOptions({
        headerRight: () => (
            <View style={[customstyles.flex1,customstyles.flexrow,customstyles.pt25,customstyles.mr20]}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
               <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>

            </View>
            
          ),
     });
   }
  

  
logout = () => {
  AsyncStorage.clear(),
  this.props.navigation.replace('Auth')
}
    



  render() {

   

    return (
        <SafeAreaView style={[styles.container,customstyles.screenbgColor]}>          
             <ScrollView style={styles.scrollView}>
            <View style={styles.List}>
            
                  <Text style={styles.settingsTitle}>
                     ACCOUNT
                  </Text>
                               
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfileScreen')}>                    
                        <View style={styles.ptList}>
                         <View style={styles.imgContainer}>
                             <Image source={require('../assets/Profile.png')} style={{ marginLeft: 5 }}    />
                           </View>
                           
                           <View style={styles.ptInfoStyle}>                       
                               
                                <Text style={styles.name}>
                                    Edit your profile
                                </Text>
                               
                           </View>
                        </View>                               
                  </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('NotificationScreen')}>                    
                        <View style={styles.ptList}>
                          
                         <View style={styles.imgContainer}>
                            <Image source={require('../assets/Notification.png')}   />
                         </View>
                           <View style={styles.ptInfoStyle}>                       
                               
                                <Text style={styles.name}>
                                    Push Notification
                                </Text>
                               
                           </View>
                        </View>                               
                  </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('PrivacyPolicyScreen')}>                    
                        <View style={styles.ptList}>
                          
                            <View style={styles.imgContainer}>
                            <Image source={require('../assets/Lock.png')}   />
                           </View>
                           <View style={styles.ptInfoStyle}>                       
                               
                                <Text style={styles.name}>
                                    Privacy and safety
                                </Text>
                               
                           </View>
                        </View>                               
                  </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('PaymentScreen')}>                    
                        <View style={styles.ptList}>
                          
                            <View style={styles.imgContainer}>
                             <Image source={require('../assets/Wallet.png')}   />
                           </View>
                           <View style={styles.ptInfoStyle}>                       
                               
                                <Text style={styles.name}>
                                    Payment
                                </Text>
                               
                           </View>
                        </View>                               
                  </TouchableOpacity>

             
            </View>

             <View style={styles.List}>
            
                  <Text style={styles.settingsTitle}>
                     PREFERENCES
                  </Text>
                               
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('HelpScreen')}>                    
                        <View style={styles.ptList}>
                           <View style={styles.imgContainer}>
                              <Image source={require('../assets/Help.png')}   />
                           </View>
                           
                           <View style={styles.ptInfoStyle}>                       
                               
                                <Text style={styles.name}>
                                    Help
                                </Text>
                               
                           </View>
                        </View>                               
                  </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('TermsAndConditionsScreen')}>                    
                        <View style={styles.ptList}>
                         <View style={styles.imgContainer}>
                             <Image source={require('../assets/Terms.png')}   />
                           </View>
                          
                           <View style={styles.ptInfoStyle}>                       
                               
                                <Text style={styles.name}>
                                    Terms and conditions
                                </Text>
                               
                           </View>
                        </View>                               
                  </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('FAQScreen')}>                    
                        <View style={styles.ptList}>
                          
                           <View style={styles.imgContainer}>
                              <Image source={require('../assets/FAQ.png')}   />
                           </View>
                           <View style={styles.ptInfoStyle}>                       
                               
                                <Text style={styles.name}>
                                    FAQ
                                </Text>
                               
                           </View>
                        </View>                               
                  </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ComponentsUIScreen')}>                    
                        <View style={styles.ptList}>
                          
                           <View style={styles.imgContainer}>
                              <Image source={require('../assets/FAQ.png')}   />
                           </View>
                           <View style={styles.ptInfoStyle}>                       
                               
                                <Text style={styles.name}>
                                    UI Components
                                </Text>
                               
                           </View>
                        </View>                               
                  </TouchableOpacity>
                 
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('CarouselScreen')}>                    
                        <View style={styles.ptList}>
                          
                           <View style={styles.imgContainer}>
                              <Image source={require('../assets/FAQ.png')}   />
                           </View>
                           <View style={styles.ptInfoStyle}>                       
                               
                                <Text style={styles.name}>
                                    Carousel UI
                                </Text>
                               
                           </View>
                        </View>                               
                  </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('VideoScreen')}>                    
                        <View style={styles.ptList}>
                          
                           <View style={styles.imgContainer}>
                              <Image source={require('../assets/FAQ.png')}   />
                           </View>
                           <View style={styles.ptInfoStyle}>                       
                               
                                <Text style={styles.name}>
                                    VideoScreen
                                    
                                </Text>
                               
                           </View>
                        </View>                               
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.props.navigation.navigate('OwnCarouselScreen')}>                    
                        <View style={styles.ptList}>
                          
                           <View style={styles.imgContainer}>
                              <Image source={require('../assets/FAQ.png')}   />
                           </View>
                           <View style={styles.ptInfoStyle}>                       
                               
                                <Text style={styles.name}>
                                    Test Cards
                                    
                                </Text>
                               
                           </View>
                        </View>                               
                  </TouchableOpacity>
                 
             
            </View>


            <TouchableOpacity  onPress={() => { this.logout();  }}>
              <View style={styles.bottomContainer}>
                <Image source={require('../assets/Logout.png')} />
                  
                <Text style={styles.logoutText}>Logout</Text>         
               
              </View>
            </TouchableOpacity>
           
           
            </ScrollView>
        
            
          

         
        </SafeAreaView>
      
    );
  }
}




const styles = StyleSheet.create({
  container:{
      flex: 1,
    //   marginLeft: 25,
    //   marginRight: 25,
    
  },

  imgContainer:{
   width:40
  },
   scrollView: {
    marginHorizontal: 15,
  },
  
  List:{
    marginTop:10,
    margin:10
  },
  ptList:{
      flexDirection:'row',     
      borderBottomColor: '#E4E4E4',
      borderBottomWidth: 1,
      paddingBottom:10,
      marginBottom:10
  },
 ptInfoStyle:{
    marginLeft:20,
    flex:1
 },
 
  name:{
    fontWeight: 'normal',
    fontSize: 15,    
    color: '#555866',
    lineHeight:24
 },
  
  settingsTitle:{
    fontWeight: 'normal',
    fontSize: 15,    
    color: '#999CAD',
    lineHeight:24,
    marginTop:20,
    marginBottom:20
  },
   bottomContainer: {
    
    flexDirection:'row',     
    justifyContent: 'center',
    marginTop:30
 },

 logoutText:{
    fontWeight: 'normal',
    fontSize: 15,    
    color: '#EB5757',
    marginLeft: 5
   
 },

 closeText:{
   color:'#EB5757',
   fontSize:17,
   lineHeight:24
 }
 
});


