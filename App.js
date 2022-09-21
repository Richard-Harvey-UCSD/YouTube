import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ViewComponent from './components/ViewComponent';

export default function App() {

  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>Text Component</Text>
      <Text style={{ fontSize: 40, marginBottom: 50 }}>in React Native</Text>

      <ViewComponent color='red'>Title</ViewComponent>
      <ViewComponent color='green'>Body</ViewComponent>
      <ViewComponent color='blue'>Footer</ViewComponent>
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