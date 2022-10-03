import React, {useReducer} from 'react';
import { View, Text, Button } from 'react-native';

const initialState = 0;
const reducer = (state, action) =>{
    switch(action.type){
        case 'INCREMENT' :
            return ( state + action.value );
        case 'DECREMENT' :
            return (state - action.value );
        case 'RESET' :
            return initialState;
        default :
            return state;
    };
};

const ReducerDemo = () => {

    const [count, dispatch] =  useReducer(reducer, initialState );

    return (
        <View>
            <Text style={{fontSize:50, fontWeight:'bold'}}>{count}</Text>
            <Text></Text>
            <Button title={'Increment'} onPress={() =>dispatch({type:'INCREMENT', value:1})}/>
            <Text></Text>
            <Button title={'Decrement'} onPress={() =>dispatch({type:'DECREMENT', value:1})}/>
            <Text></Text>
            <Button title={'reset'} onPress={() =>dispatch({type:'RESET'})}/>
            <Text></Text>
        </View>
    );
};
export default ReducerDemo;