import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';

const PrevState = () => {
    const [count, setCount] = useState(0);

    const incrementByFive =()=>{
        for(var i=0; i<5; i++){
            setCount(prevCount => prevCount+1);     
        }
    }
 
    return (
        <View>
            <Text style={{fontSize:50, fontWeight:'bold'}}>{count}</Text>
            <Button title={'Increment by 1'} onPress={() =>setCount(prevCount => prevCount + 1  )}/>
            <Text></Text>
            <Button title={'Increment by 5'} onPress={incrementByFive}/>
            <Text></Text>
            <Button title={'reset'} onPress={()=>setCount(0)}/>
            <Text></Text>
        </View>
    )
};
export default PrevState;