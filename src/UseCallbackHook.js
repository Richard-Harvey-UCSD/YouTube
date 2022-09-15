import { View, Text, Button } from 'react-native';
import React, { useCallback, useState } from 'react';

const funcCount = new Set();

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCount = useCallback(() => setCount(count + 1), [count]);
  const decrementCount = useCallback(() => setCount(count - 1), [count]);
  const incrementNumber = useCallback(() => setNumber(number + 1), [number]);
  const decrementNumber = useCallback(() => setNumber(number - 1), [number]);

  funcCount.add(incrementCount);
  funcCount.add(decrementCount);
  funcCount.add(incrementNumber);
  funcCount.add(decrementNumber);

  console.log('funcCount: ', funcCount.size);

  return (
    <View style={{ marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Count: {count}</Text>
      <Button title='Increase count' onPress={incrementCount} />
      <Button title='Decrease count' onPress={decrementCount} />

      <Text style={{ fontSize: 30, marginBottom: 20, marginTop: 30 }}>Number: {number}</Text>
      <Button title='Increase number' onPress={incrementNumber} />
      <Button title='Decrease number' onPress={decrementNumber} />
    </View>
  );
};

export default UseCallbackHook;