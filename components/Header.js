import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../constants/color';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    elevation: 20,
    //paddingTop: 10,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    color: 'black',
    fontsize: 20,
  },
});

export default Header;
