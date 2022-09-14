import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UseCallbackHook from './src/UseCallbackHook';

import UseMemoHook from './src/UseMemoHook';

export default function App() {
  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>useMemo</Text>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>in React Native</Text>
      <UseCallbackHook />
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