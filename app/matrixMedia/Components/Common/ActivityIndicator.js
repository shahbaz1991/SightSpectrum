import React, { useState, useEffect } from 'react';
import {ActivityIndicator, View, Text, TouchableOpacity, TextInput} from 'react-native';
import { Colors } from '../../Assets/Colors/colors';
import { activityIndicatorStyles } from '../../Styles/ActivityIndicatorStyle';

const ActivityIndicatorComp = (props) => {
    const [mobile, setMobile] = useState('');
    return(
        <View style={activityIndicatorStyles.mainContainer}>
            <View  style={activityIndicatorStyles.innerContainer}>
                <ActivityIndicator size="large" color={Colors.borderColor}/>
                <Text></Text>
                <Text style={activityIndicatorStyles.loadingMsg}>Please wait...</Text>
            </View>
        </View>
       
   )
}
export default ActivityIndicatorComp;