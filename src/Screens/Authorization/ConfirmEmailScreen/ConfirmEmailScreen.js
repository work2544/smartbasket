import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
  } from 'react-native';
  import React, {useState} from 'react';
  import CustomerInput from '../../components/CustomerInput';
  import CustomButton from '../../components/CustomButton';
  import { useNavigation } from '@react-navigation/native';
  const ConfirmEmailScreen = () => {
    const [code, setcode] = useState('');
    const navigation=useNavigation();
    
    const OnBackSigninPress = () => {
      console.warn('Back sign in');
      navigation.navigate('SignIn')
    };
    const OnResendPress = () => {
      console.warn('Resend');
    };
    const OnConfirmPress = () => {
      console.warn('Confirm');
      navigation.navigate('MainApp');
    };
    return (
      <View style={style.root}>
        <Text style={style.title}>Confirm your email</Text>
        <CustomerInput
          placeholder="Enter your confirm information code"
          value={code}
          setValue={setcode}
          secureText={false}
        />
        <CustomButton onPress={OnConfirmPress} text="Confirm" />
        <CustomButton onPress={OnResendPress} text="Resend code" type='SECONDARY' />
        <CustomButton onPress={OnBackSigninPress} text="Back to sign in" type='TERTIARY' />
        
      </View>
    );
  };
  const style = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
      marginTop:25
    },
    title: {
      fontSize:25,
      fontWeight: 'bold',
      color: '#051C60',
      margin:10
    },
    text:{
        color:'gray',
        marginVertical:10
    },
    link:{
        color:'#FDB075'
    }
  });
  export default ConfirmEmailScreen;
  