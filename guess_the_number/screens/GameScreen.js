import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice),
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const {userChoice, onGameOver} = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver, rounds]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know this is wrong..', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="LOWER"
            onPress={nextGuessHandler.bind(this, 'lower')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="GREATER"
            onPress={nextGuessHandler.bind(this, 'greater')}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 300,
    maxWidth: '80%',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    marginTop: 20,
    padding: 20,
  },
  button: {
    borderRadius: 10,
    width: 80,
  },
});
export default GameScreen;
