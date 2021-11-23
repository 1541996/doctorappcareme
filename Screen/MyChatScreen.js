import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Dimensions
} from 'react-native';
//import { TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const win = Dimensions.get('window');

export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
        {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, 
        {id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met" }, 
        {id:10, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met", messagetype: "file", url: "https://kktstroage.azureedge.net/yammo/careme/staff/4fe3d614-c03b-4ea5-b8a7-139995da561c.png"}, 
        {id:11, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
        {id:12, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
        {id:13, date:"9:50 am", type:'out',  message: "Lorem ipsum dolor sit a met", messagetype: "file", url: "https://kktstroage.azureedge.net/yammo/careme/staff/c2c285b5-4150-4eb3-8010-7f6d3073bfaf.png"},
      ],
      newValue: '',
      height: 50
    };
  }

  renderDate = (date) => {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }

  updateSize = (height) => {
    this.setState({
      height
    });
  }

  render() {

    const {newValue, height} = this.state;

    let newStyle = {
      height
    }

    return (
      <View style={styles.container}>
         <LinearGradient
                start={{x: 0, y: 3}}
                end={{x: 1, y: 2}}           
                colors={['#0BE9FE', '#9265FD']}
                style={styles.linearGradient}
                >
                <View style={[styles.customChatHeader]}>
                    <View style={[styles.chatHeaderContent]}>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                                <Image source={require('../assets/chatLeftCircle.png')}   />
                            </TouchableOpacity>
                            
                        
                        </View>
                        <View style={styles.chatHeaderInfo}>
                            <Text style={styles.chatUserName}>Zaw Zaw</Text>
                            <Text style={styles.chatUserAge}>Age 30 </Text>
                        </View>
                        <View>
                            <Image source={require('../assets/chatInfo.png')} />
                        </View>
                      
                    </View>
                  </View>
                   
          </LinearGradient>
      
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            let itemText =  inMessage ? styles.itemInText: styles.itemOutText;
            let messageType = item.messagetype === 'file';
            return (
              <View style={[styles.item, itemStyle]}>
                {/* {!inMessage && this.renderDate(item.date)} */}
                 {!messageType ?  
                  <View style={[styles.balloon]}>
                     <Text style={itemText}>{item.message}</Text>
                  </View>
                 : 
                 <View style={[styles.balloon]}>
                       <Image
                          style={{
                            width: win.width/2,
                            height: win.width/2,
                            resizeMode: "contain",
                            alignSelf: "center",
                            borderWidth: 1,
                            borderRadius: 20,
                          }}
                          source={{uri: item.url }}
                          resizeMode="stretch"
                        />
                       {/* <Image source={{uri: item.url  }} style={{ width:150,height:'auto' }} resizeMode="contain"  /> */}
                   
                  </View>
                 }
                

                  
                
                {/* {inMessage && this.renderDate(item.date)} */}
              </View>
            )
          }}/>
        <View style={styles.footer}>
          <TouchableOpacity>
               <Image source={require('../assets/chatFileUpload.png')}  />
            </TouchableOpacity>
          <View style={[styles.inputContainer,newStyle]}>
            <TextInput style={[styles.inputs,newStyle]}
                editable={true}
                multiline={true}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={(name_address) => this.setState({name_address})}
                onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
                />
               <TouchableOpacity>
                   <Image source={require('../assets/Send.png')} style={styles.sendIcon}  />
                 </TouchableOpacity>
          </View>

            {/* <TouchableOpacity style={styles.btnSend}>
              <Image source={{uri:"https://img.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
            </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 25,
  },
  footer:{
    flexDirection: 'row',
    minHeight:80,
    backgroundColor: '#f7f7f7',
    paddingHorizontal:25,
    padding:5,
    alignItems:'center',
    borderTopLeftRadius:15,
    borderTopRightRadius:15
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:15,  
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginLeft:10,
    elevation:2,
    shawdowOffset:{
      width:0,
      height:7
    },
    shadowOpacity:0.1,
    shadowRadius:2
  },

  inputs:{
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
    
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start',
    backgroundColor:"#E8E6EA",
   
  },
  itemInText:{
    fontSize:15,
    color:'#555866',
    lineHeight:20
    
  },
   itemOutText:{
    fontSize:15,
    color:'#fff',
    lineHeight:20
    
  },
  itemOut: {
    alignSelf: 'flex-end',
    backgroundColor:"#24A6F8",
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"red",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
   // borderRadius:15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    padding:5,
  },
  customChatHeader:{
   // backgroundColor:'#17D2FE',
    height:90,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal:25

  },
  chatHeaderContent:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    flex:1
  },
  chatUserName:{
    fontSize:17,
    color:'#fff',
    lineHeight:24
  },
  chatUserAge:{
    fontSize:11,
    color:'#fff',
    lineHeight:16,
    opacity:0.6
  },
  chatHeaderInfo:{
    flex:2,
    marginLeft:20
  },
  sendIcon:{
    marginRight:16

  },
  linearGradient:{
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  }
}); 