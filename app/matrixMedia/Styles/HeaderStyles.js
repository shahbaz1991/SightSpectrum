import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
import { Colors } from "../Assets/Colors/colors";

export const headerStyles = StyleSheet.create({
    headerMainStyle : {
        flex: 1,     
    },
    headerStyle : {
        width : Dimensions.get('window').width,
        height : '8%',
        backgroundColor : Colors.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTextStyle : {
        color: Colors.headerTextColor,
        fontSize: 35,
        fontWeight: 'bold'
    },
    childrenStyle : {
        width : Dimensions.get('window').width,
        height : '92%',
        justifyContent: 'center',
        alignItems: 'center',
    }

});