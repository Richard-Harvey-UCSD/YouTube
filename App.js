import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UseDebugValueHook from './src/UseDebugValueHook';

export default function App() {

  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>useTransition</Text>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>in React Native</Text>

      <UseDebugValueHook />
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