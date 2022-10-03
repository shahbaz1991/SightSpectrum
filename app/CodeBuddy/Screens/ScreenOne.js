import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { updateEmailAndPassword } from '../redux/actions';
import { Styles } from '../styles/Styles';

const ScreenOne = (props) => {
    const {emailId, password, updateEmailAndPassword, navigation} = props;
    const [email, setEmail] = useState(emailId);
    const [passCode, setPassCode] = useState(password);
    const [error, setError] = useState('');

    const updateRedux = () =>{
        Keyboard.dismiss();
        setError('');
        validate();
        if(validate()){
            updateEmailAndPassword({emailId:email, password: passCode});
            return true;
        };
    };

    const saveAndNext = () => {
        updateRedux()
        if(updateRedux()){
            navigation.navigate('ScreenTwo')
        }
    };

    const validate = () =>{
        if((email.length !=0) && (passCode.length !=0)){
            if((email.includes('@') && email.includes('.'))){
                if(passCode.match(/(?=(.*\d){2})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[!@#$%]){2})/)){
                    return true;
                } else{
                    setError('Password must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters')
                }
            } else {
                setError('Invalid Email')
            }
        } else { 
            setError('Email/Password cannot be empty')
        };
    };
    return (
        <View>
            <View style={Styles.textInputMain}>
                <Text>Email</Text>
                <TextInput
                    style={Styles.textInput}
                    value={email}
                    onChangeText={(value)=>setEmail(value)}
                />
                <Text>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={Styles.textInput}
                    value={passCode}
                    onChangeText={(value)=>setPassCode(value)}
                />
            </View>
           <View style={Styles.buttonMainCont}>
            <TouchableOpacity
                disabled={true}
                style={[Styles.button, {opacity:0.5}]}
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
    emailId: state.emailId,
    password: state.password
});

const mapDispatchToProps = (dispatch) => ({
    updateEmailAndPassword : (value) => {
        dispatch(updateEmailAndPassword(value))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenOne);