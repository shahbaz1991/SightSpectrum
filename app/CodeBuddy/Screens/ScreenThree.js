import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { Dropdown } from 'react-native-element-dropdown';
import { Styles } from '../styles/Styles';
import { updateCodeAndNumber } from '../redux/actions';

const ScreenThree = (props) => {
    const {phoneNumber, updateCodeAndNumber, countryCode, navigation} = props

    const [code, setCode] = useState(countryCode)
    const [num, setNumber] = useState(phoneNumber);
    const [error, setError] = useState('');
    const [modal, setModal] = useState(false);

    const data = [
        { label: '+91', value: '+91' },
        { label: '+1', value: '+1' },
    ];
    
    const updateRedux = () =>{
        Keyboard.dismiss();
        setError('');
        validate();
        if(validate()){
            updateNameAndAdd({
                code: code,
                num: num
            });
            setModal(true)
        };
    };

    const validate = () => {
       if((num.length === 10) ){
        return true
       } else {
        setError('Numbe should be of 10 digits')
       };
    };

    return (
        <View>
             <View style={Styles.textInputMain}>
                <Dropdown
                    style={Styles.dropDown}
                    data={data}
                    value={code}
                    onChange={item => {
                        setCode(item.value);
                    }}
                    labelField="label"
                    valueField="value"
                />
                <Text>Enter Mobile Number</Text>
                <TextInput
                    style={Styles.textInput}
                    value={num}
                    onChangeText={(value)=>setNumber(value.replace(/[^0-9]/g, ''))}
                    maxLength={10}
                    keyboardType='numeric'
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
            disabled={true}
            style={[Styles.button, {opacity:0.5}]}
        >
            <Text style={Styles.buttonText}>Save and Next</Text>
        </TouchableOpacity>
       </View>
       {
        (error.length != 0) && <Text style={Styles.error}>ERROR : {error}</Text>
       }
       { 
        modal && 
        <View style={{backgroundColor: 'blue', position: 'absolute'}}>
            
        </View>
        }
    </View>
    )
};

const mapStateToProps = (state) => ({
    phoneNumber: state.phoneNumber,
    countryCode: state.countryCode,
})
const mapDispatchToProps = (dispatch) => ({
    updateCodeAndNumber : ( value) => {
        dispatch(updateCodeAndNumber(value))
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenThree);