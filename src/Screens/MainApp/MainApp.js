import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './HomeScreen/HomeScreen';
import CartScreen from './CartScreen/CartScreen';
import ScanScreen from './ScanScreen/ScanScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Scanner"
        component={ScanScreen}
        options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="barcode" color={color} size={size} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainApp;
