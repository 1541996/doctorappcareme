import React, {useState, useEffect} from 'react';
import {
  BackHandler,
  Platform,
  Button,
  StyleSheet,
  Alert,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StatusBar,
  RefreshControl,
  TextInput,
  Keyboard,
  Image,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Appbar} from 'react-native-paper';
import {Card} from 'react-native-paper';
import {Chip} from 'react-native-paper';
import customstyles from '../assets/Css/Custom';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import RNBounceable from '@freakycoder/react-native-bounceable';

//export default class ProfileScreen extends Component {

const ProfileScreen = ({navigation}) => {
  //  constructor(props) {
  //   super(props);
  //   this.state = { text: '' };
  //   this.checkboxstate =

  // }

  let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [checkboxStateS, setCheckboxStateS] = useState(false);
  const [checkboxStateM, setCheckboxStateM] = useState(false);
  const [checkboxStateT, setCheckboxStateT] = useState(true);
  const [checkboxStateW, setCheckboxStateW] = useState(false);
  const [checkboxStateThu, setCheckboxStateThu] = useState(true);
  const [checkboxStateF, setCheckboxStateF] = useState(false);
  const [checkboxStateSat, setCheckboxStateSat] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={[
            customstyles.flex1,
            customstyles.flexrow,
            customstyles.pt20,
            customstyles.mr20,
          ]}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('NotificationScreen')
            }>
            <Image
              style={customstyles.mr20}
              source={require('../assets/Notification.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingsScreen')}>
            <Image source={require('../assets/Setting.png')} />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  return (
    <SafeAreaView style={[styles.container, customstyles.screenbgColor]}>
      <ScrollView style={styles.scrollView}>
        <View
          style={[
            customstyles.listView,
            customstyles.mt10,
            customstyles.mContainer,
            customstyles.mt25,
          ]}>
          <Image
            source={require('../assets/docprofile.png')}
            style={styles.docImgStyle}
          />
          <View style={[customstyles.ml20, customstyles.flex1]}>
            <Text style={styles.nameText}>Dr. Yar Zar</Text>
            <Text style={styles.quaText}>M.B.B.S</Text>
            <Text style={styles.quaText}>General Physician</Text>
          </View>
        </View>

        <Card
          style={[customstyles.panelcustom, customstyles.mContainer]}
          onPress={() => navigation.navigate('AddClinicScreen')}>
          <View style={customstyles.flexrow}>
            <Image source={require('../assets/clinic.png')} />
            <View style={[customstyles.ml20, customstyles.flex1]}>
              <Text style={customstyles.panelcustomtitle}>Add New Clinic</Text>
              <Text style={[customstyles.panelcustombody, customstyles.mt5]}>
                Create your clinic address and information here.
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../assets/Plus.png')}
                style={customstyles.mt10}
              />
            </TouchableOpacity>
          </View>
        </Card>

        <View style={[customstyles.mt20, customstyles.mContainer]}>
          <Text style={styles.clinicTitle}>Your clinic list</Text>
        </View>

        <View
          style={[
            customstyles.mt10,
            styles.clinicCard,
            customstyles.mb25,
            customstyles.pb25,
            customstyles.pt20,
          ]}>
          <View style={[customstyles.mContainer]}>
            <Text style={styles.clinicName}>Yammo Clinic</Text>
            <View style={[customstyles.flexrow, customstyles.mt10]}>
              <Icon
                name="phone"
                size={20}
                style={[styles.iconWidth, customstyles.mt3]}
              />
              <Text style={[styles.clinicPhone, customstyles.mt5]}>
                +959798330049
              </Text>
            </View>

            <View style={[customstyles.flexrow, customstyles.mt10]}>
              <Icon
                name="office-building"
                size={20}
                style={[styles.iconWidth, customstyles.mt3]}
              />
              <Text
                style={[
                  styles.clinicAddress,
                  customstyles.mt5,
                  customstyles.flex1,
                ]}>
                No-60, G-1, New Parami Road, Township, Yangon
              </Text>
            </View>
          </View>

          <View style={[customstyles.mContainer, customstyles.mt30]}>
            <Text style={styles.schTitle}>SCHEDULES</Text>
            <View style={[customstyles.borderbottom, customstyles.mt10]}>
              <View style={[customstyles.flexrow, customstyles.mt10]}>
                <Text
                  style={[
                    customstyles.flex1,
                    styles.schTime,
                    customstyles.mt10,
                  ]}>
                  9 AM to 11 AM
                </Text>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AddScheduleScreen')}>
                    <Image source={require('../assets/edit_sch.png')} />
                  </TouchableOpacity>
                </View>
                <View style={[customstyles.ml10]}>
                  <TouchableOpacity>
                    <Image source={require('../assets/delete_sch.png')} />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={[
                  customstyles.flexrow,
                  customstyles.spacebetween,
                  customstyles.mb20,
                  customstyles.mt10,
                ]}>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateS ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateS(!checkboxStateS)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    S
                  </Text>
                </RNBounceable>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateM ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateM(!checkboxStateM)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    M
                  </Text>
                </RNBounceable>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateT ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateT(!checkboxStateT)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    T
                  </Text>
                </RNBounceable>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateW ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateW(!checkboxStateW)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    W
                  </Text>
                </RNBounceable>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateThu ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateThu(!checkboxStateThu)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    T
                  </Text>
                </RNBounceable>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateF ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateF(!checkboxStateF)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    F
                  </Text>
                </RNBounceable>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateSat ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateSat(!checkboxStateSat)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    S
                  </Text>
                </RNBounceable>
              </View>
            </View>

            <View style={[customstyles.borderbottom, customstyles.mt20]}>
              <View style={[customstyles.flexrow, customstyles.mt10]}>
                <Text
                  style={[
                    customstyles.flex1,
                    styles.schTime,
                    customstyles.mt10,
                  ]}>
                  9 AM to 11 AM
                </Text>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AddScheduleScreen')}>
                    <Image source={require('../assets/edit_sch.png')} />
                  </TouchableOpacity>
                </View>
                <View style={[customstyles.ml10]}>
                  <TouchableOpacity>
                    <Image source={require('../assets/delete_sch.png')} />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={[
                  customstyles.flexrow,
                  customstyles.spacebetween,
                  customstyles.mb20,
                  customstyles.mt10,
                ]}>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateS ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateS(!checkboxStateS)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    S
                  </Text>
                </RNBounceable>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateM ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateM(!checkboxStateM)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    M
                  </Text>
                </RNBounceable>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateT ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateT(!checkboxStateT)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    T
                  </Text>
                </RNBounceable>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateW ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateW(!checkboxStateW)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    W
                  </Text>
                </RNBounceable>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateThu ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateThu(!checkboxStateThu)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    T
                  </Text>
                </RNBounceable>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateF ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateF(!checkboxStateF)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    F
                  </Text>
                </RNBounceable>
                <RNBounceable
                  style={{
                    marginTop: 16,
                    height: 38,
                    width: 38,
                    backgroundColor: checkboxStateSat ? '#24A6F8' : '#E8E6EA',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => setCheckboxStateSat(!checkboxStateSat)}>
                  <Text style={{color: '#fff', fontSize: 20, lineHeight: 20}}>
                    S
                  </Text>
                </RNBounceable>
              </View>
            </View>
          </View>

          <View
            style={[
              customstyles.flexrow,
              customstyles.center,
              customstyles.mt10,
            ]}>
            <TouchableOpacity>
              <Text style={styles.schAdd}>ADD SCHEDULE</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[
              customstyles.flexrow,
              customstyles.center,
              customstyles.mt20,
            ]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddScheduleScreen')}>
              <View style={[customstyles.flexrow]}>
                <Image source={require('../assets/Plus.png')} />
                <Text style={[styles.schVisit, customstyles.ml10]}>
                  Add Visit
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={customstyles.ml20}
              onPress={() => navigation.navigate('AddScheduleScreen')}>
              <View style={[customstyles.flexrow]}>
                <Image source={require('../assets/Plus.png')} />
                <Text style={[styles.schTele, customstyles.ml10]}>
                  Add Telemedicine
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mt10: {
    marginTop: 10,
  },

  iconWidth: {
    width: 40,
  },

  docImgStyle: {
    height: 89,
    width: 89,
  },

  nameText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
    lineHeight: 24,
  },
  quaText: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#999CAD',
    lineHeight: 24,
  },

  clinicTitle: {
    fontWeight: 'normal',
    fontSize: 17,
    color: '#333333',
    lineHeight: 22,
  },

  clinicCard: {
    backgroundColor: '#fff',
  },

  clinicName: {
    fontWeight: 'normal',
    fontSize: 17,
    color: '#19BEED',
    lineHeight: 22,
  },

  clinicPhone: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#555866',
    lineHeight: 16,
  },

  clinicAddress: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#555866',
    lineHeight: 16,
  },

  schTitle: {
    fontWeight: 'normal',
    fontSize: 13,
    color: '#999CAD',
    lineHeight: 16,
  },

  schTime: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#0F172A',
    lineHeight: 16,
  },
  schAdd: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#999CAD',
    lineHeight: 16,
  },
  schVisit: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#19BEED',
    lineHeight: 16,
  },
  schTele: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#19BEED',
    lineHeight: 16,
  },
});
