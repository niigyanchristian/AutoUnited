import React from "react";
import { View, StyleSheet,Text } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import { useTheme } from "../hooks/ThemeContext";
import useAuth from "../auth/useAuth";
import AppText from "./AppText";
import colors from "../config/colors";


function OfflineNotice(props) {
  const {theme}=useTheme();
  const {width}=useAuth();

  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={[styles.container,{backgroundColor: `rgba(68, 160, 227, 0.7)`,borderRadius:width*0.03}]}>
        <AppText color={colors.primary}>No Internet Connection...</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "90%",
    alignSelf:'center',
    zIndex: 1,
  },
});

export default OfflineNotice;
