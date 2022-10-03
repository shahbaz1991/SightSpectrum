//import React, Components and other libraries
import React, {useState, useCallback, useRef} from 'react';
import {View, Text, TouchableOpacity, TextInput, Keyboard, BackHandler} from 'react-native';
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
    const [timer, setTimer] = useState(120);
    const [reSet, setReSet] = useState(false);
    const timerRef = useRef(timer);
    var returnedValue, timerId;

    //useFocusEffect is called when component mounts and unmounts
    useFocusEffect(
        useCallback(()=>{
            BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick); //retrict user from going back if otp is send

        return ()=>{     //unsubscribing events and clearing state
            clearState();
            if(returnedValue) database().ref(`/users/+91${mobile}`).off('value',returnedValue);
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
            clearInterval(timerId)
        };
        },[])
    );

    //disable back button if otp is send
    const handleBackButtonClick=()=>{
        return true;
    };

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
        setTimer(120);
        setReSet(false);
    };

    //verifying mobile number
    const sendOtpHandler= async()=>{
        Keyboard.dismiss();
        if(mobile.length == 10){
            setActivityIndicator(true);
            returnedValue = database()
            .ref(`/users/+91${mobile}`)     //check if the mobile number is already registered
            .on('value',snapshot => {
                if(snapshot.val()){
                    setToast(true)
                    setToastTitle('Message')
                    setToastMsg('Mobile number already registered')
                    setActivityIndicator(false);
                    return
                } else {
                    async function registerUser(){
                        const confirmation = await auth().signInWithPhoneNumber(`+91${mobile}`);    //registering mobile number
                        if(confirmation.confirm){
                            setToast(false);
                            setConfirm(confirmation);
                            setToggle(true);
                            setEditable(false);
                            setActivityIndicator(false);
                            setReSet(false);
                            setTimer(120);
                            timerId= setInterval(()=>{
                                timerRef.current -= 1;
                                if(timerRef.current<0){ 
                                    setReSet(true);
                                    clearInterval(timerId);
                                } else {
                                    setTimer(timerRef.current);
                                };
                            }, 1000)
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
    
    //dismiss toast message
    const dismissToast = ()=>{
        setToast(false);
        Keyboard.dismiss();
    };
    //reSend otp when timer is 0
    const onReSetPressed=()=>{
        sendOtpHandler();
    }
    return(
        <HeaderComp compName={'Register'}>

            {activityIndicator && <ActivityIndicatorComp/>}

            <View style={mainStyles.titleContainer}>
                <Text style={mainStyles.titleText}>Please enter a valid </Text>
                <Text style={mainStyles.titleText}>Mobile number</Text>
            </View>

            <View style={mainStyles.childContainer}>
                <View style={[mainStyles.textInput, {flexDirection:'row',alignItems:'center'}, !toggle && {marginBottom: '8%'}]} >
                    <Text style={mainStyles.mobileText}>+91 </Text>
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
                <>
                <TextInput
                    style={[mainStyles.textInput, {marginBottom: '2%'}]} 
                    value={otp} 
                    onChangeText={(value)=>setOtp(value?.replace(/[^0-9]/g, ''))}
                    maxLength={6}
                    keyboardType='numeric'
                    placeholder='Enter OTP'
                /> 
                <View style={registerStyle.timerView}>
                    <Text style={registerStyle.timerFont}>{timer} sec</Text>
                    <TouchableOpacity
                        onPress={onReSetPressed}
                        disabled={!reSet?true:false}
                    >
                        <Text style={[registerStyle.timerFont,!reSet&&{opacity:0.5} ]}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>
                </>
                }

                
                <TouchableOpacity 
                    style={[mainStyles.buttons, (timer==0)&&{opacity:0.5}]}
                    disabled={(timer==0)?true:false}
                    onPress={!toggle ? sendOtpHandler : verifyOtp}
                >
                    <Text style={mainStyles.buttonText}>{toggle?'Verify':'Send OTP'}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={loginPressed}
                    disabled={(timer==0)?true:false}
                >
                    <Text style={[registerStyle.loginText, (timer==0)&&{opacity:0.5}]}>LogIn</Text>
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