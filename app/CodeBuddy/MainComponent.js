import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import ScreenOne from './Screens/ScreenOne';
import ScreenTwo from './Screens/ScreenTwo';
import ScreenThree from './Screens/ScreenThree';

const Stack = createStackNavigator();   //creating Stack navigator

const MainComponent = ()=> {

    // stacking necessary screen in the component
    return (     
        <Stack.Navigator>   
            <Stack.Screen name='ScreenOne' component={ScreenOne}/>
            <Stack.Screen name='ScreenTwo' component={ScreenTwo}/>
            <Stack.Screen name='ScreenThree' component={ScreenThree}/>
        </Stack.Navigator>    
    );
};

export default MainComponent;