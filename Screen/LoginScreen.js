import React, {useState, createRef, useRef, useEffect} from 'react';
import {
  StyleSheet, 
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  
  
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Components/Loader';
import customstyles from "../assets/Css/Custom";
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';



const LoginScreen = ({navigation}) => {
  

  const [authenticated, setAuthenticated] = useState(false);
  const [PhoneNo, setPhoneNo] = useState('');
  const [Password, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();


  const handleRegisterSubmitPress = () => {
     navigation.navigate('RegisterScreen')
  }
   

  const handleSubmitPress = () => {
    setErrortext('');
    if (!PhoneNo) {
      alert('Please fill PhoneNo');
      return;
    }
    if (!Password) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
      AsyncStorage.setItem('PhoneNo', PhoneNo);
      navigation.navigate('MyTabs')
  };

  return (
    <View style={[styles.mainBody]}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
           flex: 1,
           justifyContent: 'center',
           alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
             <Image
                source={require('../assets/login-logo.png')}
                style={{
                  width: '100%',                
                  resizeMode: 'contain',
                  marginTop: 0
                }}
              />
              <Image
                source={require('../assets/logo.png')}
                style={{
                  width: '40%',
                  height: 50,
                  resizeMode: 'contain',
                  margin: 0,
                }}
              />
            </View>
            
            <View style={styles.SectionStyle}>
             <TextInput
                theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                mode="outlined"
                label="Phone No."
                placeholder="Enter Phone No."
                placeholderTextColor="#999CAD"
                outlineColor="#E8E6EA"
                selectionColor="red"
                underlineColor="#19BEED"
               // dense="64dp"
                style={styles.inputStyle}
                 onChangeText={(PhoneNo) =>
                  setPhoneNo(PhoneNo)
                }
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                />

            </View>
             <View style={styles.SectionStyle}>
              <TextInput
                theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                mode="outlined"
                label="Password"
                placeholder="Enter Password"
                placeholderTextColor="#999CAD"
                outlineColor="#E8E6EA"
                selectionColor="#000"
                underlineColor="#19BEED"
                style={styles.inputStyle}
                onChangeText={(Password) =>
                  setUserPassword(Password)
                }              
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>

            {/* <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(PhoneNo) =>
                  setPhoneNo(PhoneNo)
                }
                placeholder="Enter Phone No." 
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
              
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(Password) =>
                  setUserPassword(Password)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View> */}
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableOpacity>

         

            <Text style={styles.spanTextStyle}>
               Or
            </Text>

            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Create an account?
            </Text>

 
          

            
          </KeyboardAvoidingView>
        </View>
          <View style={styles.bottomContainer}>
                <Text style={[styles.helpTextStyle]} >
                <Image source={require('../assets/Info.png')} />
                   Get Help
                </Text>
           
            </View>
             
          
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  
  },
  buttonStyle: {
    backgroundColor: '#24A6F8',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#24A6F8',
    height: 40,
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    // marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    padding: 10,
    fontSize: 15,
  },
  inputStyle: {
    flex: 1,
    color: '#0F172A',
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderWidth: 1,
    // borderRadius: 15,
    //height:52,
    justifyContent:'center',
    borderColor: '#E8E6EA',
    backgroundColor: '#fff',
    
  },
  registerTextStyle: {
    color: '#19BEED',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
  
  },
   forgotTextStyle: {
    color: '#00c9a7',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    //padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  spanTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    fontSize: 14,
    alignSelf: 'center',
    color:'#999CAD',
    marginTop: 20,
    marginBottom: 20
  },
   helpTextStyle:{
     color: '#10B981',
     fontSize: 13,
     textAlign: 'center',
     alignSelf: 'center',
   },
   bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30
 },
  textLabel:{
    position: 'absolute',
    top: -10,
    left: 15
    
  }

});