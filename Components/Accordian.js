import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
         // data: props.data,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.acctitle]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.DARKGRAY} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <Text style={styles.accbody}>{this.props.data}</Text>
                // <View style={{}}>
                //     <FlatList
                //     data={this.state.data}
                //     numColumns={1}
                //     scrollEnabled={false}
                //     renderItem={({item, index}) => 
                //         <View>
                //             <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnActive : styles.btnInActive]} onPress={()=>this.onClick(index)}>
                //                 <Text style={[styles.font, styles.itemInActive]} >{item.key}</Text>
                //                 <Icon name={'check-circle'} size={24} color={ item.value ? Colors.GREEN :  Colors.LIGHTGRAY } />
                //             </TouchableOpacity>
                //             <View style={styles.childHr}/>
                //         </View>
                //     }/>
                // </View>
            }
            
       </View>

     
    )
  }

  onClick=(index)=>{
    const temp = this.state.data.slice()
    temp[index].value = !temp[index].value
    this.setState({data: temp})
  }

  toggleExpand=()=>{
   // console.log("here");
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
   
    button:{
        width:'100%',
        height:54,
        alignItems:'center',
        paddingLeft:35,
        paddingRight:35,
        fontSize: 12,
    },
    acctitle:{
        fontSize: 16,
        fontWeight:'bold',
        color: Colors.DARKGRAY,
    },
    accbody:{
        fontSize: 13,
        fontWeight:'bold',
        color: Colors.LIGHTGRAY,
        lineHeight:25,
        padding:25
    },
    itemActive:{
        fontSize: 12,
        color: Colors.GREEN,
    },
    itemInActive:{
        fontSize: 12,
        color: Colors.DARKGRAY,
    },
    btnActive:{
        borderColor: Colors.GREEN,
    },
    btnInActive:{
        borderColor: Colors.DARKGRAY,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:25,
        alignItems:'center',
        backgroundColor: Colors.CGRAY,
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: Colors.GRAY,
    },
    parentHr:{
        height:1,
        color: Colors.WHITE,
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor: Colors.LIGHTGRAY,
        width:'100%',
    },
    colorActive:{
        borderColor: Colors.GREEN,
    },
    colorInActive:{
        borderColor: Colors.DARKGRAY,
    }
    
});