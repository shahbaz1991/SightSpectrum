import React, {useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const StateObj = () => {

    const [nameObj, setNameObj] = useState({firstName : '', lastName : ''})
{/* useState using Object, the setter function does not merge the state automatically 
as in class comp we use spread operator to do it    */}
    return (
        <View>
            <View style={{flexDirection:'row',marginLeft:-50}}>
                <TextInput 
                    style={{borderColor:'red',borderWidth:1,fontSize:20,marginRight:10}} 
                    onChangeText={text =>  setNameObj({...nameObj, firstName: text })} 
                    value={nameObj.firstName} 
                    placeholder={"Enter First Name"} 
                />
                <TextInput 
                    style={{borderColor:'red',borderWidth:1,fontSize:20}} 
                    onChangeText={text =>  setNameObj({...nameObj, lastName : text })} 
                    value={nameObj.lastName} 
                    placeholder={"Enter Last Name"} 
                />
            </View>
            <Text style={{fontSize:30}}>Name: {nameObj.firstName} , {nameObj.lastName} </Text>
        
        </View>
    )
};
export default StateObj;