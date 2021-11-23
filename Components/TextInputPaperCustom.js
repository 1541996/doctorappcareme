import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInput } from 'react-native-paper';

export default class TextInputPaperCustom extends Component{

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
                    mode={this.props.mode}
                    label={this.props.label}
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
        marginTop: 20,
  
    },
 
    inputStyle: {
        flex: 1,
        color: '#0F172A',
        justifyContent:'center',
        borderColor: '#E8E6EA',
        backgroundColor: '#f7f7f7',
    
        
    },
    
});