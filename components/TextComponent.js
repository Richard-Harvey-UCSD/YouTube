import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const TextComponent = ({ children, type }) => {
  const [pressed, setPressed] = useState(false);

  const onPressHandle = () => {
    setPressed(!pressed);
  };

  return (
    <Text style={styles.baseText}>
      {type === 'header' ?
        <Text style={pressed ? styles.pressedText : styles.titleText} onPress={onPressHandle}>{children}</Text>
        :
        <Text style={styles.bodyText}>{children}</Text>
      }
    </Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 50,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
  bodyText: {
    color: 'green',
    fontStyle: 'italic',
  },
  pressedText: {
    color: 'red',
    fontStyle: 'italic',
  },
  titleText: {
    color: 'gray'
  }
});