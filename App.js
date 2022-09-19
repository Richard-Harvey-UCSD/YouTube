import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UseTransitionHook from './src/UseTransitionHook';

export default function App() {
  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>useTransition</Text>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>in React Native</Text>
      <UseTransitionHook />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});