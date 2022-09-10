import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count === 0)
      setMessage('count set to zero');
    else
      setMessage('count not zero');
    console.log('count = ', count);
  }, [count]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.text}>useState Hook</Text>
      <Text style={styles.text}>with React Native!</Text>

      <Text style={styles.text}>count = {count}</Text>
      <Text style={styles.text}>{message}</Text>

      <Button title='increment' onPress={() => setCount(prevState => prevState + 1)} />
      <Button title='decrement' onPress={() => setCount(prevState => prevState - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  }
});
