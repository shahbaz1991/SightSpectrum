import React, { useState } from 'react';
import {View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import { headerStyles } from '../Styles/HeaderStyles';

const HeaderComp = (props) => {
    return(
         <>
            <View style={headerStyles.headerStyle}>
                <Text style={headerStyles.headerTextStyle}>{props?.compName}</Text>
            </View>
            <View style={headerStyles.childrenStyle}>
                {props?.children}
            </View>
        </>
    );
};

export default HeaderComp;