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
} from 'react-native';
import Accordian from '../Components/Accordian';
import TextInputPaperCustom from '../Components/TextInputPaperCustom';
import TextInputCustom from '../Components/TextInputCustom';
import MultipleImages from '../Components/MultipleImages';
import {Colors} from '../Components/Colors';
import customstyles from '../assets/Css/Custom';
import filestyles from '../assets/Css/UploadFile';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');

const IMAGE_WIDTH = (width - 24) / 3;

export default class ComponentsUIScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: [],
      modalVisible: false,
      images: [],
      menu: [
        {
          id: 2,
          title: 'Pizzas',
          data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.',
        },
        {
          id: 4,
          title: 'Deserts',
          data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire',
        },
        {
          id: 3,
          title: 'Drinks',
          data: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* // keyboardShouldPersistTaps="handled"
          // contentContainerStyle={{flexGrow: 1}}> */}

          {this.renderAccordians()}
          <View style={styles.hrView}></View>
          {this.renderPaperTextInputs()}
          {this.renderTextInputs()}
          <View style={styles.hrView}></View>
          {this.renderFileUpload()}
          <View style={styles.hrView}></View>
          {this.renderMultipleUploadBtn()}
          {this.renderMultipleImageUpload()}
        </ScrollView>
      </View>
    );
  }

  renderPaperTextInputs = () => {
    return (
      <View style={styles.textInputLayout}>
        <View>
          <Text style={styles.title}>Input Custom</Text>
        </View>
        <TextInputPaperCustom
          label="User Name"
          placeholder="Enter UserName"
          mode="outlined"
          // onChangeText={(Qualification) =>
          // setQualification(Qualification)
          // }
          //ref={QualificationInputRef}
          //onSubmitEditing={Keyboard.dismiss}
        />

        {/* <TextInputPaperCustom
          label="User Name"
          placeholder="Enter UserName"
          mode="flat"
         
        /> */}
      </View>
    );
  };

  renderTextInputs = () => {
    return (
      <View style={styles.textInputLayout}>
        <View style={customstyles.mt20}>
          <TextInputCustom placeholder="Enter UserName" />
        </View>

        <View style={customstyles.mt20}>
          <TextInputCustom placeholder="Enter UserName" />
        </View>
      </View>
    );
  };

  renderAccordians = () => {
    const items = [];
    items.push(
      <View
        style={[
          customstyles.ml25,
          customstyles.mt40,
          customstyles.mr25,
          customstyles.mb20,
        ]}>
        <Text key={0} style={styles.title}>
          Accordian
        </Text>
      </View>,
    );
    for (var item of this.state.menu) {
      items.push(
        <Accordian key={item.id} title={item.title} data={item.data} />,
      );
    }
    return items;
  };

  renderFileUpload = () => {
    return (
      <View>
        <View style={[customstyles.ml25, customstyles.mt40, customstyles.mr25]}>
          <Text style={styles.title}>File Upload</Text>
        </View>
        <View style={filestyles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.setState({modalVisible: !this.state.modalVisible});
            }}>
            <TouchableOpacity
              onPress={() =>
                this.setState({modalVisible: !this.state.modalVisible})
              }
              style={filestyles.modalPosition}></TouchableOpacity>
            <View style={filestyles.bottomModal}>
              <View style={filestyles.modalView}>
                <View style={customstyles.flexrow}>
                  <View>
                    <Pressable
                      style={[filestyles.button, filestyles.buttonClose]}
                      onPress={() => this.captureImage('photo')}>
                      <Text style={filestyles.modalText}>Take Photo</Text>
                    </Pressable>
                  </View>
                  <View style={customstyles.ml10}>
                    <Pressable
                      style={[filestyles.button, filestyles.buttonClose]}
                      onPress={() => this.chooseFile('photo')}>
                      <Text style={filestyles.modalText}>
                        Choose From Gallery
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        <View
          style={[
            customstyles.flexrow,
            customstyles.center,
            customstyles.mt20,
          ]}>
          <Pressable
            onPress={() =>
              this.setState({modalVisible: !this.state.modalVisible})
            }>
            <Image
              source={
                this.state.filePath.base64
                  ? {
                      uri:
                        'data:image/jpeg;base64,' + this.state.filePath.base64,
                    }
                  : {
                      uri: 'https://caremeclient.azurewebsites.net/Content/CareMETele/hospitallogo.jpg',
                    }
              }
              style={filestyles.imageStyle}
            />

            <Image
              source={require('../assets/camera.png')}
              style={filestyles.cameraIcon}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  renderMultipleUploadBtn = () => {
    return (
      <View>
        <View style={[customstyles.ml25, customstyles.mt40, customstyles.mr25]}>
          <Text style={styles.title}>Multiple File Upload</Text>
        </View>
        <View
          style={[
            customstyles.flexrow,
            customstyles.center,
            customstyles.mt20,
          ]}>
          <Pressable
            style={[filestyles.button, filestyles.buttonClose]}
            onPress={this.openPicker}>
            <Text style={filestyles.modalText}>Choose files</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  renderMultipleImageUpload = () => {
    const items = [];
    for (var item of this.state.images) {
      console.log('here');
      console.log(item.length);
      // console.log(g);
      items.push(
        <View>
          <MultipleImages
            filename={item.fileName}
            realPath={item.realPath}
            type={item.type}
            style={styles.gridItem}
          />
          <TouchableOpacity
            onPress={() => this.onDelete(item.fileName)}
            activeOpacity={0.9}
            style={styles.buttonDelete}>
            <Icon name="close-circle" color="red" size={22} />
            {/* <Text>{item.fileName}</Text> */}
          </TouchableOpacity>
        </View>,
      );
    }

    const maindiv = [];

    maindiv.push(
      <View>
        <View
          style={[
            customstyles.ml25,
            customstyles.mt20,
            customstyles.mr25,
            customstyles.mb20,
            styles.grid,
          ]}>
          {items}
        </View>
      </View>,
    );

    return maindiv;
  };

  // multiple file upload
  openPicker = async () => {
    try {
      const response = await MultipleImagePicker.openPicker({
        selectedAssets: this.state.images,
        isExportThumbnail: true,
        maxVideo: 1,
        usedCameraButton: false,
        //singleSelectedMode: true,
        isCrop: true,
        isCropCircle: true,
        selectedColor: '#19BEED',
      });
      // console.log('done: ', response);
      //setImages([response]);
      this.setState({images: response});
      //  console.log(this.state.images);
    } catch (e) {
      console.log(e.code, e.message);
    }
  };

  onDelete = value => {
    // const data = this.state.images.filter(
    //   (item) =>
    //     item?.localIdentifier &&
    //     item?.localIdentifier !== value?.localIdentifier
    // );

    //  this.setState({ images: data });
    console.log('check file name');
    var data = this.state.images.filter(item => item.fileName != value);
    console.log(value);
    console.log('check file name');
    console.log(data);
    this.setState({
      images: data,
    });
  };

  // file upload
  async requestCameraPermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  }

  requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  captureImage() {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
      includeBase64: true,
    };
    let isCameraPermitted = this.requestCameraPermission();
    let isStoragePermitted = this.requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        this.setState({filePath: response.assets[0]});
        this.setState({modalVisible: !this.state.modalVisible});
      });
    }
  }

  chooseFile(type) {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }

      this.setState({filePath: response.assets[0]});
      this.setState({modalVisible: !this.state.modalVisible});
    });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BgColor,
  },

  grid: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  gridItem: {
    margin: 5,
    width: '30%',
    height: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textInputLayout: {
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 30,
  },

  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },

  hrView: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHTGRAY,
    marginTop: 30,
    marginLeft: 25,
    marginRight: 25,
  },

  imageView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 24,
  },
  media: {
    marginLeft: 6,
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    marginBottom: 6,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  bottom: {
    padding: 24,
  },
  openText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    paddingVertical: 12,
  },
  openPicker: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  buttonDelete: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: 'absolute',
    top: 10,
    right: 6,
    backgroundColor: '#ffffff92',
    borderRadius: 4,
  },
});
