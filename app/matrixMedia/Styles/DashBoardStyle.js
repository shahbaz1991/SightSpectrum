import { StyleSheet } from "react-native";
import { Colors } from "../Assets/Colors/colors";

export const dashBoardScreenStyle = StyleSheet.create({
    titleContainer: {
        height: "20%",
        width:'100%',
        justifyContent: 'center',
        alignItems:'center',
    },
    childContainer: {
        height:'80%',
        width:'100%',
        alignItems:'center',
        paddingTop:'10%'
    },
    screenTitleView: {
        justifyContent:'center',
        alignItems: 'center'
    },
    screenTitle:{
        fontWeight:"bold",
        fontSize: 26,
        color: Colors.textColor
    },
    childBlock: {
        width:'100%',
        flexDirection:'row',
        paddingLeft: '8%',
    },
    childTitle: {
        width:'20%',
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.textColor,
        paddingTop: '5%',
        paddingBottom: 0
        
    },
    childValue: {
        width:"70%",
        fontSize: 20,
        color: Colors.textColor,
        borderBottomColor: Colors.borderColor,
        borderBottomWidth:2,
        paddingBottom: 0
    },
    button:{
        marginBottom:'8%'
    },
    buttonText: {
        fontSize: 25,
        color: Colors.textColor,
    },
});