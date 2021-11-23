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
//import { RadioButton } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";
//import {RadioGroup, RadioButton} from 'react-native-custom-radio-button'
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

DropDownPicker.setListMode("SCROLLVIEW");
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 

//const SpecialtiesScreen = ({navigation}) => { 

 const datalist = [
      {id : 1, label: 'General Physician', value: 'General Physician', checked: false},
      {id : 2, label: 'General Surgery', value: 'General Surgery', checked: false},
      {id : 3, label: 'URO Surgery', value: 'URO Surgery', checked: false },
      {id : 4, label: 'Radiology', value: 'Radiology', checked: false},
      {id : 5, label: 'Dermatology', value: 'Dermatology', checked: true},
      {id : 6, label: 'Obstetric and Gynaecology', value: 'Obstetric and Gynaecology', checked: false},

    ];

   let bouncyCheckboxRef: BouncyCheckbox | null = null;


class SpecialtiesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specialtydatas: datalist,
      checkedspecialties: []
    };
  }  
    

   

//    const [specialtydatas, setspecialtydatas] = useState(datalist);

 //
   

     toggleCheckbox = (id) =>{       
        const checkedHashtags = this.state.specialtydatas.find((specialtydatas) => specialtydatas.id === id);
        checkedHashtags.checked = !checkedHashtags.checked;
        const checkboxes = Object.assign({}, this.state.specialtydatas, checkedHashtags);
        this.setState({ checkboxes });
        // const checkedspec = this.state.specialtydatas.find((specialtydatas) => specialtydatas.checked === true);
        // console.log(checkedspec);
        // this.setState({ checkedspec });
      
       
   };
   
   render(){
    return (
        <SafeAreaView style={[customstyles.flex1,customstyles.screenbgColor]}>          
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={[customstyles.mt20,customstyles.ml25,customstyles.mr25,customstyles.mb20]}>
            
                  <Text style={styles.schTitle}>
                     Specialties
                  </Text>
                  <Text style={[styles.schP,customstyles.mt10]}>
                     Please fill your information completely.
                  </Text>
                  
                   <View style={customstyles.mt30}>
                        {
                            this.state.specialtydatas.map((item, index) => (
                            <BouncyCheckbox
                                key = {index}   
                                style={{ marginTop: 16 }}
                                // ref={(ref: any) => (bouncyCheckboxRef = ref)}
                                isChecked={item.checked}
                                text={item.label}
                                disableBuiltInState
                                onPress={() => this.toggleCheckbox(item.id)}
                                fillColor="#19BEED"
                                unfillColor="#FFFFFF"
                                size={30}
                             
                            />

                            ))
                        }


                   </View>

             
                     
                        {/* button */}
                        <View style={customstyles.mt40}>
                             <TouchableOpacity
                                onPress={() => 
                                    this.props.navigation.navigate('EditProfileScreen', {
                                        specialtyArray: this.state.specialtydatas,
                                    })
                                
                                }
                                style={[customstyles.buttonStyle, customstyles.mt10]}
                                activeOpacity={0.5}>
                                <Text style={customstyles.buttonTextStyle}>Save</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                onPress={() => this.props.navigation.pop()}
                                style={[
                                    customstyles.mt20,
                                    customstyles.center,
                                    customstyles.flexrow,
                                ]}
                                activeOpacity={0.5}>
                                <Text style={styles.discardTextStyle}>Discard</Text>
                            </TouchableOpacity>

                        </View>
                          
                            {/* button */}
             
             
                  </View>

              

             
           
            </ScrollView>        
        </SafeAreaView>
     )
   };
  
}


export default SpecialtiesScreen;


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

  
});
