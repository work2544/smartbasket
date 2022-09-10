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
  const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Confirmpassword, setConfirmPassword] = useState('');
    const navigation=useNavigation();
    const OnSignInPress = () => {
      navigation.navigate('SingIn');
    }
    const OnSignInFacebookPress = () => {
      console.warn('Sign In Facebook');
    };
    const OnSignInGooglePress = () => {
      console.warn('Sign In Google');
    };
    const OnRegisterPress = () => {
      console.warn('Register PRess');
      navigation.navigate('ConfirmEmail');
    };
    return (
      <View style={style.root}>
        <Text style={style.title}>Create an account</Text>
        <CustomerInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          secureText={false}
        />
        <CustomerInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          secureText={false}
        />
        <CustomerInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureText={true}
        />
         <CustomerInput
          placeholder="Confirm Password"
          value={password}
          setValue={setConfirmPassword}
          secureText={true}
        />
        
        <CustomButton onPress={OnRegisterPress} text="Register" />
        <Text style={style.text}>By registering, you confirm that you accpet our  
            <Text style={style.link}> Terms of Use</Text> and 
            <Text style={style.link}> Privacy Policy.</Text>
        </Text>
        <CustomButton
          onPress={OnSignInFacebookPress}
          text="Sign In With Facebook"
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          onPress={OnSignInGooglePress}
          text="Sign In With Google"
          bgColor="#FAE9EA"
          fgColor="#DD4DD4"
        />
        <CustomButton
          onPress={OnSignInPress}
          text="Have an account? sign in"
          type='TERTIARY'
        />
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
  export default SignUpScreen;
  