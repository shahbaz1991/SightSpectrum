import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import DashBoard from './Components/DashBoard';
import LoginScreen from './Components/LoginScreen';
import RegisterUser from './Components/RegisterUser';
import CreatePassword from './Components/CreatePassword';

const Stack = createStackNavigator();

const MainComp = ()=> {

    return (     
        <Stack.Navigator>
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='DashBoardScreen' component={DashBoard} options={{ headerShown: false }}/>
            <Stack.Screen name='RegisterUserScreen' component={RegisterUser} options={{ headerShown: false }}/>
            <Stack.Screen name='CreatePasswordScreen' component={CreatePassword} options={{ headerShown: false }}/>
        </Stack.Navigator>    
    );
};
export default MainComp;