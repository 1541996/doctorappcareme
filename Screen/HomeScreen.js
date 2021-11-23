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
import SettingsScreen from '../Screen/SettingsScreen';
import customstyles from "../assets/Css/Custom";

 

export default class HomeScreen extends Component {
  
   constructor(props) {
    super(props);
    this.state = { text: '' };
    this.data =  {
      names: [
         {
            id: 0,
            name: 'Ben',
         },
         {
            id: 1,
            name: 'Susan',
         },
         {
            id: 2,
            name: 'Robert',
         },
         {
            id: 3,
            name: 'Mary',
         },
          {
            id: 4,
            name: 'Mary',
         },
          {
            id: 5,
            name: 'Mary',
         },
          {
            id: 6,
            name: 'Ben',
         },
         {
            id: 7,
            name: 'Susan',
         },
         {
            id: 8,
            name: 'Robert',
         },
         {
            id: 9,
            name: 'Mary',
         },
          {
            id: 10,
            name: 'Mary',
         },
          {
            id: 11,
            name: 'Mary',
         }
         
      ]
   }
  }
  
   alertItemName = (item) => {
      alert(item.name)
   }

   componentDidMount(){
        this.props.navigation.setOptions({
        headerRight: () => (
            <View style={[customstyles.flex1,customstyles.flexrow,customstyles.pt20,customstyles.mr20]}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('NotificationScreen')}>
              <Image style={customstyles.mr20}
                source={require('../assets/Notification.png')}             
              />
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('SettingsScreen') }>
              <Image
                source={require('../assets/Setting.png')}
               
              />
              </TouchableOpacity>
            </View>
            
          ),
     });
   }

  render() {

   

    return (
        <SafeAreaView style={[styles.container,customstyles.screenbgColor]}>
           
           <Card style={styles.card}>
               <View style={styles.cardData}>
                  <Image source={require('../assets/welcome.png')}  />
                    <View style={styles.cardInfoStyle}>                       
                        <Text style={styles.cardTitleStyle}>
                            Welcome
                        </Text>
                        <Text style={styles.cardTextStyle}>
                        Participate in Careme booking and telemedicine service.
                        </Text>
                        
                    </View>
                         
               </View>
                 <View style={styles.close}>
                    <TouchableOpacity onPress={() => alert('Pressed')}>
                    <Text style={styles.closeText}>
                         Close
                    </Text>   
                    </TouchableOpacity>                     
                 </View>
               
                           
           </Card>

           <View style={styles.sectionStyle}>
                <Image
                    source={require('../assets/Search.png')}
                    style={styles.imageStyle}
                />
                <TextInput
                    style={{flex: 1}}
                    placeholder="Search......"
                    underlineColorAndroid="transparent"
                />
           </View>

            <ScrollView contentContainerStyle={styles.mt10} horizontal={true} showsHorizontalScrollIndicator={false} >
                    <View style={styles.tagStyle}>
                        <Chip icon="calendar" style={styles.chipCustom} onPress={() => console.log('Pressed')}>Today</Chip>
                        <Chip icon="check" style={styles.chipCustom} onPress={() => console.log('Pressed')}>All</Chip>
                        <Chip icon="clock-outline" style={styles.chipCustom} onPress={() => console.log('Pressed')}>9 AM - 12 AM</Chip>
                        <Chip icon="clock-outline" style={styles.chipCustom} onPress={() => console.log('Pressed')}>9 AM - 12 AM</Chip>
                        <Chip icon="clock-outline" style={styles.chipCustom} onPress={() => console.log('Pressed')}>9 AM - 12 AM</Chip>
                          
                    
                    </View>
            </ScrollView>
          
           
        <ScrollView style={styles.scrollView}>
            <View style={styles.List}>
              {
               this.data.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}                   
                     onPress = {() => this.alertItemName(item)}>
                     
                        <View style={styles.ptList}>
                           <Image source={require('../assets/Image.png')}  style={styles.profileImgStyle}  />
                           <View style={styles.ptInfoStyle}>                       
                                <Text style={styles.statusStyle}>
                                    Pending
                                </Text>
                                <Text style={styles.nameStyle}>
                                    {item.name}
                                </Text>
                                <Text style={styles.ageStyle}>
                                    Age 20
                                </Text>
                           </View>
                           
                           <Image 
                                source={require('../assets/Calling.png')}
                                style={styles.phImageStyle}
                            />

                        </View>
                           

                        
                                
                  </TouchableOpacity>
               ))
            }
            </View>
       
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

  mt10:{
    marginTop:10,
  },
   scrollView: {
    marginHorizontal: 0,
  },
  tagStyle:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 25,
   // marginTop: 15,
   // marginBottom: 15
    height:80
  
  },
  
  chipCustom:{
      backgroundColor:'#fff',
      marginRight:10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E6EA',
    borderColor: '#000',
    height: 40,
    marginTop: 20,
    borderRadius: 15,
    color: '#0F172A', 
    marginLeft: 25,
    marginRight: 25,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    marginLeft:10,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
   phImageStyle: {
    padding: 10,
    marginTop: 15,
    marginLeft:10,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',

  },
  profileImgStyle:{
    
    height: 59,
    width: 59,
    borderRadius: 300,
   
  },
  List:{
    marginTop:20,
    marginLeft: 25,
    marginRight: 25
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
 statusStyle:{
    fontWeight: 'normal',
    fontSize: 11,    
    color: '#60A5FA',
    lineHeight:16
 },
  nameStyle:{
    fontWeight: 'normal',
    fontSize: 17,    
    color: '#1E293B',
    lineHeight:24
 },
  ageStyle:{
    fontWeight: 'normal',
    fontSize: 12,    
    color: '#999CAD',
     lineHeight:16
 },
 cardInfoStyle:{
    marginLeft: 10,
    flex: 1
 },
 cardTitleStyle:{
    marginTop:10,
    fontWeight: 'normal',
    fontSize: 16,    
    color: '#000',
    lineHeight:16,
   
 },
 cardTextStyle:{
    marginTop: 5,
    fontWeight: 'normal',
    fontSize: 14,    
    color: '#000',
    lineHeight: 16,
    flexWrap: 'wrap'
 },
 cardData:{
  flexDirection:'row',  
  
 },
 card:{
    marginLeft: 25,
    marginRight: 25,
    marginTop:20,
    borderRadius: 15,
    padding:15
 },

close:{
  flexDirection:'row',  
  justifyContent:'center',
  marginTop:20
 },

 closeText:{
    fontWeight: 'normal',
    fontSize: 14,    
    color: '#EF4444',
    lineHeight: 16,
 },

});


