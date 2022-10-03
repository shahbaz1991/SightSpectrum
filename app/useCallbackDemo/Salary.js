import React from 'react';
import { View, Text } from 'react-native';

const Salary = (props) => {
    console.log('render Salary')
    return (
        <View>
            <Text style={{fontSize:20,color:'blue'}}>{props.text}</Text>
            <Text style={{fontSize:30,color:'red'}}>{props.count}</Text>
        </View>
    )
};
export default React.memo(Salary);