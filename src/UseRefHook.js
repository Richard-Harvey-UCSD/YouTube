import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

const UseRefHook = () => {
  const [inputValue, setInputValue] = useState('');
  const previousInputValue = useRef('');

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue])

  return (
    <View>
      <TextInput
        placeholder='inputValue: '
        onChangeText={value => setInputValue(value)}
      />
      <Text>Current Value: {inputValue}</Text>
      <Text>Previous Value: {previousInputValue.current}</Text>
    </View>
  );
};

export default UseRefHook;