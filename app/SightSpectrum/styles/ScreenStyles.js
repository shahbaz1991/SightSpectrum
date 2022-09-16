import { StyleSheet } from "react-native";
import { Colors } from "../assets/colors/colors";

export const ScreenStyles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: Colors.black
    },
    mainContainer: {
        flex:1,
        paddingHorizontal: '3%',
        paddingBottom: '5%',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: Colors.lightBlue,
        height: 50,
        width: '100%',
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: '3%'
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.white
    },
    textInput: {
        width: '100%',
        height:50,
        borderColor: Colors.black,
        borderWidth:1,
        marginBottom: '5%',
        backgroundColor: Colors.white,
        borderRadius: 5,
        paddingLeft: '2%',
        fontSize: 18
    },
    textRight: {
        textAlign:'right',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: '5%',
        marginVertical: '2%',
        color: Colors.white
    },
    variationText: {
        color: Colors.yellow,
        textAlign:'center',
        marginVertical: '3%',
        fontSize:20
    },
    header: {
        textAlign:'center', 
        fontSize:30, 
        fontWeight: 'bold',
        marginHorizontal: '5%',
        marginVertical: '2%',
        color: Colors.white
    },
});