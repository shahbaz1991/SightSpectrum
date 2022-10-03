import React from 'react';
import { View, Button } from 'react-native';

const SalaryButton = ({handleClick}) => {
    console.log('render Salary Button')
    return (
        <View>
           <Button title={'Increment Salary'} onPress={handleClick}/>
        </View>
    )
};
export default React.memo(SalaryButton);