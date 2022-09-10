import React, {useState, useEffect, useRef} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {StyleSheet, Text} from 'react-native';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ScanScreen = () => {
  const axios = require('axios');
  const isFocused = useIsFocused();
  const devices = useCameraDevices();
  const device = devices.back;
  const navigation = useNavigation();
  const [isScanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [database, setDatabase] = useState();
  const [jsonObject, setJsonObject] = useState();
  const [fetching, setFetching] = useState(true);
  const RNFS = require('react-native-fs');

  //init barcode format
  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.UPC_A, BarcodeFormat.UPC_E],
    {
      checkInverted: false,
    },
  );


  //check camera permission
  useEffect(() => {
    checkCameraPermission();
  }, []);
  const checkCameraPermission = async () => {
    const status = await Camera.getCameraPermissionStatus();
    setHasPermission(status === 'authorized');
  };

  //use effect but not init render
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current && barcodes.length !== 0) getBarcode(barcodes);
    else didMount.current = true;
  }, [barcodes]);

  //get the barcode from the frame
  const getBarcode = async barcodes => {
    if (!isScanned) {
      await barcodes.map((barcode, idx) => ({barcode}));
    }
    setScanned(true);

    //need to fetch from api first
    addToCart(barcodes);
  };
  //create instanceAPI
  const LotusInstanceAPI = async sku_id => {
    const instanceAPI = axios.create({
      baseURL: 'https://ppe-api.lotuss.com',
      params: {
        websiteCode: 'thailand_hy',
        sku: sku_id,
        storeId: 5016,
      },
      headers: {
        'accept-language': 'en',
        Authorization:
          'Basic ZWY4ZTZjMjgzODdlNGVjYTlkM2UxMTU1MDQxMjgyYzE6MEU1NTg0QzUxZTdBNDBEODkzMDUxZGExY2NEQTg2ZTY=',
      },
    });
    return await instanceAPI.get('/proc/product/api/v1/products/details');
  };


  //fetching API
  const getAPI = async barcode => {
    console.log("barcode in getAPI : "+barcode)
    const resp=await LotusInstanceAPI(3302997)
    return resp.data.data
  };


  //convert to JSON STRING and store to @cartItems
  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@cartItems', jsonValue);
    } catch (e) {
      // saving error
      console.warn('error' + e);
    }
  };

  const addToCart = async rawValueBarcode => {
    const data=await getAPI(rawValueBarcode[0].rawValue)
    const pricedata=data.priceRange.minimumPrice
    const mediaurldata=data.mediaGallery[0].url
    console.log(pricedata)
    console.log(mediaurldata)
     //get from @cartItems and convert to js object
    //setScanned(false);
    // let itemArray = await AsyncStorage.getItem('@cartItems');
    // itemArray = JSON.parse(itemArray);
    // if (itemArray !== null) {
    //   let array = itemArray;
    //   array.push(rawValueBarcode);
    //   storeData(array);
    // } else {
    //   let array = [];
    //   array.push(rawValueBarcode);
    //   storeData(array);
    // }
    // if (!fetching) navigation.navigate('Cart', {barcodeNo: rawValueBarcode});
    return;
  };
  return (
    device != null &&
    hasPermission && (
      <>
        {/* อาจจะเปลี่ยนเป็นกดเพื่อสแกน */}
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isFocused && !isScanned}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
        />
      </>
    )
  );
};

export default ScanScreen;
