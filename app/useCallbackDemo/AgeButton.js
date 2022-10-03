import React from 'react';
import { View, Button} from 'react-native';

const AgeButton = ({handleClick}) => {
    console.log('render Age Button')
    return (
        <View>
            <Button title={'Increment Age'} onPress={handleClick}/>
        </View>
    )
};
export default React.memo(AgeButton);