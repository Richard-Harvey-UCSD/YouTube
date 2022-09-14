import { View, Text } from 'react-native';
import React, { useCallback, useMemo } from 'react';

const UseCallbackHook = () => {
  const values = [1, 6, 3, 2, 5];

  const memoizedCallback = useCallback(() => values.sort(), [values]);
  const useMemoEquivalent = useCallback(values.sort(), [values]);
  const memoizedValue = useMemo(() => values.sort(), [values]);

  console.log('memoizedCallback: ', memoizedCallback);
  console.log('useMemoEquivalent: ', useMemoEquivalent);
  console.log('memoizedValue: ', memoizedValue);

  return (
    <View>
      <Text>{memoizedCallback()}</Text>
      <Text>{memoizedValue}</Text>
      <Text>{useMemoEquivalent}</Text>
    </View>
  );
};

export default UseCallbackHook;