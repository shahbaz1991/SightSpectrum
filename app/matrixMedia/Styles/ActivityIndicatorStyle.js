import { StyleSheet } from "react-native";
import { Colors } from "../Assets/Colors/colors";

export const activityIndicatorStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.Tealwhite,
        height:'100%',
        width:'100%',
        position:'absolute',
        zIndex:10,
        justifyContent:'center',
        elevation: 10,
    },
    innerContainer: {
        backgroundColor:Colors.white,
        height:'30%',
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:'10%',
        elevation: 10,
        borderRadius: 10,
    },
    loadingMsg: {
        fontSize: 25,
        color: Colors.textColor
    }
});