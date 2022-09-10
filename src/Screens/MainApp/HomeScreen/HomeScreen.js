import React, { useState, useEffect } from 'react';
import {Camera} from 'react-native-vision-camera';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {

 const clearAsyncStorage = async() => {
    AsyncStorage.clear();
}
  const checkCameraPermission = async () => {
    let status = await Camera.getCameraPermissionStatus();
    if (status !== 'authorized') {
      await Camera.requestCameraPermission();
      status = await Camera.getCameraPermissionStatus();
      if (status === 'denied') {
        showToast(
          'You will not be able to scan if you do not allow camera access',
        );
      }
    }
  };
  
  useEffect(() => {
    checkCameraPermission();
    clearAsyncStorage();
  }, []);
    return (
     <Text>Home</Text>
    );
  };
export default HomeScreen;