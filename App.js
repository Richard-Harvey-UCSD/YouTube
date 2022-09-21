import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ViewComponent from './components/ViewComponent';

export default function App() {

  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>View Component</Text>
      <Text style={{ fontSize: 40, marginBottom: 50 }}>in React Native</Text>

      <ViewComponent color='red'>First</ViewComponent>
      <ViewComponent color='green'>Second</ViewComponent>
      <ViewComponent color='blue'>Third</ViewComponent>
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