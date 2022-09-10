import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#00FA9A',
  },
  container_SECONDARY: {
    borderColor: '#00FA9A',
    borderWidth:2
  },
  container_TERTIARY: {},
  container_Forgot: {},
  
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_SECONDARY: {
    color:'#00FA9A',
  }
  ,
  text_TERTIARY: {
    color: 'gray',
  },
  text_Forgot: {
    color: 'gray',
    alignSelf: 'flex-end',
  },
});
export default CustomButton;
