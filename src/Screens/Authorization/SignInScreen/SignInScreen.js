import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from 'smartbasket/src/Images/Logo-1.webp';
import CustomerInput from '../../components/CustomerInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation=useNavigation();
  const OnSignInPress = () => {
    navigation.navigate('MainApp');
  };
  const OnSignInFacebookPress = () => {
    console.warn('Sign In Facebook');
  };
  const OnSignInGooglePress = () => {
    console.warn('Sign In Google');
  };
  const OnForgotPasswordPress = () => {
    console.warn('Forget Password');
    navigation.navigate('ForgotPassword');
  };
  const OnSignUpPress = () => {
    console.warn('FSignUp');
    navigation.navigate('SignUp');
  };
  return (
    <View style={style.root}>
      <Image
        source={Logo}
        style={[style.logo, {height: height * 0.3}, {marginVertical: 20}]}
        resizeMode="contain"></Image>
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
      <CustomButton onPress={OnSignInPress} text="Sign In" />
      <CustomButton
        onPress={OnForgotPasswordPress}
        text="Forgot password ?"
        type="Forgot"
      />
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
        onPress={OnSignUpPress}
        text="Don't have an account? Create one"
        type="TERTIARY"
      />
    </View>
  );
};
const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '90%',
    maxWidth: 250,
    maxHeight: 200,
  },
});
export default SignInScreen;
