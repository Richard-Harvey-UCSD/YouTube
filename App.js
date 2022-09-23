import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageComponent from './components/ImageComponent';

export default function App() {

  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>Image Component</Text>
      <Text style={{ fontSize: 40, marginBottom: 20 }}>in React Native</Text>

      <View style={{ flexDirection: 'row' }}>
        <ImageComponent size={100}>First Image</ImageComponent>
        <ImageComponent size={100}>Second Image</ImageComponent>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <ImageComponent size={150}>Third Image</ImageComponent>
        <ImageComponent size={150}>Fourth Image</ImageComponent>
      </View>

      <ImageComponent size={175}>Fifth Image</ImageComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
});