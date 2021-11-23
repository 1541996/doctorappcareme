import React, {useState, useEffect, createRef} from 'react';
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
  Keyboard,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Modal,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Appbar} from 'react-native-paper';
import {Card} from 'react-native-paper';
import {Chip} from 'react-native-paper';
import customstyles from '../assets/Css/Custom';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {TextInput} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import {RadioButton} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
//import {RadioGroup, RadioButton} from 'react-native-custom-radio-button'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddPaymentScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [CName, setCName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');

  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const PhoneInputRef = createRef();
  const AddressInputRef = createRef();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.pop()}>
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
            <Text style={styles.closeText}>Close</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  });

  return (
    <SafeAreaView style={[customstyles.screenbgColor, customstyles.flex1]}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={[
            customstyles.mt10,
            customstyles.ml25,
            customstyles.mr25,
            customstyles.mb20,
          ]}>
          <Text style={styles.schTitle}>Payment</Text>
          <Text style={[styles.schP, customstyles.mt10]}>
            Provide information for receiving payment.
          </Text>

          <Card
            style={[
              customstyles.panelcustom,
              customstyles.mt30,
              customstyles.pb5,
              customstyles.pl10,
            ]}
            onPress={() => navigation.navigate('PaymentFormScreen')}>
            <View style={customstyles.flexrow}>
              <Image source={require('../assets/kbz.png')} />
              <View
                style={[
                  customstyles.ml10,
                  customstyles.flex1,
                  customstyles.mt5,
                ]}>
                <Text style={customstyles.panelcustomtitle}>
                  Add KBZ pay account
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={require('../assets/RightArrow.png')}
                  style={customstyles.mt15}
                />
              </TouchableOpacity>
            </View>
          </Card>

          <Card
            style={[
              customstyles.panelcustom,
              customstyles.mt10,
              customstyles.pb5,
              customstyles.pl10,
            ]}
            onPress={() => navigation.navigate('PaymentFormScreen')}>
            <View style={customstyles.flexrow}>
              <Image source={require('../assets/cb.png')} />
              <View
                style={[
                  customstyles.ml10,
                  customstyles.flex1,
                  customstyles.mt5,
                ]}>
                <Text style={customstyles.panelcustomtitle}>
                  Add CB pay account
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={require('../assets/RightArrow.png')}
                  style={customstyles.mt15}
                />
              </TouchableOpacity>
            </View>
          </Card>

          <Card
            style={[
              customstyles.panelcustom,
              customstyles.mt10,
              customstyles.pb5,
              customstyles.pl10,
            ]}
            onPress={() => navigation.navigate('PaymentFormScreen')}>
            <View style={customstyles.flexrow}>
              <Image source={require('../assets/cb.png')} />
              <View
                style={[
                  customstyles.ml10,
                  customstyles.flex1,
                  customstyles.mt5,
                ]}>
                <Text style={customstyles.panelcustomtitle}>
                  Add CB account
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={require('../assets/RightArrow.png')}
                  style={customstyles.mt15}
                />
              </TouchableOpacity>
            </View>
          </Card>

          <Card
            style={[
              customstyles.panelcustom,
              customstyles.mt10,
              customstyles.pb5,
              customstyles.pl10,
            ]}
            onPress={() => navigation.navigate('PaymentFormScreen')}>
            <View style={customstyles.flexrow}>
              <Image source={require('../assets/Mpitesan.png')} />
              <View
                style={[
                  customstyles.ml10,
                  customstyles.flex1,
                  customstyles.mt5,
                ]}>
                <Text style={customstyles.panelcustomtitle}>
                  Add M-Pite San Account
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={require('../assets/RightArrow.png')}
                  style={customstyles.mt15}
                />
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPaymentScreen;

const styles = StyleSheet.create({
  schTitle: {
    fontSize: 34,
    lineHeight: 40,
    color: '#333333',
    fontWeight: 'bold',
  },

  schP: {
    fontSize: 15,
    lineHeight: 20,
    color: '#999CAD',
  },

  paymentTitle: {
    fontSize: 17,
    lineHeight: 22,
    color: '#333333',
  },

  closeText: {
    fontSize: 17,
    lineHeight: 24,
    color: '#333333',
  },
});
