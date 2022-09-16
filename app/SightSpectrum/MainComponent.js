import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';
import { isEmulator } from 'react-native-device-info';
import { Alert } from 'react-native';

const Stack = createStackNavigator();   //creating Stack navigator

const MainComp = ()=> {

    //checking if the app is running in emulator
    useEffect(()=>{
        isEmulator()
        .then(()=>{
            Alert.alert(
                'Alert',
                'App is running on EMULATOR',
                [
                    {text: "OK", onPress: () => {}}
                ]
            )
        })
    },[]);

    // stacking necessary screen in the component
    return (     
        <Stack.Navigator>   
            <Stack.Screen name='ScreenOne' component={ScreenOne} options={{ headerShown: false }}/>
            <Stack.Screen name='ScreenTwo' component={ScreenTwo} options={{ headerShown: false }}/>
            <Stack.Screen name='ScreenThree' component={ScreenThree} options={{ headerShown: false }}/>
        </Stack.Navigator>    
    );
};
export default MainComp;