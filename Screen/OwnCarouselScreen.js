import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Modal,
  Pressable,
  PermissionsAndroid,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  SafeAreaView,
  Button,
  ImageBackground,
} from 'react-native';
import {Colors} from '../Components/Colors';
import {Card} from 'react-native-paper';
import customstyles from '../assets/Css/Custom';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');
const IMAGE_WIDTH_LN = 250;

const IMAGE_WIDTH_TI = 140;

export default class OwnCarouselScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            {this.renderLatestNews()}
            {this.renderTunnelInsider()}
        </ScrollView>
      </View>
    );
  }

  renderLatestNews = () => {
    return (
      <View>
        <View style={[customstyles.ml25, customstyles.mr25, customstyles.mt20]}>
          <Text style={[styles.title]}>LATEST NEWS</Text>
        </View>

        <ScrollView horizontal={true} style={[customstyles.mt20]}>
          <View
            style={[customstyles.ml25]}
            onPress={() => navigation.navigate('AddClinicScreen')}>
            <View>
              <Image
                source={require('../assets/News/cavani.png')}
                style={styles.media}
              />
            </View>
            <View style={[styles.mediaTime]}>
              <View style={styles.badge}>
                <Text style={styles.Time}>1h 20m</Text>
              </View>
            </View>
            <View style={[styles.mediaInfo]}>
                 <View style={styles.shadow}>
                  <Text style={styles.mediaTitle}>Cavani's fitness problem</Text>
                </View>              
            </View>
          
          </View>
          

          <View
            style={[customstyles.ml25]}
            onPress={() => navigation.navigate('AddClinicScreen')}>
            <View>
              <Image
                source={require('../assets/News/unitedwomen.png')}
                style={styles.media}
              />
            </View>
            <View style={[styles.mediaTime]}>
              <View style={styles.badge}>
                <Text style={styles.Time}> 1h 20m </Text>
              </View>
            </View>
             <View style={[styles.mediaInfo]}>
                 <View style={styles.shadow}>
                  <Text style={styles.mediaTitle}>United Women to face Everton at Old Trafford</Text>
                </View>              
            </View>
          
            
          </View>
          <View
            style={[customstyles.ml25]}
            onPress={() => navigation.navigate('AddClinicScreen')}>
            <View>
              <Image
                source={require('../assets/News/tominay.jpg')}
                style={styles.media}
              />
            </View>
            <View style={[styles.mediaTime]}>
              <View style={styles.badge}>
                <Text style={styles.Time}>1h 20m</Text>
              </View>
            </View>
            <View style={[styles.mediaInfo]}>
                 <View style={styles.shadow}>
                  <Text style={styles.mediaTitle}>McTominay leaves Scotland training camp</Text>
                </View>              
            </View>
            
          </View>
          <View
            style={[customstyles.ml25, customstyles.mr25]}
            onPress={() => navigation.navigate('AddClinicScreen')}>
            <View>
              <Image
                source={require('../assets/News/united.png')}
                style={styles.media}
              />
            </View>
            <View style={[styles.mediaTime]}>
              <View style={styles.badge}>
                <Text style={styles.Time}>1h 20m</Text>
              </View>
            </View>
            <View style={[styles.mediaInfo]}>
                 <View style={styles.shadow}>
                  <Text style={styles.mediaTitle}>Media Watch: Friday's news and gossip</Text>
                </View>              
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };

  renderTunnelInsider = () => {
    return (
      <View>
        <View style={[customstyles.ml25, customstyles.mr25, customstyles.mt20]}>
          <Text style={[styles.title]}>TUNNEL INSIDER</Text>
        </View>

        <ScrollView horizontal={true} style={[customstyles.mt20]}>
          <View 
            style={[customstyles.ml25,styles.mediaTICard]}
            onPress={() => navigation.navigate('AddClinicScreen')}>
            <View>
              <Image
                source={require('../assets/News/derby.png')}
                style={styles.mediaTI}
              />
            </View>
            <View style={[styles.mediaTime]}>
              <View style={styles.badge}>
                <Text style={styles.Time}>1h 20m</Text>
              </View>
            </View>
             <View>              
                  <Text style={styles.mediaTNTitle}>The 186th Manchester derby ends in defeat</Text>                            
             </View>

            
          
          </View>
          <View 
            style={[customstyles.ml20,styles.mediaTICard]}
            onPress={() => navigation.navigate('AddClinicScreen')}>
            <View>
              <Image
                source={require('../assets/News/rashfordmessage.jpg')}
                style={styles.mediaTI}
              />
            </View>
            <View style={[styles.mediaTime]}>
              <View style={styles.badge}>
                <Text style={styles.Time}>1h 20m</Text>
              </View>
            </View>
             <View>              
                  <Text style={styles.mediaTNTitle}>Rashford's message to united fans</Text>                            
             </View>

            
          
          </View>

          <View 
            style={[customstyles.ml20,styles.mediaTICard]}
            onPress={() => navigation.navigate('AddClinicScreen')}>
            <View>
              <Image
                source={require('../assets/News/fernandas.png')}
                style={styles.mediaTI}
              />
            </View>
            <View style={[styles.mediaTime]}>
              <View style={styles.badge}>
                <Text style={styles.Time}>1h 20m</Text>
              </View>
            </View>
             <View>              
                  <Text style={styles.mediaTNTitle}>Fernandes: We must know better what we do.</Text>                            
             </View>

            
          
          </View>

           <View 
            style={[customstyles.ml20,customstyles.mr25,styles.mediaTICard]}
            onPress={() => navigation.navigate('AddClinicScreen')}>
            <View>
              <Image
                source={require('../assets/News/shaw.png')}
                style={styles.mediaTI}
              />
            </View>
            <View style={[styles.mediaTime]}>
              <View style={styles.badge}>
                <Text style={styles.Time}>1h 20m</Text>
              </View>
            </View>
             <View>              
                  <Text style={styles.mediaTNTitle}>Shaw forced off in manchester derby.</Text>                            
             </View>

            
          
          </View>
          

        
        </ScrollView>
      </View>
    );
  };



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
    lineHeight: 30,
  },

  media: {
    width: IMAGE_WIDTH_LN,
    height: IMAGE_WIDTH_LN,
    borderRadius: 10,
    opacity: 0.6,
   
  },

  mediaTI:{
    width: IMAGE_WIDTH_TI,
    height: IMAGE_WIDTH_TI,
    borderRadius: 10,
    opacity: 0.6,
  },

  mediaTICard:{
    width: IMAGE_WIDTH_TI,
  },

  shadow: {
    backgroundColor: 'rgba(30, 27, 38, 0.88)',
    shadowOffset: { width: 10, height: 10 },  
    shadowColor: '#000',  
    shadowOpacity: 1,  
    elevation: 20,  
    zIndex:999, 
    padding:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
   
  },

  mediaInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  badge: {
    backgroundColor: '#000',
    alignSelf: 'flex-start',
    borderRadius: 5,
    padding: 3,
  },

  mediaTime: {
    position: 'absolute',
    left: 10,
    right: 0,
    top: 10,
  },

  Time: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#999CAD',
  },

  mediaTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    lineHeight: 30,
  },
  mediaTNTitle:{
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
  }
});

