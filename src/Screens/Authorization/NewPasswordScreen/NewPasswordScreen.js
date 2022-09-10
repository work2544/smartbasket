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
  const NewPasswordScreen = () => {
    const [Code, setCode] = useState('');
    const [Password, setPassword] = useState('');
    const navigation=useNavigation();
    const OnBackSigninPress = () => {
      console.warn('Back sign in');
      navigation.navigate('SignIn');
    };
    const OnConfirmPress = () => {
      console.warn('Confirm');
      navigation.navigate('MainApp');

    };
    return (
      <View style={style.root}>
        <Text style={style.title}>Reset your password</Text>
        <CustomerInput
          placeholder="Code"
          value={Code}
          setValue={setCode}
          secureText={false}
        />
        <CustomerInput
          placeholder="Enter new password"
          value={Password}
          setValue={setPassword}
          secureText={false}
        />
        <CustomButton onPress={OnConfirmPress} text="Confirm" />
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
  export default NewPasswordScreen;
  