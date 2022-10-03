import React from 'react';
import { View, Text } from 'react-native';

const Age = (props) => {
    console.log('render Age')
    return (
        <View>
            <Text style={{fontSize:20,color:'blue'}}>{props.text}</Text>
            <Text style={{fontSize:30,color:'red'}}>{props.count}</Text>
        </View>
    )
};
export default React.memo(Age);