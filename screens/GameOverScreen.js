/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={{color: 'black'}}>The Game is Over !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GameOverScreen;
