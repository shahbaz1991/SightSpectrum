/**
 * Developer Name   : Sk Shahbaz Ali
 * Location         : Kolkata
 * Project          : DemoApp (SightSpectrum Project)
 * Descritption     : Project is based on React Native
 * Start Date       : Wednesday 16th September 2022
 * End Date         : Wednesday 16th September 2022
 * Submission Date  : Wednesday 16th September 2022
 */

// importing react, components and other libraries
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MainComp from './app/SightSpectrum/MainComponent';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <MainComp/>
        </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;