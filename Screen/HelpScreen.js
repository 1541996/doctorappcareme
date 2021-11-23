/*This is an Example of Calling Other Class Function in React Native*/
import React, { Component } from 'react';
import { Text, View, Button, Platform, Image,
 StyleSheet, ActivityIndicator,RefreshControl, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import customstyles from "../assets/Css/Custom";



export default class HelpScreen extends Component {


 LoadingIndicatorView() {
  return(
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00c9a7" />
      </View>);   
  }

  componentDidMount(){
     this.props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <View
            style={[
              customstyles.flex1,
              customstyles.flexrow,
              customstyles.pt25,
              customstyles.ml20,
            ]}>
            <Image
              style={[customstyles.mt5, customstyles.mr20]}
              source={require('../assets/ArrowLeft.png')}
            />
            <Text style={customstyles.closeText}>Close</Text>
          </View>
        </TouchableOpacity>
      ),
    });

  }

  render() {
    return (
       

      <View style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={{flex: 1}}
           
          >
              <WebView 
                
                 source={{ uri: 'https://app.caremebot.com/helpandsupport' }}
                renderLoading={this.LoadingIndicatorView}
                startInLoadingState={true}
              
              />
   
          </ScrollView>
      </View>
             
    
      
     
    );
  }
}



const styles = StyleSheet.create({
 
  lefticon:{
    paddingLeft:10,
    
  },

container: {
     position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
  
});

