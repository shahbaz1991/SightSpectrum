//import React, Components and other libraries
import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, TextInput, Keyboard, Alert} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import { dashBoardScreenStyle } from '../Styles/DashBoardStyle';
import { mainStyles } from '../Styles/MainStyles';
import HeaderComp from './Header';
import ActivityIndicatorComp from './Common/ActivityIndicator';
import ToastMsg from './Common/ToastMsg';

const DashBoard = (props) => {

    //initialising state variables 
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [state, setState] = useState('');
    const [activityIndicator, setActivityIndicator] = useState(false);
    const [toast, setToast] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const [toastTitle, setToastTitle] = useState('');
    const [dbEmpty, setDbEmpty] = useState(false);
    const [edit, setEdit] = useState(true);
    var valueReturned2, retunredValue3;

    //useFocusEffect is called when component mounts and unmounts
    useFocusEffect(
        useCallback(()=>{
            var retunredValue1;
            async function checkdatabase(){
                retunredValue1 = await database()   //checking user details and filling respective fields if the values are already present
                    .ref(`/details/${props.route.params.mobileNo}`)
                    .on('value', snapshot => {
                        if(snapshot.val()){
                            setName(snapshot.val().name);
                            setAge(snapshot.val().age);
                            setState(snapshot.val().state);
                            setDbEmpty(false)
                            setEdit(false);
                            console.log('useEff',edit);
                        } else{
                            setDbEmpty(true);
                            setEdit(true);
                        };     
                    });
            };
            checkdatabase();

            return ()=> {       //unsubscribing events and clearing state
                clearState();
                if(retunredValue1) database().ref(`/details/${props.route.params.mobileNo}`).off('value',retunredValue1);
                if(valueReturned2)  database().ref(`/online/${props.route.params.mobileNo}`).off('value',retunredValue2);
                if(retunredValue3)  database().ref(`/details/+91${props.route.params.mobileNo}`).off('value',retunredValue3);
            };
        },[])
    );

    //resetting state values to initial state
    const clearState=()=>{
        setName('');
        setAge('');
        setState('');
        setToast(false);
        setToastMsg('');
        setToastTitle('');
        setActivityIndicator(false);
        setDbEmpty(true);
        setEdit(false);
    };

    //loging out and clearing the user from the firebase database
    const navigateToLogInScreen= async ()=>{
        valueReturned2= await database().ref(`/online/${props.route.params.mobileNo}`).set(null);
        props.navigation.navigate('LoginScreen');
    };

    //updating user details to firebase database
    const updateDetails=()=>{
        Keyboard.dismiss();
        if(edit){
            if((name.length != 0) && (age.length!=0) && (state.length!=0)){
                setActivityIndicator(true);
                retunredValue3 = database()
                .ref(`/details/${props.route.params.mobileNo}`)
                .set({
                name : name,
                age : age,
                state : state
                })
                .then(() => {
                    console.log('Data updated.',edit)
                    setActivityIndicator(false);
                    Alert.alert(
                        "Message",
                        "Details are stored in Firebase database successfully ",
                        [
                            { 
                                text: "OK", onPress: () => {
                                    setEdit(false);
                                    console.log("OK Pressed")
                                }
                            }
                        ]
                    );
                })
                .catch(()=>{
                    setActivityIndicator(false);
                    setToast(true);
                    setToastMsg('Error');
                    setToastTitle('Somthing went wrong, Please try again');
                    console.log('error db')
                });
            } else {
                setActivityIndicator(false);
                setToast(true);
                setToastTitle('Message');
                setToastMsg('Fields cannot be empty');
            };
        };
    };

    //dissming toast message 
    const dismissToast = ()=>{
        setToast(false);
        Keyboard.dismiss();
    };

    return(
        <HeaderComp compName={'Dash-Board'}>

            {activityIndicator && <ActivityIndicatorComp/>}

            <View style={dashBoardScreenStyle.titleContainer}>
                {dbEmpty ?
                    <View style={dashBoardScreenStyle.screenTitleView}>
                        <Text style={dashBoardScreenStyle.screenTitle}>Enter details to update in</Text>
                        <Text style={dashBoardScreenStyle.screenTitle}>Firebase Database</Text>
                    </View>
                    : 
                    <View style={dashBoardScreenStyle.screenTitleView}>
                        <Text style={dashBoardScreenStyle.screenTitle}>Details are shown from</Text>
                        <Text style={dashBoardScreenStyle.screenTitle}>Firebase Database</Text>
                    </View>
                }
            </View>

            <View style={dashBoardScreenStyle.childContainer}>
                <View style={dashBoardScreenStyle.childBlock}>
                    <Text style={dashBoardScreenStyle.childTitle}>Name</Text>
                    <TextInput 
                        style={dashBoardScreenStyle.childValue} 
                        value={name} 
                        onChangeText={(value)=>setName(value.replace(/[^a-zA-z]/g, ''))}
                        placeholder='Enter Middle Name'
                        editable={edit}
                        maxLength={15}
                    />  
                </View>

                <View style={dashBoardScreenStyle.childBlock}>
                    <Text style={dashBoardScreenStyle.childTitle}>Age</Text>
                    <TextInput 
                        style={dashBoardScreenStyle.childValue} 
                        value={age} 
                        keyboardType='numeric'
                        onChangeText={(value)=>setAge(value.replace(/[^0-9]/g, ''))}
                        maxLength={2}
                        editable={edit}
                        placeholder='Enter Age'
                    />  
                </View>
                
                <View style={[dashBoardScreenStyle.childBlock, {marginBottom: '8%'}]}>
                    <Text style={dashBoardScreenStyle.childTitle}>State</Text>
                    <TextInput 
                        style={dashBoardScreenStyle.childValue} 
                        value={state} 
                        onChangeText={(value)=>setState(value.replace(/[^a-zA-Z ]/g, ''))}
                        placeholder='Enter State'
                        editable={edit}
                        maxLength={20}
                    />  
                </View>

                {!edit ?
                    <TouchableOpacity 
                        style={dashBoardScreenStyle.button}
                        onPress={()=>setEdit(true)}
                    >
                        <Text style={dashBoardScreenStyle.buttonText}>Edit</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity 
                        style={dashBoardScreenStyle.button}
                        onPress={updateDetails}
                    >
                        <Text style={dashBoardScreenStyle.buttonText}>Update Info</Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity 
                    style={mainStyles.buttons}
                    onPress={navigateToLogInScreen}
                >
                    <Text style={mainStyles.buttonText}>Log Out</Text>
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

export default DashBoard;