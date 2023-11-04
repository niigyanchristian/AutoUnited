import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

import lightTheme from "../config/theme-light";
import useAuth from "../auth/useAuth";
import { useTheme } from "../hooks/ThemeContext";
import AppText from "../components/AppText";

function SearchButton({ onPress }) {
  const {width}=useAuth();
  const {theme}=useTheme();
  const isFocused = useIsFocused();
  return (
    <Pressable onPress={onPress} style={{height:150,position:'relative',backgroundColor:theme.primary}}>
      <View style={[styles.container,{height:width*0.15,width:width*0.15,borderColor:theme.primary}]}>
        <MaterialIcons name="shopping-cart" size={30} color={isFocused?theme.white:theme.primary} />
      </View>
      <AppText top='-13%' textAlign='center' color={isFocused?theme.white:theme.secondary} fontSize={width*0.03}>Search</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: lightTheme.secondary,
    borderRadius: 40,
    borderWidth:5,
    bottom: 20,
    justifyContent: "center",
    position:'relative',
    top:'-15%'
    // paddingBottom:40
  },
});

export default SearchButton;
