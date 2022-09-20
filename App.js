import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TextComponent from './components/TextComponent';

export default function App() {

  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>Text Component</Text>
      <Text style={{ fontSize: 40, marginBottom: 50 }}>in React Native</Text>

      <TextComponent type='header'>Title</TextComponent>
      <TextComponent type='body'>Body Text</TextComponent>
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