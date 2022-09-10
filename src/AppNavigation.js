import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './Screens/Authorization/SignInScreen';
import SignUpScreen from './Screens/Authorization/SignUpScreen';
import ConfirmEmailScreen from './Screens/Authorization/ConfirmEmailScreen';
import ForgotPasswordScreen from './Screens/Authorization/ForgotPasswordScreen';
import NewPasswordScreen from './Screens/Authorization/NewPasswordScreen';
import MainApp from './Screens/MainApp/MainApp';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
