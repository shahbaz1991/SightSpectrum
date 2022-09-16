//importing React, Components and other libraries
import React from "react";
import { View,Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import SwipeButton from 'rn-swipe-button';
import { Colors } from "./assets/colors/colors";
import { Label } from "./label/lable";
import { ScreenStyles } from "./styles/ScreenStyles";

const ScreenTwo = (props) =>{
    const {navigation, name} = props;

    //initialising a reset variable for slider 
    let forceResetLastButton = null;

    //dimond image for slider
    const CheckoutButton = () => {
        return(
            <Image resizeMode='cover' style={{height:30,width:30}} source={require('../SightSpectrum/assets/images/dimond.png')}/>
        );
    }; 

    return (
        <View style={ScreenStyles.background}>
            <Text style={ScreenStyles.textRight}>Name:  {name ? name : 'No Name'}</Text>
            <Text style={ScreenStyles.header}>{Label.welcomeScreenTwo}</Text>
            <View  style={[ScreenStyles.mainContainer, {justifyContent:'flex-end'}]}>
                <Text style={ScreenStyles.variationText}>{Label.buttonVariation}</Text>
                <TouchableOpacity
                    style={[ScreenStyles.button, {backgroundColor: 'transparent'}]}
                >
                    <Text  style={[ScreenStyles.buttonText, {color: Colors.lightBlue}]}>{Label.pressMe}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[ScreenStyles.button, {backgroundColor: Colors.lightBlack}]}
                >
                    <Text style={[ScreenStyles.buttonText, {color: Colors.lightBlue}]}>{Label.pressMe}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={ScreenStyles.button}
                >
                    <Text style={ScreenStyles.buttonText}>{Label.pressMe}</Text>
                </TouchableOpacity>
                <SwipeButton
                    containerStyles={{borderRadius: 5, marginLeft: 0}}
                    height={50}
                    width={'100%'}
                    onSwipeSuccess={() =>{
                        if(forceResetLastButton) forceResetLastButton();
                        navigation.navigate('ScreenThree');
                        }
                    }
                    forceReset={ (reset) => {
                        forceResetLastButton = reset 
                    }}
                    railBackgroundColor= {'transparent'}
                    railStyles={{borderRadius: 5}}
                    railBorderColor={Colors.lightBlue}
                    railFillBackgroundColor={Colors.lightBlue}
                    thumbIconComponent={CheckoutButton}
                    thumbIconStyles={{borderRadius: 2}}
                    thumbIconWidth={59} 
                    title={Label.swipeToContinue}
                    titleColor={Colors.lightBlue}
                    thumbIconBackgroundColor={Colors.lightBlue}
                    thumbIconBorderColor={Colors.lightBlue}
                />
            </View>
        </View>
    )
};

const mapStateToProps = (state) => ({
    name: state.name
});

export default connect(
    mapStateToProps,
    null
)(ScreenTwo);