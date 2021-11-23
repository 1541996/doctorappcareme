import React, { useState, useEffect, createRef } from 'react';
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
  Keyboard,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Modal,
  Pressable,
  KeyboardAvoidingView
  
  
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appbar } from 'react-native-paper';
import { Card } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import customstyles from "../assets/Css/Custom";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RadioButton } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";
//import {RadioGroup, RadioButton} from 'react-native-custom-radio-button'
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 

const PaymentFormScreen = ({navigation}) => { 
    

    const [AccountName, setAccountName] = useState('');
    const [AccountNo, setAccountNo] = useState('');
 
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

   
    const AccountNoInputRef = createRef();
   

     useEffect(() => {
             navigation.setOptions({
                headerLeft: () => (
                     <TouchableOpacity onPress={() => navigation.pop()}>
                            <View style={[customstyles.flex1,customstyles.flexrow,customstyles.pt25,customstyles.ml20]}>
                            
                                    <Image style={[customstyles.mt5,customstyles.mr20]} source={require('../assets/ArrowLeft.png')} />
                                    <Text style={styles.closeText}>Close</Text>
                            

                            </View>
                     </TouchableOpacity>
                    
                ),
                
     });
     });
     
    return (
         <View style={[customstyles.screenbgColor,customstyles.flex1]}>
          <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flexGrow: 1 }}
          >
           
            <View style={[customstyles.mt20,customstyles.ml25,customstyles.mr25,customstyles.mb20]}>
            
                  <Text style={styles.schTitle}>
                     Add Bank
                  </Text>
                  <Text style={[styles.schP,customstyles.mt10]}>
                     Please fill your bank information completely.
                  </Text>
                  
                 


                  {/* Name */}

                       <View style={[styles.SectionStyle,customstyles.mt50]}>
                          <TextInput
                              theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                              mode="outlined"
                              label="Account Name"
                              placeholder="Account Name"
                              placeholderTextColor="#999CAD"
                              outlineColor="#E8E6EA"
                              selectionColor="red"
                              underlineColor="#19BEED"
                            // dense="64dp"
                              style={styles.inputStyle}
                              onChangeText={(AccountName) =>
                                setAccountName(AccountName)
                              }
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              onSubmitEditing={() =>
                                AccountNoInputRef.current &&
                                AccountNoInputRef.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              />

                          </View>

                  {/* Name */}

                 

                  {/* Account No */}
                      <View style={styles.SectionStyle}>
                          <TextInput
                              theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                              mode="outlined"
                              label="Account Number"
                              placeholder="Account Number"
                              placeholderTextColor="#999CAD"
                              outlineColor="#E8E6EA"
                              selectionColor="red"
                              underlineColor="#19BEED"
                            // dense="64dp"
                              style={styles.inputStyle}
                              onChangeText={(AccountNo) =>
                                setAccountNo(AccountNo)
                              }
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              ref={AccountNoInputRef}
                              onSubmitEditing={Keyboard.dismiss}
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                            
                              />


                       </View>

                  {/* Account No */}   
                    
                     {/* button */}

                      <View style={[styles.bottomContainer,customstyles.mt50]}>
                          <TouchableOpacity onPress={() => navigation.pop()}
                              style={[customstyles.buttonStyle,customstyles.mt10]}
                              activeOpacity={0.5}
                            >
                              <Text style={customstyles.buttonTextStyle}>Create</Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={() => navigation.pop()}
                              style={[customstyles.mt20,customstyles.center,customstyles.flexrow]}
                              activeOpacity={0.5}
                            >
                              <Text style={styles.discardTextStyle}>Discard</Text>
                          </TouchableOpacity>

                      </View>


                         

                     {/* button */}   
                        
             
             </View>

               
                   
            </ScrollView>        
      
         </View>
       
    );
  
}


export default PaymentFormScreen;


const styles = StyleSheet.create({
    
    fullHeight:{
      height:'100%'
    },

    schTitle:{
        fontSize:34,
        lineHeight:40,
        color:'#333333'
    },

    schP:{
       fontSize:15,
       lineHeight:20,
       color: '#999CAD'
    },

    schName:{
      fontSize:15,
       lineHeight:20,
       color: '#333'
    },

    label:{
      fontSize:15,
      lineHeight:20,
      color:'#999CAD'
    },

    SectionStyle: {
    flexDirection: 'row',
    marginTop: 20,
  
  },
 
  inputStyle: {
    flex: 1,
    color: '#0F172A',
    justifyContent:'center',
    borderColor: '#E8E6EA',
    backgroundColor: '#f7f7f7',
   
    
  },

  discardTextStyle:{
    color:'#19BEED',
    fontSize:13,
    lineHeight:16
  },


  iconWidth:{
   width:40
  },

  
    closeText:{
        fontSize: 17,
        lineHeight: 24,
        color:'#333333'
    }

 

//     bottomContainer: {
//      position: 'absolute',
//      marginBottom: 30,
//      bottom:0
//  },

 

   
});
