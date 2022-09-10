import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  // const [state, setState] = useState(0);
  // const [state, setState] = useState(() => Math.floor(Math.random() * 100));
  const [state, setState] = useState({ butterflies: 0, bees: 0 });

  // DON'T USE THIS USEEFFECT!
  // useEffect(() => {
  //   console.log(state.bees);
  // }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.text}>useState Hook</Text>
      <Text style={styles.text}>with React Native!</Text>

      {/* <Text style={styles.text}>{state}</Text> */}
      <Text style={styles.text}>{state.bees}</Text>

      {/* <Button title='Increment' onPress={() => setState(prevState => prevState + 1)} />
      <Button title='Decrement' onPress={() => setState(prevState => prevState - 1)} /> */}

      <Button title='Increment' onPress={() => setState({ ...state, bees: state.bees + 1 })} />
      <Button title='Decrement' onPress={() => setState({ ...state, bees: state.bees - 1 })} />
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
