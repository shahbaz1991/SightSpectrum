import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { updateNameAndAdd } from '../redux/actions';
import { Styles } from '../styles/Styles';

const ScreenTwo = (props) => {
    const {firstName, lastName, address, updateNameAndAdd, navigation} = props;

    const [fName, setFName] = useState(firstName);
    const [lName, setLName] = useState(lastName);
    const [add, setAddress] = useState(address);
    const [error, setError] = useState('');

    const updateRedux = () =>{
        Keyboard.dismiss();
        setError('');
        validate();
        if(validate()){
            updateNameAndAdd({
                firstName: fName,
                lastName: lName,
                address: add
            });
            return true;
        };
    };

    const saveAndNext = () => {
        updateRedux()
        if(updateRedux()){
            navigation.navigate('ScreenThree')
        };
    };


    const validate = () => {
        if((fName.length > 2) && (add.length > 10)){
            return true;
        } else {
            setError('FirstName/Address are of minimum length ')
        };
    };

    return (
        <View>
        <View style={Styles.textInputMain}>
            <Text>First Name</Text>
            <TextInput
                style={Styles.textInput}
                value={fName}
                onChangeText={(value)=>setFName(value.replace(/[^a-zA-z ]/g, ''))}
                maxLength={50}
            />
            <Text>Last Name</Text>
            <TextInput
                style={Styles.textInput}
                value={lName}
                onChangeText={(value)=>setLName(value.replace(/[^a-zA-z ]/g, ''))}
            />
            <Text>Address</Text>
            <TextInput
                style={Styles.textInput}
                value={add}
                onChangeText={(value)=>setAddress(value)}
            />
        </View>
       <View style={Styles.buttonMainCont}>
        <TouchableOpacity
            style={[Styles.button]}
            onPress={()=>navigation.goBack()}
        >
            <Text style={Styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[Styles.button, {backgroundColor:'#10BBE5'}]}
            onPress={updateRedux}
        >
            <Text style={Styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[Styles.button, {backgroundColor:'green'}]}
            onPress={saveAndNext}
        >
            <Text style={Styles.buttonText}>Save and Next</Text>
        </TouchableOpacity>
       </View>
       {
        (error.length != 0) && <Text style={Styles.error}>ERROR : {error}</Text>
       }
    </View>
    )
};

const mapStateToProps = (state) => ({
    firstName: state.firstName,
    lastName: state.lastName,
    address: state.address
});

const mapDispatchToProps = (dispatch) => ({
    updateNameAndAdd : ( value) => {
        dispatch(updateNameAndAdd(value))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenTwo);