import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import { firstNameContext, lastNameContext } from '../../App';
const CompC = () => {
    const firstName = useContext(firstNameContext);
    const lastName = useContext(lastNameContext);
    return (
        <View>
            <Text style={{color:'red',fontSize:20}}>useContext Demo</Text>
            <Text></Text>
            {/* <firstNameContext.Consumer>
                {
                    (firstName) => {
                        return (
                        <lastNameContext.Consumer>
                        {
                            lastName => {
                                return (<Text style={{fontSize:20}}>Name: {firstName} {lastName}</Text>)
                            }
                        }
                        </lastNameContext.Consumer>)
                    }
                }
            </firstNameContext.Consumer> */}
           <Text style={{fontSize:20}}>Name hook: {firstName} {lastName}</Text>
        </View>
    )
}
export default CompC;









{/* <lastNameContext.Consumer>
{
    lastName => {
        return (<Text style={{fontSize:20}}>Name: {firstName} {lastName}</Text>)
    }
}
</lastNameContext.Consumer> */}