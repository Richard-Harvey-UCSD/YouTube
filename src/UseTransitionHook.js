// DOESN'T WORK LIKELY DUE TO CONCURRENCY ISSUES

import { View, Text, Button, ActivityIndicator, ScrollView } from 'react-native';
import React, { useState, useTransition } from 'react';

const SlowUI = ({ value }) => (
  <>
    {Array(value)
      .fill(1)
      .map((_, index) => (
        <Text key={index}>{value - index} </Text>
      ))}
  </>
);

const UseTransitionHook = () => {

  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(100);
  const [isPending, startTransition] = useTransition();
  
  const handleClick = () => {
    setValue(value + 1);
    startTransition(() => setValue2(value2 + 1));
  };

  return (
    <View style={{flex: 0.5}}>
      <Button title='value' onPress={handleClick}>{value}</Button>
      <View
        style={{
          opacity: isPending ? 0.5 : 1,
        }}
      >
        <ScrollView style={{
          backgroundColor: 'red',
          // backgroundColor: isPending ? 'red' : 'white',
        }}>
          <SlowUI value={value2} />
        </ScrollView>
      </View>
    </View>
  );
};

export default UseTransitionHook;