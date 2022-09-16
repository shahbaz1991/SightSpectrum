//importing React, Components and other libraries
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Keyboard, Alert } from "react-native";
import { connect } from "react-redux";
import { Label } from "./label/lable";
import { updateName } from "./redux/actions";
import { ScreenStyles } from "./styles/ScreenStyles";

const ScreenOne = (props) =>{
    const [name, setName] = useState('');
    const {nameFromRedux, updateName, navigation} = props;

    //updating name in redux
    const onUpdateName = () => {
        Keyboard.dismiss();
        if(name.length != 0){
            updateName(name);
            Alert.alert(
                'Updated',
                'Name Updated in Redux',
                [
                    { text: "OK", onPress: () => setName('')}
                ]
            );
        } else {
            Alert.alert(
                'Error',
                'Please enter Name field',
                [
                    { text: "OK", onPress: () => {}}
                ]
            );
        };
    };

    return (
        <View style={ScreenStyles.background}>  
            <Text style={ScreenStyles.textRight}>Name: {nameFromRedux ? nameFromRedux : 'No Name'}</Text>
            <Text style={ScreenStyles.header}>{Label.welcomeScreenOne}</Text>
            <View style={ScreenStyles.mainContainer}>
                <TextInput
                    style={ScreenStyles.textInput}
                    value={name}
                    onChangeText={(value) => setName(value.replace(/[^a-zA-Z ]/g, ''))}
                />
                <TouchableOpacity
                    style={ScreenStyles.button}
                    onPress={onUpdateName}
                >
                    <Text style={ScreenStyles.buttonText}>{Label.updateName}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ScreenStyles.button}
                    onPress={()=>navigation.navigate('ScreenTwo')}
                >
                    <Text style={ScreenStyles.buttonText}>{Label.moveToScreenTwo}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => ({
        nameFromRedux: state.name,
});

const mapDispatchToProps = (dispatch) => {
    return {
      updateName: (name) => {
        dispatch(
          updateName(name)
        );
      },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenOne);