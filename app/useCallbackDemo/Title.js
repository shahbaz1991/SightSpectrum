import React from 'react';
import { View, Text } from 'react-native';

const Title = (props) => {
    console.log('render Title')
    return (
        <View>
            <Text  style={{fontSize:20,color:'red'}}>useCallBack Demo</Text>
        </View>
    )
};
export default React.memo(Title);