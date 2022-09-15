import { View, Text, Button } from 'react-native';
import React, { useCallback, useState } from 'react';

const funcCount = new Set();

const UseCallbackHook = () => {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    setNumber(number - 1);
  };

  // const incrementCounter = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);

  // const decrementCounter = useCallback(() => {
  //   setCount(count - 1);
  // }, [count]);

  // const incrementNumber = useCallback(() => {
  //   setNumber(number + 1);
  // }, [number]);

  // const decrementNumber = useCallback(() => {
  //   setNumber(number - 1);
  // }, [number]);

  funcCount.add(incrementCounter);
  funcCount.add(decrementCounter);
  funcCount.add(incrementNumber);
  funcCount.add(decrementNumber);

  console.log('funcCount: ', funcCount.size);

  return (
    <View style={{ marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, marginBottom: 20, }}>Count: {count}</Text>
      <Button onPress={incrementCounter} title='Increase count' />
      <Button onPress={decrementCounter} title='Decrease count' />

      <Text style={{ fontSize: 30, marginBottom: 20, marginTop: 30 }}>Number: {number}</Text>
      <Button onPress={incrementNumber} title='Increase number' />
      <Button onPress={decrementNumber} title='Decrease number' />
    </View>
  );
};

export default UseCallbackHook;