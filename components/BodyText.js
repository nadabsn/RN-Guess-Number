import React, { useState } from "react";

import { StyleSheet, View, Text } from "react-native";

const BodyText = (props) => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    color: "black",
    fontFamily: "open-sans",
  },
});

export default BodyText;
