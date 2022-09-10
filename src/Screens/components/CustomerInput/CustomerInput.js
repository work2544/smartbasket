import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CustomerInput = ({value, setValue, placeholder, secureText}) => {
  return (
    <View style={style.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={style.input}
        secureTextEntry={secureText}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    borderColor: 'e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});
export default CustomerInput;
