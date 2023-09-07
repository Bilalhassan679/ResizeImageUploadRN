import {Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { FC, useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { androidCameraPermission } from './permission';

import axios from 'axios';

const App = () => {
  const [uri,setUri]=useState(undefined)


  //ALERT SELECT
  const onSelectImage = async() =>{
    const permissionStatus= await androidCameraPermission();
    if(permissionStatus || Platform.OS == 'ios'){
      Alert.alert(
        'Profile Picture',
        'Choose an options',
        [
          {text:"Camera",onPress:openCamera},
          {text:"Gallery",onPress:chooseImage},
          {text:"CANCEL",onPress:()=>{}}
        ]
      )
    }
  }

  //SELECT SINGLE IMAGE FROM GALLERY
  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setUri(image.path);
       
      })
      .finally(()=>{console.log('Gallery')});
  };


  //SELECT CAMERA
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setUri(image.path);
        // uploadImage(image.path) //This for upload image in backend
      })
      .finally(()=>{console.log('Open Camera')});
  };


  //BACKEND WORK FOR UPLOAD IMAGE 
  const uploadImage =(imagePath) =>{
    const imageData=new FormData();
    imageData.append('keyName',{
      uri:imagePath,
      name:'image.png',
      fileName:'image',
      type:'image/png'
    })
    console.log(imageData,'Image Data')
    // GET request for remote image in node.js
axios({
  method: 'post',
  url: 'url', //Put in Url provided by backend
  data:imageData
})
  .then(function (response) {
    console.log('image Upload Succesfully',response)
  }).then((error)=>{
    
    console.log('Error',error)
  })
    
  }

  return (
    <View style={styles.container}>

      <Image
      src={uri && uri}
      style={styles.avatar}

      />

      <Text>Select Image</Text>
      <Text></Text>
      <TouchableOpacity onPress={onSelectImage} style={styles.image}>
      <Text>Select Image</Text>
      </TouchableOpacity>
    </View>
  );
};


export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    backgroundColor:'#727262',
    padding:10,
    borderRadius:10,
    marginBottom:50
  },
    avatar: {
      paddingTop: 20,
      height: 100,
      width: 100,
      borderRadius: 100,
      padding: 20,
      marginBottom:50

    },
});
