import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, TextInput, Keyboard, Alert} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import { mainStyles } from '../Styles/MainStyles';
import HeaderComp from './Header';
import ToastMsg from './Common/ToastMsg';
import ActivityIndicatorComp from './Common/ActivityIndicator';

const CreatePassword = (props) => {

    //initialising state variables 
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [toast, setToast] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const [toastTitle, setToastTitle] = useState('');
    const [activityIndicator, setActivityIndicator] = useState(false);
    var returnedValue;

    //useFocusEffect is called when component mounts and unmounts
    useFocusEffect(
        useCallback(()=>{
            //null
        return ()=>{     //unsubscribing events and clearing state
            clearState();
            if(returnedValue) database().ref(`/users/+91${props.route.params.mobileNo}`).off('value',returnedValue);
        };
        },[])
    );

    const clearState=()=>{
        setPassword('');
        setReEnterPassword('')
        setToast(false);
        setToastMsg('');
        setToastTitle('');
        setActivityIndicator(false);
    };

    //validating password
    const confirmPasscode=()=>{
        Keyboard.dismiss();
        if((password != 0) && (reEnterPassword != 0) && (password === reEnterPassword)){
            setActivityIndicator(true);
            returnedValue = database()
            .ref(`/users/+91${props.route.params.mobileNo}`)    //storing password w.r.t mobile number
            .set({
              password : password,
            })
            .then(() => {
                console.log('Data updated.')
                setActivityIndicator(false);
                Alert.alert(
                    "Message",
                    "Password created successfully ",
                    [
                        { 
                            text: "OK", onPress: () => {
                                props.navigation.navigate('LoginScreen');   //navigating to login screen if password storing is success
                                console.log("OK Pressed")
                            }
                        }
                    ]
                );
            })
            .catch(()=>{
                console.log('error db')
                setToast(true);
                setToastTitle('Error');
                setToastMsg('Something went wrong with Firebase Database');
                setActivityIndicator(false);
            });     
        } else if((password.length == 0) || (reEnterPassword.length == 0)) {
            setToast(true);
            setToastTitle('Message');
            setToastMsg('Fields cannot be empty');
        } else if( password != reEnterPassword){
            setToast(true);
            setToastTitle('Error');
            setToastMsg('Password do not match');
        };
    };

    //dissming toast message after clicking
    const dismissToast = ()=>{
        setToast(false);
        Keyboard.dismiss();
    };

    return(
            <HeaderComp compName={'Create Password'}>

                {activityIndicator && <ActivityIndicatorComp/>}
                
                <View style={mainStyles.titleContainer}>
                    <Text style={mainStyles.titleText}>Please enter password </Text>
                    <Text style={mainStyles.titleText}>as you wish</Text>
                </View>

                <View style={mainStyles.childContainer}>
                    <TextInput 
                        style={mainStyles.textInput} 
                        value={password} 
                        onChangeText={(value)=>setPassword(value)}
                        placeholder='Enter New Password'
                    />            
                    <TextInput 
                        style={[mainStyles.textInput, {marginBottom:'8%'}]} 
                        value={reEnterPassword} 
                        onChangeText={(value)=>setReEnterPassword(value)}
                        placeholder='Re-Enter Password'
                    />

                    <TouchableOpacity 
                        style={mainStyles.buttons}
                        onPress={confirmPasscode}
                    >
                        <Text style={mainStyles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>

                {toast && 
                <ToastMsg
                    title={toastTitle}
                    message={toastMsg}
                    dismissToast={dismissToast}
                />
                }

            </HeaderComp>
    );
};

export default CreatePassword;