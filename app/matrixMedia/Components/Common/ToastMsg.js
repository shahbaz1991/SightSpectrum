// Description
// Component which is show at the bottom for errors or messages
// Please Note: User needs to click the 'Dismiss' text to disable the toast component 

//import React, Components and other libraries
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { toastMsgStyle } from '../../Styles/ToastMsgStyle';

const ToastMsg = ({title, message, dismissToast}) => {

    return(
            <View style={toastMsgStyle.mainContainer}>

                <View style={toastMsgStyle.mainBar}>
                    <Text style={toastMsgStyle.msgTitle}>{title}</Text>
                    <TouchableOpacity 
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