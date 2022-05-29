// Description
// This is the main component which shows the header and other components as its child

//import React, Components and other libraries
import React from 'react';
import {View, Text } from 'react-native';
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