import { StyleSheet } from "react-native";
import { Colors } from "../Assets/Colors/colors";

export const toastMsgStyle = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'10%',
        backgroundColor: Colors.toastBackground,
        position: 'absolute',
        left:0,
        bottom: 0,
        right: 0,
    },
    mainBar: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:'2%',
        paddingRight:'2%',
        paddingTop: '1%'
    },
    msgTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.toastTitle
    },
    dissmissText: {
        fontSize: 15,
        color: Colors.toastTitle
    },
    mainMsg:{
        fontSize: 17,
        paddingLeft:'2%',
        color: Colors.toastMsg,
    }
})