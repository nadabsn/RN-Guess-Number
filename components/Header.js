import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import Colors from "../constants/color";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 100,

    elevation: 20,
    paddingTop: 20,

    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    borderBottomColor: "#ccc",
    backgroundColor: "white",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    borderBottomColor: "white",
    backgroundColor: Colors.primary,
  },

  headerTitle: {
    fontFamily: "open-sans-bold",
    color: "black",
    fontsize: 40,
  },
  title: {
    color: Platform.OS == "ios" ? Colors.primary : "white",
  },
});

export default Header;
