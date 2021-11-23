import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager, Dimensions, Image} from "react-native";
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";



const { width } = Dimensions.get('window');

const IMAGE_WIDTH = (width - 24) / 3;

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          //data: props.item,
         
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
       
         <Image
            width={IMAGE_WIDTH}
            source={{
                uri:
                this.props?.type === 'video'
                    ? this.props?.thumbnail ?? ''
                    : 'file://' + this.props.realPath,
            }}
            style={styles.media}
            />
         
     
    )
  }

 
}

const styles = StyleSheet.create({
   
   
   media: {
  //  marginLeft: 6,
    marginTop: 10,
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    marginBottom: 6,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius:20
  },
  
    
});