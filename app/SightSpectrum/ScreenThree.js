//importing React, Components and other libraries
import React from "react";
import { View,Text } from "react-native";
import { connect } from "react-redux";
import { Label } from "./label/lable";
import { ScreenStyles } from "./styles/ScreenStyles";

const ScreenThree = ( props ) =>{
    return (
        <View style={ScreenStyles.background}>
            <Text style={ScreenStyles.textRight}>Name: {props?.name ? props.name : 'No Name'}</Text>
            <Text style={ScreenStyles.header}>{Label.welcomeScreenThree}</Text>
        </View>
    );
};

const mapStateToProps = (state) => ({
    name: state.name
});

export default connect(
    mapStateToProps,
    null
)(ScreenThree);