import React, { useState } from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import database from '@react-native-firebase/database';
import { mainStyles } from '../Styles/MainStyles';
// import HeaderComp from './Header';
import { Colors } from '../Assets/Colors/colors';
import { toastMsgStyle } from '../../Styles/ToastMsgStyle';

const ToastMsg = ({title, message, dismissToast}) => {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    // const disableToast=({message, dismissToast})=>{
    //    console.log('toast disable');
    // };

    return(
            <View style={toastMsgStyle.mainContainer}>
                <View style={toastMsgStyle.mainBar}>
                    <Text style={toastMsgStyle.msgTitle}>{title}</Text>
                    <TouchableOpacity 
                    // style={mainStyles.buttons}
                    onPress={dismissToast}
                    >
                        <Text style={toastMsgStyle.dissmissText}>Dismiss</Text>
                    </TouchableOpacity> 
                </View>
                
            <Text style={toastMsgStyle.mainMsg}>{message}</Text>
            </View>
           
    );
};

export default ToastMsg;