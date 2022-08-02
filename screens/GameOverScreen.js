/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/color";
import MainButton from "../components/MainButton";
const GameOverScreen = (props) => {
  console.log(props.roundsNumber);
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText style={{ color: "black", fontSize: 20 }}>
          The Game is Over !
        </TitleText>
        <View style={styles.imageContainer}>
          <Image
            fadeDuration={300}
            style={styles.image}
            source={require("../assets/success.png")}
            /*  source={{
            uri: "https://www.cerema.fr/sites/default/files/media/images/2019/07/tree-189852_1920.jpg",
          }} */
          />
        </View>

        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>New GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 10,
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Dimensions.get("window").height / 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: Dimensions.get("window").width * 0.7,
    width: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: (Dimensions.get("window").width * 0.7) / 30,
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    height: "100%",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: (Dimensions.get("window").width * 0.7) / 10,
  },
});

export default GameOverScreen;
