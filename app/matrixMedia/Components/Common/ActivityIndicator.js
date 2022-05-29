// Description
// Its an overlay indicator which shows up when api calls are made or component is loaded

//importing React, Components and other libraries
import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import { Colors } from '../../Assets/Colors/colors';
import { activityIndicatorStyles } from '../../Styles/ActivityIndicatorStyle';

const ActivityIndicatorComp = (props) => {

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