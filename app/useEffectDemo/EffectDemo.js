import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const EffectDemo = () => {

    const [count, setCount] = useState(0);

    useEffect(() => { 
      console.log(`Count value ${count}`)
      return ()=> console.log('unmount component')
    },[count]);

    return ( 
            <View>
                <Text style={{fontSize:30}}>{count}</Text>
                <Button 
                    title={'increment count'} 
                    onPress={()=>{setCount(prevCount => prevCount + 1)}}
                />
            </View>
    ) 
}
export default EffectDemo;
