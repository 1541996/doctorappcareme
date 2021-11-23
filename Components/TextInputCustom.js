import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager, TextInput} from "react-native";
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";


export default class TextInputCustom extends Component{

    constructor(props) {
        super(props);
        this.state = { 
        
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
          <View style={[styles.SectionStyle]}>
                <TextInput
                    theme={{ roundness: 15, colors: {primary: '#19BEED', underlineColor: 'transparent', placeholder: "#999CAD"} }} 
                   
                    placeholder={this.props.placeholder}
                    placeholderTextColor="#999CAD"
                    outlineColor="#E8E6EA"
                    selectionColor="red"
                    underlineColor="#19BEED"
                    style={styles.inputStyle}               
                    autoCapitalize="none"
                    keyboardType="default"
                    returnKeyType="next"
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                    />

            </View>
    )
  }


}
const styles = StyleSheet.create({
   
    SectionStyle: {
        flexDirection: 'row',
        height: 50,
       
   },
 
   inputStyle: {
    flex: 1,
    color: '#000',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#e9e9e9',
    backgroundColor: '#e9e9e9',
  },
    
});