import React, {useEffect, useRef} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
const FocusingRef = () => {
    
    const focusRef = useRef(null);

    useEffect(()=>{
        focusRef.current.focus();
    });

    return (
        <View>
           <TextInput style={{borderWidth:1, borderColor:'red'}} ref={focusRef} />
           <Text></Text>
           <Button title={'focus'} onPress={()=>focusRef.current.focus()}/>
        </View>
    )
}
export default FocusingRef;