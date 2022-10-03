import React, {useState, useCallback} from 'react';
import { View } from 'react-native';
import Age from './Age';
import AgeButton from './AgeButton';
import Salary from './Salary';
import SalaryButton from './SalaryButton';
import Title from './Title';

const ParentComp = () => {

    const [salary, setSalary] = useState(1000);
    const [age, setAge] = useState(20);

    const incrementSalary = useCallback(() => {
        setSalary( salary + 100);
    },[salary]);

    const incrementAge = useCallback(() => {
        setAge( age + 1);
    },[age]);

    return (
        <View>
           <Title/>
           <Salary text={'Salary'} count={salary}/>
           <SalaryButton handleClick = {incrementSalary}/>
           <Age  text={'Age'} count={age}/>
           <AgeButton handleClick = {incrementAge}/>
        </View>
    )
};
export default ParentComp;