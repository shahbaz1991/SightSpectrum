//importing React, Components and other libraries
import React, { useState, useCallback } from 'react';
import {View, Text, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import { mainStyles } from '../Styles/MainStyles';
import HeaderComp from './Header';
import ToastMsg from './Common/ToastMsg';
import ActivityIndicatorComp from './Common/ActivityIndicator';

const LoginScreen = (props) => {

    //initialising state variables 
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [toast, setToast] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const [toastTitle, setToastTitle] = useState('');
    const [activityIndicator, setActivityIndicator] = useState(false);
    var valueReturned2;

    //useFocusEffect is called when component mounts and unmounts
    useFocusEffect( 
        useCallback(()=>{
            var valuReturned1;
            async function checkUserOnline(){
                setActivityIndicator(true);
                valuReturned1 = await database()    //reading values from firebase database to check if the user is online
                .ref('/online/')
                .on('value', snapshot => {
                    if(snapshot.val()){
                        setActivityIndicator(false);
                        props.navigation.navigate('DashBoardScreen',{mobileNo: (Object.keys(snapshot.val())[0])}); //navigating to dash-board screen if online
                    } else {
                        setActivityIndicator(false);
                    };
                });
            };
            checkUserOnline();
            return ()=> {       //unsubscribing events and clearing state
                clearState();
                if(valuReturned1) database().ref(`/online/`).off('value',valuReturned1);
                if(valueReturned2) database().ref(`/users/+91${mobile}`).off('value',valuReturned2);
            };
        },[])
    );

    //clearing state values
    const  clearState=()=>{
        setMobile('');
        setPassword('');
        setToast(false);
        setToastMsg('');
        setToastTitle('');
        setActivityIndicator(false);
    };



    const checkLogin= async ()=>{
        Keyboard.dismiss();
        if((mobile.length == 10) && (password.length !=0)){
            setActivityIndicator(true);
            valueReturned2 = database() //checking if the user is registered and navigate to dash-board
            .ref(`/users/+91${mobile}`)
            .on('value',snapshot => {
                if(snapshot.val()){
                    if(snapshot.val().password === password) {
                        async function setUser(){
                            const reference = await database().ref(`/online/+91${mobile}`);
                            await reference.set(true)
                            .then(() => {
                                setActivityIndicator(false);
                                props.navigation.navigate('DashBoardScreen',{mobileNo: `+91${mobile}`});
                            })
                            .catch(()=>{})
                        };
                        setUser();
                        setActivityIndicator(false);
                    } else{
                        setActivityIndicator(false);
                        setToast(true);
                        setToastTitle('Error');
                        setToastMsg('Incorrect Password');
                    };
                } else{
                    setActivityIndicator(false);
                    setToast(true);
                    setToastTitle('Message');
                    setToastMsg('User not Found, Please Register yourself')
                };
            });  
        } else if((mobile.length == 0) || password.length == 0){
            setActivityIndicator(false);
            setToast(true);
            setToastTitle('Error');
            setToastMsg('Fields cannot be empty');
        } else if(mobile.length < 10){
            setActivityIndicator(false);
            setToast(true);
            setToastTitle('Error');
            setToastMsg('Invalid Mobile Number');
        };
    };
    
    //navigating the user to register screen if not registered
    const navigatToRegisterUser=()=>{
        setActivityIndicator(true);
        props.navigation.navigate('RegisterUserScreen');
    };

    //dismiss toast message
    const dismissToast = () =>{
        setToast(false);
        Keyboard.dismiss();
    };

    return(
        <>
            <HeaderComp compName={'Login Screen'}>

                {activityIndicator && <ActivityIndicatorComp/>}

                <View style={mainStyles.titleContainer}>
                    <Text style={mainStyles.titleText}>Hello to Demo App</Text>
                    <Text style={mainStyles.titleText}>Please Login or Register</Text>

                </View>

                <View style={mainStyles.childContainer}>
                    <View style={[mainStyles.textInput, {flexDirection:'row',alignItems:'center'}]} >
                        <Text style={mainStyles.mobileText}>+91</Text>
                        <TextInput 
                            style={mainStyles.mobileText} 
                            value={mobile} 
                            onChangeText={(value)=>setMobile(value?.replace(/[^0-9]/g, ''))}
                            keyboardType='numeric'
                            maxLength={10}
                            placeholder='Enter mobile number'
                        />    
                    </View>

                    <TextInput 
                        style={[mainStyles.textInput, {marginBottom: '12%'}]} 
                        value={password} 
                        onChangeText={(value)=>setPassword(value)}
                        placeholder='Enter Password'
                    />

                    <TouchableOpacity 
                        style={mainStyles.buttons}
                        onPress={checkLogin}
                    >
                        <Text style={mainStyles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={mainStyles.buttons}
                        onPress={navigatToRegisterUser}
                    >
                        <Text style={mainStyles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>

                {toast && 
                <ToastMsg
                    title={toastTitle}
                    message={toastMsg}
                    dismissToast={dismissToast}
                />}
        
            </HeaderComp>
            </>
    );
};

export default LoginScreen;