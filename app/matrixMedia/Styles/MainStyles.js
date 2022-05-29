import { StyleSheet } from "react-native";
import { Colors } from "../Assets/Colors/colors";

export const mainStyles = StyleSheet.create({
    titleContainer: {
        height: "20%",
        width:'100%',
        justifyContent: 'center',
        alignItems:'center',
    },
    titleText:{
        fontWeight:"bold",
        fontSize: 26,
        color: Colors.textColor
    },
    childContainer: {
        height:'80%',
        width:'100%',
        alignItems:'center',
        paddingTop:'10%'
    },
    textInput : {
        height:54,
        width:"85%",
        borderColor: Colors.borderColor,
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 15,
        marginBottom: '2%',
        paddingLeft: 12,
        color: Colors.textColor
    },
    buttons : {
        height:56,
        width:"85%",
        borderColor: Colors.borderColor,
        borderWidth: 2,
        backgroundColor: Colors.backgroundColor,
        borderRadius: 15,
        marginBottom: '2%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    buttonText : {
        color: Colors.textColor,
        fontSize: 23
    },
    mobileText: {
        fontSize: 20,
        color: Colors.textColor
    },
    passwordView:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
    },
    passwordEye:{
        position:'relative',
        right:'90%',
        top:'4%'
    }
});