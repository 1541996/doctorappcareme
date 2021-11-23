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
//import {RadioGroup, RadioButton} from 'react-native-custom-radio-button'



 

const AddScheduleScreen = ({navigation}) => { 
  
    let bouncyCheckboxRef: BouncyCheckbox | null = null;
    const [checkboxStateS, setCheckboxStateS] = useState(false);
    const [checkboxStateM, setCheckboxStateM] = useState(false);
    const [checkboxStateT, setCheckboxStateT] = useState(true);
    const [checkboxStateW, setCheckboxStateW] = useState(false);
    const [checkboxStateThu, setCheckboxStateThu] = useState(true);
    const [checkboxStateF, setCheckboxStateF] = useState(false);
    const [checkboxStateSat, setCheckboxStateSat] = useState(true);


    const [PatientAmount, setPatientAmount] = useState('');
    const [VTime, setVTime] = useState('');
    const [chkPTAmount, setchkPTAmount] = useState('');
    const [ReservedPTAmount, setReservedPTAmount] = useState('');
    const [LimitHour, setLimitHour] = useState('');
    const [FromTime, setFromTime] = useState(new Date());
    const [ToTime, setToTime] = useState(new Date());
    
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const ChkPTAmountInputRef = createRef();
    const VtimeInputRef = createRef();
    const ReservedPTAmountInputRef = createRef();
    const LimitHourInputRef = createRef();

    const [value, setValue] = React.useState('Nothing selected');

  //  for from and to time picker

   const [modeFrom, setModeFrom] = useState('time');
   const [modeTo, setModeTo] = useState('time');
   const [showFrom, setShowFrom] = useState(false);
   const [showTo, setShowTo] = useState(false);

   
   const showTimepicker1 = () => {
     showModeFrom('time');
    };

    const showTimepicker2 = () => {
     showModeTo('time');
    };

    const onChangeFromTime = (event, selectedDate) => {
        console.log("from");
      const currentDate = selectedDate || FromTime;
      setShowFrom(Platform.OS === 'ios');
     // setDate(currentDate);
      setFromTime(currentDate);     
    };

     const onChangeToTime = (event, selectedDate) => {
       console.log("to");
      const currentDate = selectedDate || ToTime;
      setShowTo(Platform.OS === 'ios');
     // setDate(currentDate);
      setToTime(currentDate);     
    };

    const getFromTime = () => {
    let tempDate = FromTime.toString().split(' ');
    console.log(tempDate);
    return FromTime !== ''
      ? `${tempDate[4]}`
      : '';
    };

    const getToTime = () => {
    let tempDate = ToTime.toString().split(' ');
    console.log(tempDate);
    return ToTime !== ''
      ? `${tempDate[4]}`
      : '';
    };


    const showModeFrom = (currentMode) => {
      setShowFrom(true);
      setModeFrom(currentMode);
    };

    const showModeTo = (currentMode) => {
      setShowTo(true);
      setModeTo(currentMode);
    };
   
   //  for from and to time picker

  const onSelect = (index, value) => {
     setValue(value);
}


    return (
        <SafeAreaView style={[styles.maincontainer,customstyles.screenbgColor]}>          
          <ScrollView style={styles.scrollView}>
            <View style={[customstyles.mt20,customstyles.ml25,customstyles.mr25,customstyles.mb20]}>
            
                  <Text style={styles.schTitle}>
                     Visit Schedule
                  </Text>
                  <Text style={[styles.schP,customstyles.mt10]}>
                     You are adding schedule for
                  </Text>
                   <Text style={[styles.schName,customstyles.mt5]}>
                     Yammo Clinic
                  </Text>


                {/* select day */}
                  <View style={[customstyles.mt30]}>
                    <View style={[customstyles.flexrow,customstyles.mt10]}>
                         <Icon name="calendar" size={20} style={[styles.iconWidth]} />
                         <Text style={[styles.label,customstyles.ml5]}>                        
                           SELECT DAY
                        </Text>
                    </View>

                    <View style={[customstyles.flexrow,customstyles.spacebetween]}>
                        
                          <RNBounceable
                            style={{
                              marginTop: 16,
                              height: 38,
                              width: 38,
                              backgroundColor: checkboxStateS ? "#24A6F8" : "#E8E6EA",
                              borderRadius: 10,
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                             onPress={() => setCheckboxStateS(!checkboxStateS)}
                          >
                            <Text style={{ color: "#fff", fontSize:20, lineHeight:20 }}>S</Text>
                          </RNBounceable>
                          <RNBounceable
                            style={{
                              marginTop: 16,
                              height: 38,
                              width: 38,
                              backgroundColor: checkboxStateM ? "#24A6F8" : "#E8E6EA",
                              borderRadius: 10,
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                             onPress={() => setCheckboxStateM(!checkboxStateM)}
                          >
                            <Text style={{ color: "#fff", fontSize:20, lineHeight:20 }}>M</Text>
                          </RNBounceable>
                          <RNBounceable
                            style={{
                              marginTop: 16,
                              height: 38,
                              width: 38,
                              backgroundColor: checkboxStateT ? "#24A6F8" : "#E8E6EA",
                              borderRadius: 10,
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                             onPress={() => setCheckboxStateT(!checkboxStateT)}
                          >
                            <Text style={{ color: "#fff", fontSize:20, lineHeight:20 }}>T</Text>
                          </RNBounceable>
                          <RNBounceable
                            style={{
                              marginTop: 16,
                              height: 38,
                              width: 38,
                              backgroundColor: checkboxStateW ? "#24A6F8" : "#E8E6EA",
                              borderRadius: 10,
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                             onPress={() => setCheckboxStateW(!checkboxStateW)}
                          >
                            <Text style={{ color: "#fff", fontSize:20, lineHeight:20 }}>W</Text>
                          </RNBounceable>
                          <RNBounceable
                            style={{
                              marginTop: 16,
                              height: 38,
                              width: 38,
                              backgroundColor: checkboxStateThu ? "#24A6F8" : "#E8E6EA",
                              borderRadius: 10,
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                             onPress={() => setCheckboxStateThu(!checkboxStateThu)}
                          >
                            <Text style={{ color: "#fff", fontSize:20, lineHeight:20 }}>T</Text>
                          </RNBounceable>
                          <RNBounceable
                            style={{
                              marginTop: 16,
                              height: 38,
                              width: 38,
                              backgroundColor: checkboxStateF ? "#24A6F8" : "#E8E6EA",
                              borderRadius: 10,
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                             onPress={() => setCheckboxStateF(!checkboxStateF)}
                          >
                            <Text style={{ color: "#fff", fontSize:20, lineHeight:20 }}>F</Text>
                          </RNBounceable>
                          <RNBounceable
                            style={{
                              marginTop: 16,
                              height: 38,
                              width: 38,
                              backgroundColor: checkboxStateSat ? "#24A6F8" : "#E8E6EA",
                              borderRadius: 10,
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                             onPress={() => setCheckboxStateSat(!checkboxStateSat)}
                          >
                            <Text style={{ color: "#fff", fontSize:20, lineHeight:20 }}>S</Text>
                          </RNBounceable>


                          
                     </View>
                  
                          
                  </View>


                 {/* select day */}

               
                  <View style={[customstyles.mt30]}>
                     <View style={[customstyles.flexrow,customstyles.mt10]}>
                         <Icon name="clock-outline" size={20} style={[styles.iconWidth]} />
                         <Text style={[styles.label,customstyles.ml5]}>                        
                           SELECT TIME
                        </Text>
                    </View>
                      
                    {/* select time */}
                         <View style={[customstyles.flexrow,customstyles.mt10,customstyles.spacebetween]}>
                             <View style={customstyles.center}>
                                  <Text>From</Text>
                             </View>

                             <View style={{ width: 80 }}>
                                   <TextInput 
                                    theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                                    mode="flat"                              
                                    outlineColor="#E8E6EA"
                                    selectionColor="red"
                                    underlineColor="#333"
                                  // dense="64dp"
                                    style={styles.inputStyle}
                                    value={getFromTime()}
                                    onPressIn={showTimepicker1}
                                    autoCapitalize="none"
                                    keyboardType="default"
                                    returnKeyType="next"
                                   
                                    underlineColorAndroid="#f000"
                                    blurOnSubmit={false}
                                    />
                             </View>
                             
                              {showFrom && (
                                <DateTimePicker
                                  testID="dateTimePicker"
                                  value={FromTime}
                                  mode={modeFrom}
                                  is24Hour={true}
                                  display="default"
                                  onChange={onChangeFromTime}
                                />
                              )}

                             <View style={customstyles.center}>
                                  <Text>To</Text>
                             </View>

                             <View style={{ width: 80 }}>
                                    <TextInput 
                                    theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                                    mode="flat"                              
                                    outlineColor="#E8E6EA"
                                    selectionColor="red"
                                    underlineColor="#333"
                                  // dense="64dp"
                                    style={styles.inputStyle}
                                    value={getToTime()}
                                    onPressIn={showTimepicker2}
                                    autoCapitalize="none"
                                    keyboardType="default"
                                    returnKeyType="next"
                                   
                                    underlineColorAndroid="#f000"
                                    blurOnSubmit={false}
                                    />
                             </View>
                              {showTo && (
                                <DateTimePicker
                                  testID="dateTimePicker2"
                                  value={ToTime}
                                  mode={modeTo}
                                  is24Hour={true}
                                  display="default"
                                  onChange={onChangeToTime}
                                />
                              )}

                             <View style={customstyles.center}>
                               <TouchableOpacity>
                                    <Image source={require('../assets/delete_sch.png')} />
                               </TouchableOpacity>
                               
                             </View>
                             
                             
                              

                                

                         </View>

                     {/* select time */}
                  

                  </View>

                 


                  {/* Pt amount */}

                       <View style={[styles.SectionStyle,customstyles.mt50]}>
                          <TextInput
                              theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                              mode="outlined"
                              label="Patient Amount"
                              placeholder="Enter Patient Amount"
                              placeholderTextColor="#999CAD"
                              outlineColor="#E8E6EA"
                              selectionColor="red"
                              underlineColor="#19BEED"
                            // dense="64dp"
                              style={styles.inputStyle}
                              onChangeText={(PatientAmount) =>
                                setPatientAmount(PatientAmount)
                              }
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              onSubmitEditing={() =>
                                VtimeInputRef.current &&
                                VtimeInputRef.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              />

                          </View>

                  {/* Pt amount */}

                  {/* Average Visiting Time */}
                        <View style={styles.SectionStyle}>
                          <TextInput
                              theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                              mode="outlined"
                              label="Average Visiting Time"
                              placeholder="Enter Average Visiting Time"
                              placeholderTextColor="#999CAD"
                              outlineColor="#E8E6EA"
                              selectionColor="red"
                              underlineColor="#19BEED"
                            // dense="64dp"
                              style={styles.inputStyle}
                              onChangeText={(VTime) =>
                                setVTime(VTime)
                              }
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              ref={VtimeInputRef}
                              onSubmitEditing={() =>
                                ChkPTAmountInputRef.current &&
                                ChkPTAmountInputRef.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              />

                          </View>


                  {/* Average Visiting Time */}

                  {/* CheckIn Pt Amt */}
                      <View style={styles.SectionStyle}>
                          <TextInput
                              theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                              mode="outlined"
                              label="Check In Patient Amount for Queue"
                              placeholder="Enter Check In Patient Amount"
                              placeholderTextColor="#999CAD"
                              outlineColor="#E8E6EA"
                              selectionColor="red"
                              underlineColor="#19BEED"
                            // dense="64dp"
                              style={styles.inputStyle}
                              onChangeText={(chkPTAmount) =>
                                setchkPTAmount(VTime)
                              }
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              ref={ChkPTAmountInputRef}
                              onSubmitEditing={() =>
                                ReservedPTAmountInputRef.current &&
                                ReservedPTAmountInputRef.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              />

                       </View>

                  {/* CheckIn Pt Amt */}


                  {/* Reserve Pt Amt */}
                       <View style={styles.SectionStyle}>
                          <TextInput
                              theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                              mode="outlined"
                              label="Reserved Patient Amount"
                              placeholder="Enter Reserved Patient Amount"
                              placeholderTextColor="#999CAD"
                              outlineColor="#E8E6EA"
                              selectionColor="red"
                              underlineColor="#19BEED"
                            // dense="64dp"
                              style={styles.inputStyle}
                              onChangeText={(ReservedPTAmount) =>
                                setReservedPTAmount(VTime)
                              }
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              ref={ReservedPTAmountInputRef}
                              onSubmitEditing={() =>
                                LimitHourInputRef.current &&
                                LimitHourInputRef.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              />

                       </View>


                  {/* Reserve Pt Amt */}
                  
                   {/* Limit checkbox */}
                        
                   <View style={[customstyles.mt30]}>
                        <View style={[customstyles.flexrow,customstyles.mt10]}>
                            <Icon name="clock-outline" size={20} style={[styles.iconWidth]} />
                            <Text style={[styles.label,customstyles.ml5]}>                        
                              SET DURATION
                            </Text>
                        </View>

                        <View style={customstyles.mt20}>
                            
                            
                              {/* <Text style={styles.text}>{value}</Text> */}


                            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                                <View style={customstyles.flexrow}>
                                  <RadioButton value="No Limit" />
                                  <Text style={[customstyles.mt5,customstyles.chklbtext]}>No Limit</Text>
                                 
                                  
                                </View>
                                <View style={customstyles.flexrow}>
                                  <RadioButton value="အချိန်နောက်ကျပိတ်" />
                                  <Text style={[customstyles.mt5,customstyles.chklbtext]}>အချိန်နောက်ကျပိတ်</Text>
                                
                                </View>
                                <View style={customstyles.flexrow}>
                                  <RadioButton value="အချိန်ကြိုပိတ်" />
                                  <Text style={[customstyles.mt5,customstyles.chklbtext]}>အချိန်ကြိုပိတ်</Text>
                                
                                </View>
                          </RadioButton.Group>
                             
                        </View>

                    </View>

                     


                    {/* Limit checkbox */}


                  {/* Limit Hour */}
                        <View style={[styles.SectionStyle,customstyles.mt30]}>
                          <TextInput
                              theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                              mode="outlined"
                              label="Limit Hour"
                              placeholder="Enter Limit Hour"
                              placeholderTextColor="#999CAD"
                              outlineColor="#E8E6EA"
                              selectionColor="red"
                              underlineColor="#19BEED"
                            // dense="64dp"
                              style={styles.inputStyle}
                              onChangeText={(LimitHour) =>
                                setLimitHour(VTime)
                              }
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              ref={LimitHourInputRef}
                              onSubmitEditing={Keyboard.dismiss}
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              />

                       </View>

                  

                   {/* Limit Hour */}


                  
                    {/* button */}
                          <TouchableOpacity onPress={() => navigation.pop()}
                              style={[customstyles.buttonStyle,customstyles.mt50]}
                              activeOpacity={0.5}
                            >
                              <Text style={customstyles.buttonTextStyle}>Create Schedule</Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={() => navigation.pop()}
                              style={[customstyles.mt20,customstyles.center,customstyles.flexrow]}
                              activeOpacity={0.5}
                            >
                              <Text style={styles.discardTextStyle}>Discard</Text>
                          </TouchableOpacity>


                     {/* button */}



                     
             
             
             
             
             
             
             
             
             
             </View>

              

             
           
            </ScrollView>        
        </SafeAreaView>
      
    );
  
}


export default AddScheduleScreen;


const styles = StyleSheet.create({
    
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
  }


   
});


