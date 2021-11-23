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
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';


DropDownPicker.setListMode("SCROLLVIEW");
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 

const EditProfileScreen = ({route, navigation}) => { 
  
    const { specialtyArray, setspecialtyArray } = route.params;
    
    const [modalVisible, setModalVisible] = useState(false);

    const [DrTitle, setDrTitle] = useState('');
    const [Name, setName] = useState('');
    const [NameMM, setNameMM] = useState('');
    const [Phone, setPhone] = useState('');
    const [LicenseID, setLicenseID] = useState('');
    const [Qualification, setQualification] = useState('');
   
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const NameInputRef = createRef();
    const NameMMInputRef = createRef();
    const PhoneInputRef = createRef();
    const LicenseIDInputRef = createRef();
    const QualificationInputRef = createRef();

    const [value, setValue] = useState('Nothing selected');


    const [open, setOpen] = useState(false);
    const [DrTitleValue, setDrTitleValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Dr.', value: 'Dr.'},
      {label: 'Professor', value: 'Professor'}
    ]);


    const [openSpecialty, setopenSpecialty] = useState(false);
    const [specialties, setspecialties] = useState(null);
    const [specialtydatas, setspecialtydatas] = useState([
      {label: 'General Physician', value: 'General Physician'},
      {label: 'General Surgery', value: 'General Surgery'},
      {label: 'URO Surgery', value: 'URO Surgery'},
      {label: 'Radiology', value: 'Radiology'},
      {label: 'Dermatology', value: 'Dermatology'},
      {label: 'Obstetric and Gynaecology', value: 'Obstetric and Gynaecology'},

    ]);


   const [Gender, setGender] = useState('');
   const onSelect = (index, value) => {
     setGender(value);
    };

    // file upload
           const [filePath, setFilePath] = useState({});

            const requestCameraPermission = async () => {
                if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                    );
                    // If CAMERA Permission is granted
                    return granted === PermissionsAndroid.RESULTS.GRANTED;
                } catch (err) {
                    console.warn(err);
                    return false;
                }
                } else return true;
            };

            const requestExternalWritePermission = async () => {
                if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                    );
                    // If WRITE_EXTERNAL_STORAGE Permission is granted
                    return granted === PermissionsAndroid.RESULTS.GRANTED;
                } catch (err) {
                    console.warn(err);
                    alert('Write permission err', err);
                }
                return false;
                } else return true;
            };

            const captureImage = async (type) => {
                let options = {
                mediaType: type,
                maxWidth: 300,
                maxHeight: 550,
                quality: 1,
                videoQuality: 'low',
                durationLimit: 30, //Video max duration in seconds
                saveToPhotos: true,
                includeBase64: true
                };
                let isCameraPermitted = await requestCameraPermission();
                let isStoragePermitted = await requestExternalWritePermission();
                if (isCameraPermitted && isStoragePermitted) {
                launchCamera(options, (response) => {
                    console.log('Response = ', response);

                    if (response.didCancel) {
                    alert('User cancelled camera picker');
                    return;
                    } else if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                    } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                    } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                    }
                    // console.log('base64 -> ', response.base64);
                    // console.log('uri -> ', response.uri);
                    // console.log('width -> ', response.width);
                    // console.log('height -> ', response.height);
                    // console.log('fileSize -> ', response.fileSize);
                    // console.log('type -> ', response.type);
                    // console.log('fileName -> ', response.fileName);
                     setModalVisible(!modalVisible);
                     setFilePath(response.assets[0]);
                });
                }
            };

            const chooseFile = (type) => {
                let options = {
                mediaType: type,
                maxWidth: 300,
                maxHeight: 550,
                quality: 1,
                includeBase64: true
                };
                launchImageLibrary(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    alert('User cancelled camera picker');
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                }
                // console.log('base64 -> ', response.assets[0].base64);
                // console.log('uri -> ', response.assets[0].uri);
                // console.log('width -> ', response.assets[0].width);
                // console.log('height -> ', response.assets[0].height);
                // console.log('fileSize -> ', response.assets[0].fileSize);
                // console.log('type -> ', response.type);
                // console.log('fileName -> ', response.fileName);
                 setModalVisible(!modalVisible);
                 setFilePath(response.assets[0]);
               
                });
                };
       
    // file upload
    return (
        <SafeAreaView style={[styles.maincontainer,customstyles.screenbgColor]}>          
          <ScrollView style={styles.scrollView}>
            <View style={[customstyles.mt20,customstyles.ml25,customstyles.mr25,customstyles.mb20]}>
            
                  <Text style={styles.schTitle}>
                     Edit Profile
                  </Text>
                  <Text style={[styles.schP,customstyles.mt10]}>
                     Please fill your information completely.
                  </Text>
                  
                  {/* file upload */}

                  {/* modal */}
                      
                      <View style={styles.centeredView}>
                      <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                          Alert.alert("Modal has been closed.");
                          setModalVisible(!modalVisible);
                        }}
                        
                      >
                        <TouchableOpacity
                          onPress={() =>  setModalVisible(!modalVisible)}
                            style={{
                              height: windowHeight - 110,
                              width: windowWidth,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                        </TouchableOpacity>
                        <View style={styles.bottomModal}>
                          <View style={styles.modalView}>
                            <View style={customstyles.flexrow}>
                                <View>
                                    <Pressable
                                      style={[styles.button, styles.buttonClose]}
                                      onPress={() => captureImage('photo')}>
                                     <Text style={styles.modalText}>Take Photo</Text>
                                     </Pressable>
                                </View>

                                <View style={customstyles.ml10}>
                                     <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => chooseFile('photo')}>
                                        <Text style={styles.modalText}>Choose From Gallery</Text>
                                      </Pressable>
                                </View>
                                
                              
                                  
                                
                            </View>
                            
                          </View>
                        </View>
                      </Modal>
                     
                      
                    </View>
                    
                  {/* modal */}

               
                       <View style={[customstyles.flexrow,customstyles.center,customstyles.mt20]}>
                            <Pressable onPress={() => setModalVisible(true)}>
                                <Image source={filePath.base64
                                  ? { uri: 'data:image/jpeg;base64,' + filePath.base64}
                                  : { uri: 'https://caremeclient.azurewebsites.net/Content/CareMEWebsiteImage/User-girl.jpg' }}
                                    style={styles.imageStyle}
                                
                                  />

                                  <Image source={require('../assets/camera.png')} style={styles.cameraIcon} />                                 
                            </Pressable>                         
                        </View>
                                            
                   {/* file */}

                   {/* file upload */}

                     {/* Dr Title */}
                      <View style={[styles.SectionStyle,customstyles.mt40]}>

                     <DropDownPicker
                        open={open}
                        value={DrTitleValue}
                        items={items}
                        setOpen={setOpen}
                        setValue={setDrTitleValue}
                        setItems={setItems}
                        style={customstyles.dropDownCustom}
                        dropDownContainerStyle={{
                          borderWidth: 1,
                          borderRadius:15,
                          borderColor: '#E8E6EA'
                        }}
                        translation={{
                          PLACEHOLDER: "Your Title"
                        }}
                        textStyle={{
                          fontSize: 17
                        }}

                      />
                     

                      </View>
                       {/* Dr Title */}
                    
                    {/* Pt amount */}

                       
                        {/* <View style={[styles.SectionStyle,customstyles.mt40]}>
                          <TextInput
                              theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                              mode="outlined"
                              label="Dr. Title"
                              placeholder="Enter Dr. Title"
                              placeholderTextColor="#999CAD"
                              outlineColor="#E8E6EA"
                              selectionColor="red"
                              underlineColor="#19BEED"
                            // dense="64dp"
                              style={styles.inputStyle}
                              onChangeText={(DrTitle) =>
                                setDrTitle(DrTitle)
                              }
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              onSubmitEditing={() =>
                                NameInputRef.current &&
                                NameInputRef.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              />

                          </View>  */}

                  {/* Pt amount */}

                   
                   {/* Gender checkbox */}
                        
                   <View style={[customstyles.mt30]}>
                        
                    
                        {/* <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                            <View style={customstyles.flexrow}>
                                <RadioButton value="Male" />
                                <Text style={[customstyles.mt5,customstyles.chklbtext]}>Male</Text>
                                
                                <RadioButton value="Female" />
                                <Text style={[customstyles.mt5,customstyles.chklbtext]}>Female</Text>                             
                            </View>
                           
                        </RadioButton.Group> */}
                         <RadioGroup
                               onSelect = {(index, value) => onSelect(index, value)} style={[customstyles.flexrow]} color="#19BEED"
                            >
                              <RadioButton value={'Male'} color="#19BEED" activeColor="#19BEED">
                                <Text>Male</Text>
                              </RadioButton>

                              <RadioButton value={'Female'} color="#19BEED" activeColor="#19BEED">
                                <Text>Female</Text>
                              </RadioButton>

                             
                            </RadioGroup>
                             
                              {/* <Text style={styles.text}>{Gender}</Text> */}
                    </View>

                    
                    {/* Gender checkbox */}


                  {/* Name */}

                       <View style={[styles.SectionStyle]}>
                          <TextInput
                              theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                              mode="outlined"
                              label="Your Name"
                              placeholder="Enter Your Name"
                              placeholderTextColor="#999CAD"
                              outlineColor="#E8E6EA"
                              selectionColor="red"
                              underlineColor="#19BEED"
                            // dense="64dp"
                              style={styles.inputStyle}
                              onChangeText={(Name) =>
                                setName(Name)
                              }
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                             ref={NameInputRef}
                              onSubmitEditing={() =>
                                NameMMInputRef.current &&
                                NameMMInputRef.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              />

                          </View>

                  {/* Name */}

                  {/* NameMM */}
                        <View style={styles.SectionStyle}>
                          <TextInput
                              theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                              mode="outlined"
                              label="Name in Myanmar"
                              placeholder="Enter Name in Myanmar"
                              placeholderTextColor="#999CAD"
                              outlineColor="#E8E6EA"
                              selectionColor="red"
                              underlineColor="#19BEED"
                            // dense="64dp"
                              style={styles.inputStyle}
                              onChangeText={(NameMM) =>
                                setNameMM(NameMM)
                              }
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              ref={NameMMInputRef}
                              onSubmitEditing={() =>
                                PhoneInputRef.current &&
                                PhoneInputRef.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              />

                          </View>


                  {/* Name MM */}

                  {/* Phone */}
                      <View style={styles.SectionStyle}>
                          <TextInput
                              theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                              mode="outlined"
                              label="Phone Number"
                              placeholder="Enter Phone Number"
                              placeholderTextColor="#999CAD"
                              outlineColor="#E8E6EA"
                              selectionColor="red"
                              underlineColor="#19BEED"
                            // dense="64dp"
                              style={styles.inputStyle}
                              onChangeText={(Phone) =>
                                setPhone(Phone)
                              }
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              ref={PhoneInputRef}
                              onSubmitEditing={() =>
                                LicenseIDInputRef.current &&
                                LicenseIDInputRef.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              />

                       </View>

                  {/* Phone */}


                  {/* License ID */}
                       <View style={styles.SectionStyle}>
                          <TextInput
                              theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                              mode="outlined"
                              label="License ID"
                              placeholder="Enter License ID"
                              placeholderTextColor="#999CAD"
                              outlineColor="#E8E6EA"
                              selectionColor="red"
                              underlineColor="#19BEED"
                            // dense="64dp"
                              style={styles.inputStyle}
                              onChangeText={(LicenseID) =>
                                setLicenseID(LicenseID)
                              }
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              ref={LicenseIDInputRef}
                              onSubmitEditing={() =>
                                QualificationInputRef.current &&
                                QualificationInputRef.current.focus()
                              }
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              />

                       </View>
                        {/* License ID */}
                        {/* Qualification */}
                        <View style={[styles.SectionStyle,customstyles.mt30]}>
                          <TextInput
                              theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                              mode="outlined"
                              label="Qualification"
                              placeholder="Enter Qualification"
                              placeholderTextColor="#999CAD"
                              outlineColor="#E8E6EA"
                              selectionColor="red"
                              underlineColor="#19BEED"
                             // dense="64dp"
                              style={styles.inputStyle}
                              onChangeText={(Qualification) =>
                                setQualification(Qualification)
                              }
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              ref={QualificationInputRef}
                              onSubmitEditing={Keyboard.dismiss}
                              underlineColorAndroid="#f000"
                              blurOnSubmit={false}
                              />

                       </View>

                  

                   {/* Qualification */}

                    {/* Specialty */}
                           <View style={[styles.SectionStyle,customstyles.mt30]}>
                                 <TouchableOpacity onPress={() => navigation.pop()}
                                    style={[customstyles.specialtiesButtonStyle]}
                                    activeOpacity={0.5}
                                    onPress = {() => navigation.navigate('SpecialtiesScreen')}
                                  >
                                    <Text style={customstyles.specialtiesButtonTextStyle}>Choose Specialties</Text>
                                    <Icon name="menu-down" color='#000' size={25} style={styles.arrowIcon} />
                                </TouchableOpacity>
                              

                             </View>

                              <View>
                                    {
                                  specialtyArray.map((item, index) => (
                                      item.checked == true ?
                                      <Text style={[customstyles.mt10,styles.specText]} key={index}>{item.label}</Text>
                                      : null
                                  ))
                                }
                              </View>
                                
                                 

                     {/* Specialty */}



               
                  
                    {/* button */}
                          <TouchableOpacity onPress={() => navigation.pop()}
                              style={[customstyles.buttonStyle,customstyles.mt50]}
                              activeOpacity={0.5}
                            >
                              <Text style={customstyles.buttonTextStyle}>Save</Text>
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


export default EditProfileScreen;


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
  },



  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

  bottomModal: {
    flex: 1,
    bottom:0,
    justifyContent: "flex-end",
    alignItems: "center",
    width:'100%',
    
  },

  modalView: {
    margin: 0,
    backgroundColor: "white",
   // borderRadius: 20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:'100%',
    height:110
  
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    color:'#fff'
  },
   imageStyle: {
    width: 89,
    height: 89,
    borderRadius:25
  },
  cameraIcon:{
    position:'absolute',
    bottom:0,
    left:60,
    top:60


  },
  specText:{
    color:'#19BEED',
    fontSize:15
  },
  arrowIcon:{
     position:'absolute',
     right:10, 
     alignItems:'flex-start',
    justifyContent:'center',
  }



   
});
