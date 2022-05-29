import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { mainStyles } from '../Styles/MainStyles';
import HeaderComp from './Header';
import ToastMsg from './Common/ToastMsg';
import { registerStyle } from '../Styles/RegisterScreenStyle';
import ActivityIndicatorComp from './Common/ActivityIndicator';

const RegisterUser = (props) => {

    //initialising state variables 
    const [mobile, setMobile] = useState('');
    const [toggle, setToggle] = useState(false);
    const [otp, setOtp] = useState('');
    const [confirm, setConfirm] = useState(null);
    const [toast, setToast] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const [toastTitle, setToastTitle] = useState('');
    const [editable, setEditable] = useState(true);
    const [activityIndicator, setActivityIndicator] = useState(false);
    var returnedValue;

    //useFocusEffect is called when component mounts and unmounts
    useFocusEffect(
        useCallback(()=>{
        console.log('userEffect Regis');
        return ()=>{     //unsubscribing events and clearing state
            console.log('unsubscribe userEffect Regis');
            clearState();
            if(returnedValue) database().ref(`/users/+91${mobile}`).off('value',returnedValue);
        };
        },[])
    );

    // clearing state 
    const clearState=()=>{
        setMobile('');
        setToggle(false);
        setOtp('')
        setConfirm(null);
        setToast(false);
        setToastMsg('');
        setToastTitle('');
        setEditable(false);
        setActivityIndicator(false);
    };

    //verifying mobile number
    const sendOtpHandler= async()=>{
        Keyboard.dismiss();
        if(!toggle && (mobile.length == 10)){
            setActivityIndicator(true);
            returnedValue = database()
            .ref(`/users/+91${mobile}`)     //check if the mobile number is already registered
            .on('value',snapshot => {
                console.log('snapshot',snapshot.val());     
                if(snapshot.val()){
                    console.log('in if');
                    setToast(true)
                    setToastTitle('Message')
                    setToastMsg('Mobile number already registered')
                    setActivityIndicator(false);
                    return
                } else {
                    async function registerUser(){
                        const confirmation = await auth().signInWithPhoneNumber(`+91${mobile}`);    //registering mobile number
                        console.log('confirmation.confirm',confirmation.confirm);
                        if(confirmation.confirm){
                            setToast(false);
                            setConfirm(confirmation);
                            setToggle(true);
                            setEditable(false);
                            setActivityIndicator(false);
                        };
                    };
                    registerUser();
                };
            });
        } else if(mobile.length === 0){
            setToast(true)
            setToastTitle('Message')
            setToastMsg('Fields cannot be empty')
        } else if(mobile.length < 10){
            setToast(true)
            setToastTitle('Error')
            setToastMsg('Invalid mobile number')
        };
    };

    //validating OTP
    const verifyOtp= async()=>{
        Keyboard.dismiss();
        if(otp.length == 6){
            setActivityIndicator(true);
            try{
                await confirm.confirm(otp); 
                props.navigation.navigate('CreatePasswordScreen',{
                    mobileNo : mobile,
                });
                setActivityIndicator(false);
            } catch (error) {
                console.log(error.code,'Invalid code.');
                setToast(true)
                setToastTitle('Error')
                setToastMsg('Invalid OTP')
                setActivityIndicator(false);
            };
        } else if(otp.length == 0){
            setToast(true)
            setToastTitle('Message')
            setToastMsg('Please enter valid OTP')
        } else if(otp.length < 6 ){
            setToast(true)
            setToastTitle('Error')
            setToastMsg('Please enter 6 digit OTP')
        };    
    };
   
    const loginPressed=()=>{
        props.navigation.navigate('LoginScreen');
    };

    const dismissToast = ()=>{
        setToast(false);
        Keyboard.dismiss();
    };

    return(
        <HeaderComp compName={'Register'}>

            {activityIndicator && <ActivityIndicatorComp/>}

            <View style={mainStyles.titleContainer}>
                <Text style={mainStyles.titleText}>Please enter a valid </Text>
                <Text style={mainStyles.titleText}>Mobile number</Text>
            </View>

            <View style={mainStyles.childContainer}>
                <View style={[mainStyles.textInput, {flexDirection:'row',alignItems:'center'}, !toggle && {marginBottom: '8%'}]} >
                    <Text style={mainStyles.mobileText}>+91</Text>
                    <TextInput 
                        style={mainStyles.mobileText} 
                        value={mobile} 
                        onChangeText={(value)=>setMobile(value?.replace(/[^0-9]/g, ''))}
                        keyboardType='numeric'
                        editable={editable}
                        maxLength={10}
                        placeholder='Enter mobile number'
                    />    
                </View>

                {(toggle) && 
                <TextInput
                    style={[mainStyles.textInput, {marginBottom: '12%'}]} 
                    value={otp} 
                    onChangeText={(value)=>setOtp(value?.replace(/[^0-9]/g, ''))}
                    maxLength={6}
                    keyboardType='numeric'
                    placeholder='Enter OTP'
                /> 
                }

                <TouchableOpacity 
                    style={[mainStyles.buttons]}
                    onPress={!toggle ? sendOtpHandler : verifyOtp}
                >
                    <Text style={mainStyles.buttonText}>{toggle?'Verify':'Send OTP'}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={loginPressed}
                >
                    <Text style={registerStyle.loginText}>LogIn</Text>
                </TouchableOpacity>
            </View>
           
            {toast && 
            <ToastMsg
                title={toastTitle}
                message={toastMsg}
                dismissToast={dismissToast}
            />}

        </HeaderComp>
    );
};

export default RegisterUser;