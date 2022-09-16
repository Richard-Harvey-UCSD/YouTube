import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UseRefHook from './src/UseRefHook';
import Test from './src/Focus';

export default function App() {
  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>useRef</Text>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>in React Native</Text>
      {/* <UseRefHook /> */}
      <Test />
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