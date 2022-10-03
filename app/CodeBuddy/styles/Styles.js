import { StyleSheet } from "react-native";

export const Styles= StyleSheet.create({
    textInputMain: {
        marginHorizontal: '3%',
        marginVertical: '5%',

    },
    textInput : {
        height: 40,
        width: '100%',
        paddingLeft: '2%',
        fontSize: 16,
        borderColor: 'black',
        borderWidth:1,
        borderRadius: 5,
        marginBottom:'3%'
    },
    buttonMainCont: {
        flexDirection: 'row',
        justifyContent:'space-around',
        marginHorizontal: '3%',
    },
    button: {
        backgroundColor: 'black',
        height: 35,
        width: '30%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white'
    },
    error: {
        color: 'red',
        marginHorizontal: '3%',
        marginVertical: '5%',
    },
    dropDown: {
        borderColor: 'black',
        borderWidth:1,
        marginBottom: '3%',
        paddingLeft: '2%'
    }
});