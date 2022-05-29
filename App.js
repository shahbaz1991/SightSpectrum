/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainComp from './app/matrixMedia';
import { Colors } from './app/matrixMedia/Assets/Colors/colors';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.mainColor} />
      <NavigationContainer>
        <MainComp/> 
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;