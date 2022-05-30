import { StyleSheet } from "react-native";
import { Colors } from "../Assets/Colors/colors";

export const registerStyle = StyleSheet.create({
    loginText : {
            fontSize: 20,
            color: Colors.textColor
    },
    timerView: {
        width:'100%',
        paddingHorizontal:'10%',
        marginBottom:'10%' ,
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    timerFont: {
        fontSize:17,
        color: Colors.textColor,
    }
});