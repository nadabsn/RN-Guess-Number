/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/color";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );
  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateLayout);
  }, []);

  const inputHandler = (inputText) => {
    if (inputText === null) {
      return;
    }
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    if (enteredValue === null) {
      return;
    }
    setConfirmed(true);
    // eslint-disable-next-line radix
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={{ color: "black", padding: 10, fontSize: 20 }}>
          You selected
        </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <TitleText style={styles.title}>Start a new game</TitleText>
            <Card style={styles.inputContainer}>
              <View style={styles.inputContainer}>
                <BodyText>Enter a number</BodyText>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  maxLength={2}
                  value={enteredValue}
                  onChangeText={inputHandler}
                  style={styles.input}
                />
                <View style={styles.buttonContainer}>
                  <View style={{ width: buttonWidth }}>
                    <Button
                      title="Reset"
                      onPress={resetInputHandler}
                      color={Colors.secondary}
                    />
                  </View>
                  <View style={{ width: buttonWidth }}>
                    <Button
                      title="Confirm"
                      onPress={confirmInputHandler}
                      color={Colors.primary}
                    />
                  </View>
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
    alignItems: "center",
    //justifyContent: 'center',
  },
  title: {
    fontFamily: "open-sans-bold",
    color: "black",
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: "80%",
    //maxWidth: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  /* button: {
    borderRadius: 10,
    //  width: 100,

    // width: Dimensions.get("window").width / 4,  //only works when the app starts
  }, */
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    height: 300,
    width: 300,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  setEnterNumberText: {
    color: "black",
    fontFamily: "open-sans",
  },
});

export default StartGameScreen;
