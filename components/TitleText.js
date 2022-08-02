import React, { useState } from "react";

import { StyleSheet, View, Text } from "react-native";

const TitleText = (props) => (
  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
  },
});

export default TitleText;
