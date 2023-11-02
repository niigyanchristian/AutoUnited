import React from "react";
import { View, StyleSheet,Text } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import { useTheme } from "../hooks/ThemeContext";


function OfflineNotice(props) {
  const {theme}=useTheme();

  const netInfo = useNetInfo();
  // console.log('====================================');
  // console.log(netInfo);
  // console.log('====================================');

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={[styles.container,{backgroundColor: theme.primary,}]}>
        <Text>No Internet Connection...</Text>
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
    width: "100%",
    zIndex: 1,
  },
});

export default OfflineNotice;
