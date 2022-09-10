import React, { useState, useEffect } from 'react';
import {Camera} from 'react-native-vision-camera';
import {Button,Text} from 'react-native';


const HomeScreen = ({ navigation }) => {
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
  }, []);
    return (
     <Text>Home</Text>
    );
  };
export default HomeScreen;