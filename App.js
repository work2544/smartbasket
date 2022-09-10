/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
import * as React from 'react';

import AppNavigation from './src/AppNavigation';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';


const App = () => {
  return (
   
    <SafeAreaView style={styles.root}>
      <AppNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'FFFFFF',
    flex: 1,
  },
});

export default App;
