import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';

const UseStateDemo = () => {

    const [name, setName] = useState('');

    return (
        <View>
            <Text></Text>
            <Text style={{fontSize:30}}>{name}</Text>
            <TextInput 
                style={{borderColor:'blue',borderWidth:1,fontSize:20}} 
                onChangeText={text =>  setName(text)} 
                value={name} 
                placeholder={"Enter Name"} 
            />
            <Text></Text>
        </View>
    )
};
export default UseStateDemo;