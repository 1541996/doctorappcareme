/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import type {Node} from 'react';
import { Text, View, Button, Platform, Image, StyleSheet, Alert, ToastAndroid, AlertIOS , Modal, 
         Pressable, TouchableOpacity, BackHandler, Linking, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screen/HomeScreen';
import ChatScreen from './Screen/ChatScreen';
import ProfileScreen from './Screen/ProfileScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import SplashScreen from './Screen/SplashScreen';
import SettingsScreen from './Screen/SettingsScreen';
import AddScheduleScreen from './Screen/AddScheduleScreen';
import EditProfileScreen from './Screen/EditProfileScreen';
import AddClinicScreen from './Screen/AddClinicScreen';
import PaymentFormScreen from './Screen/PaymentFormScreen';
import PaymentScreen from "./Screen/PaymentScreen";
import AddPaymentScreen from "./Screen/AddPaymentScreen";
import PrivacyPolicyScreen from "./Screen/PrivacyPolicyScreen";
import FAQScreen from "./Screen/FAQScreen";
import HelpScreen from "./Screen/HelpScreen";
import MyChatScreen from "./Screen/MyChatScreen";
import NotificationScreen from "./Screen/NotificationScreen";
import SpecialtiesScreen from "./Screen/SpecialtiesScreen";
import ComponentsUIScreen from "./Screen/ComponentsUIScreen";
import CarouselScreen from "./Screen/CarouselScreen";
import TermsAndConditionsScreen from "./Screen/TermsAndConditionsScreen";
import VideoScreen from "./Screen/VideoScreen";
import OwnCarouselScreen from "./Screen/OwnCarouselScreen";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import customstyles from "./assets/Css/Custom";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, borderRadius: 100  }}
      source={require('./assets/logo.png')}
    />
  );
}

// function Settings(){
//   navigation.navigate('SettingsScreen')
// }

// const TestScreen = ({ navigation }) => {
//    navigation.navigate('SettingsScreen')
// };

function MyTabs() {
  return (
   
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}        
          options={{
            tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={20} />
            ),
            headerTitle: "Home",
            headerTintColor: '#333333',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:34,
              lineHeight:40,
              marginTop:10,
              marginLeft:5
            },
            headerStyle: {
              backgroundColor: '#f7f7f7',
              height: 70             
            },
          }} />

        <Tab.Screen name="Chat" component={ChatScreen}      
          options={{
            tabBarIcon: ({ color }) => (
                <Icon name="chat" color={color} size={20} />
            ),
            headerTitle: "Chat",
            headerTintColor: '#333333',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:34,
              lineHeight:40,
              marginTop:10,
              marginLeft:5
            },
            headerStyle: {
              backgroundColor: '#f7f7f7',
              height: 70             
            },
          }}
        />

      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
                <Icon name="account" color={color} size={20} />
            ),       
            headerTitle: "Profile",
            headerTintColor: '#333333',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:34,
              lineHeight:40,
              marginTop:10,
              marginLeft:5
            },
            headerStyle: {
              backgroundColor: '#f7f7f7',
              height: 70             
            },
          }}
        />
      </Tab.Navigator>
 
  );
}


const App = () => {

  return (   
       <MainContent />       
  );

}



function MainContent(){
return(
  <NavigationContainer>
    
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
      
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        

         <Stack.Screen name="SettingsScreen" component={SettingsScreen}
              options={{
              title: 'Settings',
              headerTintColor: '#333',
              headerStyle: {
                backgroundColor: '#f7f7f7',
                height: 70    
              },
              headerLeft: null,
              headerTintColor: '#333333',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:34,
                  lineHeight:40,
                  marginTop:10,
                  marginLeft:5
                },
              }}
         />

         <Stack.Screen name="AddScheduleScreen" component={AddScheduleScreen}
              options={{ headerShown: false }}
         />

          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen}
              options={{ headerShown: false }}
              initialParams={{ specialtyArray: [] }}
         />

           <Stack.Screen name="SpecialtiesScreen" component={SpecialtiesScreen}
              options={{ headerShown: false }}
         />
       
        <Stack.Screen name="AddClinicScreen" component={AddClinicScreen}
              options={{ headerShown: false }}
         />

           <Stack.Screen name="MyChatScreen" component={MyChatScreen}
              options={{ headerShown: false }}
         />

           <Stack.Screen name="ComponentsUIScreen" component={ComponentsUIScreen}
              options={{ headerShown: false }}
         />

           <Stack.Screen name="CarouselScreen" component={CarouselScreen}
              options={{ headerShown: false }}
         />

         <Stack.Screen name="VideoScreen" component={VideoScreen}
              options={{ headerShown: false }}
         />

            <Stack.Screen name="OwnCarouselScreen" component={OwnCarouselScreen}
              options={{ headerShown: false }}
         />

         



         <Stack.Screen name="HelpScreen" component={HelpScreen}
            options={{
              title: null,
              headerTintColor: '#333',
              headerStyle: {
                backgroundColor: '#f7f7f7',
                height: 70    
              },
              headerTintColor: '#333333',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:34,
                  lineHeight:40,
                  marginTop:10,
                  marginLeft:5
                },
              }}
         />

          <Stack.Screen name="NotificationScreen" component={NotificationScreen}
            options={{
              title: null,
              headerTintColor: '#333',
              headerStyle: {
                backgroundColor: '#f7f7f7',
                height: 70    
              },
              headerTintColor: '#333333',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:34,
                  lineHeight:40,
                  marginTop:10,
                  marginLeft:5
                },
              }}
         />

          <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen}
            options={{
              title: null,
              headerTintColor: '#333',
              headerStyle: {
                backgroundColor: '#f7f7f7',
                height: 70    
              },
              headerTintColor: '#333333',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:34,
                  lineHeight:40,
                  marginTop:10,
                  marginLeft:5
                },
              }}
         />

          <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen}
            options={{
              title: null,
              headerTintColor: '#333',
              headerStyle: {
                backgroundColor: '#f7f7f7',
                height: 70    
              },
              headerTintColor: '#333333',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:34,
                  lineHeight:40,
                  marginTop:10,
                  marginLeft:5
                },
              }}
         />

           <Stack.Screen name="FAQScreen" component={FAQScreen}
            options={{
              title: null,
              headerTintColor: '#333',
              headerStyle: {
                backgroundColor: '#f7f7f7',
                height: 70    
              },
              headerTintColor: '#333333',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:34,
                  lineHeight:40,
                  marginTop:10,
                  marginLeft:5
                },
              }}
         />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen}
             options={{
              title: null,
              headerTintColor: '#333',
              headerStyle: {
                backgroundColor: '#f7f7f7',
                height: 70    
              },
              headerTintColor: '#333333',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:34,
                  lineHeight:40,
                  marginTop:10,
                  marginLeft:5
                },
              }}
         />

          <Stack.Screen name="AddPaymentScreen" component={AddPaymentScreen}
             options={{
              title: null,
              headerTintColor: '#333',
              headerStyle: {
                backgroundColor: '#f7f7f7',
                height: 70    
              },
              headerTintColor: '#333333',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:34,
                  lineHeight:40,
                  marginTop:10,
                  marginLeft:5
                },
              }}
         />

          <Stack.Screen name="PaymentFormScreen" component={PaymentFormScreen}
             options={{
              title: null,
              headerTintColor: '#333',
              headerStyle: {
                backgroundColor: '#f7f7f7',
                height: 70    
              },
              headerTintColor: '#333333',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:34,
                  lineHeight:40,
                  marginTop:10,
                  marginLeft:5
                },
              }}
         />


     
       <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />

      </Stack.Navigator>
   
    </NavigationContainer>

   )
}



const Auth = () => {

//  render() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Back', //Set Header Title
          headerStyle: {
            backgroundColor: '#fff', //Set Header color
          },
          headerTintColor: '#333333', //Set Header text color
          // headerTitleStyle: {
          //   fontWeight: 'bold', //Set Header text style
          // },
        }}
      />
      

    </Stack.Navigator>
  );
//  }
}


export default App;
