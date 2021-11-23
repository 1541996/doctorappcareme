import React, {useState, useEffect, createRef} from 'react';
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
import {Appbar} from 'react-native-paper';
import {Card} from 'react-native-paper';
import {Chip} from 'react-native-paper';
import customstyles from '../assets/Css/Custom';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {TextInput} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import {RadioButton} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
//import {RadioGroup, RadioButton} from 'react-native-custom-radio-button'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let PhoneInputRef = createRef();
let AddressInputRef = createRef();

class HelpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CName: '',
      Phone: '',
      Address: '',
      count: 0,
      filePath: {},
      modalVisible: false,
      textInput: [],
      inputData: [],
    };
  }

  // text dynaically input
  //function to add TextInput dynamically
  addTextInput = index => {
    let textInput = this.state.textInput;
    textInput.push(
      <TextInput
        key={index}
        style={{marginTop: 10}}
        theme={{
          roundness: 15,
          colors: {
            primary: '#19BEED',
            underlineColor: 'transparent',
            placeholder: '#999CAD',
          },
        }}
        mode="outlined"
        label="Contact Phone no."
        placeholder="Contact Phone no."
        placeholderTextColor="#999CAD"
        outlineColor="#E8E6EA"
        selectionColor="red"
        underlineColor="#19BEED"
        onChangeText={text => this.addValues(text, index)}
      />,
    );
    this.setState({textInput});
  };

  //function to remove TextInput dynamically
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({textInput, inputData});
  };

  //function to add text from TextInputs into single array
  addValues = (text, index) => {
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach(element => {
        if (element.index === index) {
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        inputData: dataArray,
      });
    } else {
      dataArray.push({text: text, index: index});
      this.setState({
        inputData: dataArray,
      });
    }
  };

  // text dynaically input


  // file upload
  async requestCameraPermission() {
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
  }

  requestExternalWritePermission = async () => {
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

  captureImage() {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
      includeBase64: true,
    };
    let isCameraPermitted = this.requestCameraPermission();
    let isStoragePermitted = this.requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
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
        // setModalVisible(!modalVisible);
        // setFilePath(response.assets[0]);
        this.setState({filePath: response.assets[0]});
        this.setState({modalVisible: !this.state.modalVisible});
      });
    }
  }

  chooseFile(type) {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
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
     

      this.setState({filePath: response.assets[0]});
      this.setState({modalVisible: !this.state.modalVisible});
    });
  }

  // file upload

  render() {
    return (
      <SafeAreaView style={[styles.maincontainer, customstyles.screenbgColor]}>
        <ScrollView style={styles.scrollView}>
          <View
            style={[
              customstyles.mt20,
              customstyles.ml25,
              customstyles.mr25,
              customstyles.mb20,
            ]}>
            <Text style={styles.schTitle}>Add Clinic</Text>
            <Text style={[styles.schP, customstyles.mt10]}>
              Please fill your clinic information completely.
            </Text>

            {/* file upload */}

            {/* modal */}

            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  //  setModalVisible(!modalVisible);
                  this.setState({modalVisible: !this.state.modalVisible});
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({modalVisible: !this.state.modalVisible})
                  }
                  style={{
                    height: windowHeight - 110,
                    width: windowWidth,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></TouchableOpacity>
                <View style={styles.bottomModal}>
                  <View style={styles.modalView}>
                    <View style={customstyles.flexrow}>
                      <View>
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => this.captureImage('photo')}>
                          <Text style={styles.modalText}>Take Photo</Text>
                        </Pressable>
                      </View>

                      <View style={customstyles.ml10}>
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => this.chooseFile('photo')}>
                          <Text style={styles.modalText}>
                            Choose From Gallery
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>

            {/* modal */}

            <View
              style={[
                customstyles.flexrow,
                customstyles.center,
                customstyles.mt20,
              ]}>
              <Pressable
                onPress={() =>
                  this.setState({modalVisible: !this.state.modalVisible})
                }>
                <Image
                  source={
                    this.state.filePath.base64
                      ? {
                          uri:
                            'data:image/jpeg;base64,' +
                            this.state.filePath.base64,
                        }
                      : {
                          uri: 'https://caremeclient.azurewebsites.net/Content/CareMETele/hospitallogo.jpg',
                        }
                  }
                  style={styles.imageStyle}
                />

                <Image
                  source={require('../assets/camera.png')}
                  style={styles.cameraIcon}
                />
              </Pressable>
            </View>

            {/* file upload */}

          

            {/* Name */}

            <View style={[styles.SectionStyle]}>
              <TextInput
                theme={{
                  roundness: 15,
                  colors: {
                    primary: '#19BEED',
                    underlineColor: 'transparent',
                    placeholder: '#999CAD',
                  },
                }}
                mode="outlined"
                label="Clinic Name"
                placeholder="Clinic Name"
                placeholderTextColor="#999CAD"
                outlineColor="#E8E6EA"
                selectionColor="red"
                underlineColor="#19BEED"
                // dense="64dp"
                style={styles.inputStyle}
                onChangeText={CName =>
                  //  setCName(CName)
                  this.setState({CName: CName})
                }
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={() =>
                  PhoneInputRef.current && PhoneInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>

            {/* Name */}

            {/* Phone */}
            <View style={styles.SectionStyle}>
              <TextInput
                theme={{
                  roundness: 15,
                  colors: {
                    primary: '#19BEED',
                    underlineColor: 'transparent',
                    placeholder: '#999CAD',
                  },
                }}
                mode="outlined"
                label="Contact Phone no."
                placeholder="Contact Phone no."
                placeholderTextColor="#999CAD"
                outlineColor="#E8E6EA"
                selectionColor="red"
                underlineColor="#19BEED"
                // dense="64dp"
                style={styles.inputStyle}
                onChangeText={Phone =>
                  // setPhone(Phone)
                  this.setState({Phone: Phone})
                }
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                ref={PhoneInputRef}
                onSubmitEditing={() =>
                  AddressInputRef.current && AddressInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => this.addTextInput(this.state.textInput.length)}>
                <View style={[customstyles.flexrow, customstyles.mt10]}>
                  <Image source={require('../assets/Plus.png')} />
                  <Text
                    style={[
                      styles.phaddtext,
                      customstyles.ml10,
                      customstyles.mt3,
                    ]}>
                    Add new phone no
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {this.state.textInput.map(value => {
              return value;
            })}

            {/* {textInputData && (
                textInputData.map((value,index) => {return <View>{value}</View>})
                    onPress={() => addTextInput(textInputData.length)}
                )}  */}

            {/* Phone */}

            {/* Address */}
            <View style={styles.SectionStyle}>
              <TextInput
                theme={{
                  roundness: 15,
                  colors: {
                    primary: '#19BEED',
                    underlineColor: 'transparent',
                    placeholder: '#999CAD',
                  },
                }}
                mode="outlined"
                label="Address"
                placeholder="Enter Address"
                placeholderTextColor="#999CAD"
                outlineColor="#E8E6EA"
                selectionColor="red"
                underlineColor="#19BEED"
                // dense="64dp"
                style={styles.inputStyle}
                onChangeText={Address =>
                  // setAddress(Address)
                  this.setState({Address: Address})
                }
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                ref={AddressInputRef}
                onSubmitEditing={Keyboard.dismiss}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                multiline={true}
              />
            </View>

            {/* Address */}

            <View
              style={[
                customstyles.flexrow,
                customstyles.mt50,
                customstyles.p10,
              ]}>
              <Icon
                name="information-outline"
                size={25}
                style={[styles.iconWidth, customstyles.mt5]}
              />
              <Text
                style={[
                  customstyles.span,
                  customstyles.mt5,
                  customstyles.flex1,
                ]}>
                You can add the clinic schedule of yours after you finish
                creating clinic information
              </Text>
            </View>

            {/* button */}
            <TouchableOpacity
              onPress={() => this.props.navigation.pop()}
              style={[customstyles.buttonStyle, customstyles.mt10]}
              activeOpacity={0.5}>
              <Text style={customstyles.buttonTextStyle}>Create Clinic</Text>
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

            {/* button */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HelpScreen;

const styles = StyleSheet.create({
  schTitle: {
    fontSize: 34,
    lineHeight: 40,
    color: '#333333',
  },

  schP: {
    fontSize: 15,
    lineHeight: 20,
    color: '#999CAD',
  },

  schName: {
    fontSize: 15,
    lineHeight: 20,
    color: '#333',
  },

  label: {
    fontSize: 15,
    lineHeight: 20,
    color: '#999CAD',
  },

  SectionStyle: {
    flexDirection: 'row',
    marginTop: 20,
  },

  inputStyle: {
    flex: 1,
    color: '#0F172A',
    justifyContent: 'center',
    borderColor: '#E8E6EA',
    backgroundColor: '#f7f7f7',
  },

  discardTextStyle: {
    color: '#19BEED',
    fontSize: 13,
    lineHeight: 16,
  },

  iconWidth: {
    width: 40,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  bottomModal: {
    flex: 1,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },

  modalView: {
    margin: 0,
    backgroundColor: 'white',
    // borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: 110,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalText: {
    color: '#fff',
  },
  imageStyle: {
    width: 89,
    height: 89,
    borderRadius: 25,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    left: 60,
    top: 60,
  },
  phaddtext: {
    fontSize: 12,
    color: '#19BEED',
    lineHeight: 16,
  },
});
