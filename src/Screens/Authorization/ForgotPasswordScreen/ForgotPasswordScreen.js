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
  const ForgotPasswordScreen = () => {
    const [Username, setUsername] = useState('');
    const navigation=useNavigation();
    
    const OnBackSigninPress = () => {
      console.warn('Back sign in');
      navigation.navigate('SignIn');
    };
    const OnSendPress = () => {
      console.warn('Send');
      navigation.navigate('NewPassword');
    };
    return (
      <View style={style.root}>
        <Text style={style.title}>Reset Password</Text>
        <CustomerInput
          placeholder="Username"
          value={Username}
          setValue={setUsername}
          secureText={false}
        />
        <CustomButton onPress={OnSendPress} text="Send" />
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
  export default ForgotPasswordScreen;
  