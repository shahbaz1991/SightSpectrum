/**
 * Developer Name   : Sk Shahbaz Ali
 * Location         : Kolkata
 * Project          : DemoApp (Matrix Media Project)
 * Descritption     : Project is based on login a user and storing its details in database
 * Start Date       : Saturday 28th May 2022
 * End Date         : Monday 30th May 2022
 * Submission Date  : Monday 30th May 2022
 */

// importing react, components and other libraries
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