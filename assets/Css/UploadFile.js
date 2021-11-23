import {StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
   centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  bottomModal: {
    flex: 1,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },

  modalView: {
    margin: 0,
    backgroundColor: 'white',
    // borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: 110,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalText: {
    color: '#fff',
  },
  imageStyle: {
    width: 89,
    height: 89,
    borderRadius: 25,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    left: 60,
    top: 60,
  },
  modalPosition:{
    height: windowHeight - 110,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  }


});