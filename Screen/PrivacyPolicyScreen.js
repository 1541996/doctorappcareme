import React, { Component } from 'react';
import {
  BackHandler,
  Platform,
  Button,
  StyleSheet,
  View,
  Text,
   ActivityIndicator,
   ScrollView,
   RefreshControl,
   TouchableOpacity,
   Image
} from 'react-native';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import customstyles from "../assets/Css/Custom";

// import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class PrivacyPolicyScreen extends Component {
  webView = {
    canGoBack: false,
    ref: null,
  }

  
  state = {
    refreshing: false,
    enablePTR: true
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
     this.webView.ref.reload();
    setTimeout(() => {
        this.setState({refreshing: false});
      }, 1500);
  }



  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }

  componentDidMount() {
   
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

    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }




 LoadingIndicatorView() {
  return(
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00c9a7" />
      </View>);   
  }


  onScroll = (event) =>  {
   //  alert("here");
    
    const { nativeEvent } = event;
    const { contentOffset } = nativeEvent;
    const { y } = contentOffset;
       
    console.log(y);
 
    if(y <= 0){
       this.setState({enablePTR: true});
    }else{
       this.setState({enablePTR: false});
    }
  }



  render() {


    return (
      

      <View style={{flex: 1}}>
              <ScrollView
                contentContainerStyle={{flex: 1}}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                    enabled={this.state.enablePTR}
                  />
                }
              >
                <WebView
                    onScroll={this.onScroll}
                    source={{ uri: `https://app.caremebot.com/privacypolicy` }}
                    ref={(webView) => { this.webView.ref = webView; }}
                    renderLoading={this.LoadingIndicatorView}
                    startInLoadingState={true}
                    // onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack;
                    //                                           this.props.navigation.setOptions({
                    //                                             headerLeft: () => (
                    //                                             this.webView.canGoBack && this.webView.ref ?  
                    //                                                 <Icon name="arrow-left" color="#fff" size={26} style={styles.lefticon}   
                    //                                                   onPress={() => this.webView.ref.goBack() }  
                    //                                                 /> : null
                                                              
                    //                                         ),
                    //                                         });
                    //                                       }}
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

