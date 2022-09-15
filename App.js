import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UseIdHook from './src/UseIdHook';

export default function App() {
  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>useId</Text>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>in React Native</Text>
      <UseIdHook />
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