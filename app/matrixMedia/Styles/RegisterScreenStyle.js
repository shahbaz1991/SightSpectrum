import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
import { Colors } from "../Assets/Colors/colors";

export const registerStyle = StyleSheet.create({
    loginText : {
            fontSize: 20,
            color: Colors.textColor
    },
});