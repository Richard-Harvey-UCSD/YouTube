import { View, Text, TouchableOpacity } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';

const useMemoHook = () => {
  const [count, setCount] = useState(0);
  const [memoizedCount, setMemoizedCount] = useState(0);

  const increment = () => {
    setCount(prevState => prevState + 1);
  };

  const memoizedIncrement = () => {
    setMemoizedCount(prevState => prevState + 1);
  };

  const expensiveOperation = num => {
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const memoizedCallback = useCallback(() => expensiveOperation(count), [count]);

  console.log('memoizedCallback: ', memoizedCallback);

  // const operation = expensiveOperation(count);
  const operation = useMemo(() => expensiveOperation(count), [count]);

  console.log('Count:', count);
  console.log(`Memoized Count: ${memoizedCount} \n`);

  return (
    <>
      <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Count: {count}</Text>
        <TouchableOpacity onPress={increment}>
          <Text style={{ fontSize: 30 }}>+</Text>
        </TouchableOpacity>
        <Text>Expensive Operation: {operation}</Text>
      </View>

      <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Memoized Count: {memoizedCount}</Text>
        <TouchableOpacity onPress={memoizedIncrement}>
          <Text style={{ fontSize: 30 }}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default useMemoHook;