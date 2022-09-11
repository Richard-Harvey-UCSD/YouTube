import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UseContextHook from './src/useContextHook';


export default function App() {
  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 24, marginBottom: 50 }}>useContext in React Native</Text>
      <UseContextHook />
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