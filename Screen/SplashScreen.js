// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView
 // AsyncStorage
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';



const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('PhoneNo').then((value) =>    
        navigation.replace(
          value === null ? 'Auth' : 'MyTabs'
        ),
      )
    
    }, 5000);
  }, []);

  return (
  
      <View style={styles.container}>   
          <LinearGradient
                //  start={{x: 0, y: 0}}
                //  end={{x: 1, y: 0}}
                // start={{ x: -1, y: 0 }}
                // end={{ x: 1, y: 0 }}
                start={{x: 1.5, y: 0.4}}
                end={{x: 0.5, y: 1.0}}           
                colors={['#EA9C92', '#2EB4FC', '#9099F2']}
                style={styles.linearGradient}
                >
              
                    <Image
                      source={require('../assets/careme-logo-white.png')}
                      style={{width: '40%', resizeMode: 'contain',  borderRadius: 100 }}
                    />
                  
                    <ActivityIndicator
                      animating={animating}
                      color="#FFFFFF"
                      size="large"
                      style={styles.activityIndicator}
                    />
            
          </LinearGradient>
        </View>


    
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    //backgroundColor: '#24A6F8',
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 30, //Here is the trick
  },
    WelText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
 
  },
   linearGradient: {
    flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   
  },
  
});