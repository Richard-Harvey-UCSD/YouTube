import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseLayoutEffectHook = () => {
  const [value, setValue] = useState();

  // useEffect(() => {
  //   if (value === 0)
  //     setValue(Math.random() * 100);
  // }, [value]);

  useLayoutEffect(() => {
    if (value === 0)
      setValue(Math.random() * 100);
  }, [value])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Value: {value}</Text>
      <Button title='Random' onPress={() => setValue(0)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  }
});

export default UseLayoutEffectHook;