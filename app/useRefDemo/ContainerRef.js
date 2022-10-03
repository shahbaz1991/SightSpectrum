import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Button} from 'react-native';

const ContainerRef = () => {
    
    const [count, setCount] = useState(0);
    const intervalRef = useRef();

    useEffect(()=>{
       const intervalId = setInterval(()=>{
            setCount( prevCount => prevCount + 1 );
        },1000);
        intervalRef.current = intervalId;
        return ()=>{
            clearInterval( intervalRef.current);
        };
    },[]);

    return (
        <View>
            <Text style={{fontSize:30}} >{count}</Text>
           <Button title={'Stop count'} onPress={()=>clearInterval( intervalRef.current)}/>
        </View>
    )
}
export default ContainerRef;