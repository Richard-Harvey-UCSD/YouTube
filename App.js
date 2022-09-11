import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UseReducerHook from './src/useReducerHook';

export default function App() {
  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>useReducer</Text>
      <Text style={{ fontSize: 40, marginBottom: 50 }}>in React Native</Text>
      <UseReducerHook />
    </View >
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});