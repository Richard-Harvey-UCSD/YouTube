import { View, Text, Button } from 'react-native';
import React from 'react';

import useStatus from '../hooks/useStatus';

const UseDebugValueHook = () => {
  const [pending, setPending] = useStatus();
  console.log('pending: ', pending);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginTop: 30, marginBottom: 10 }}>Pending: {pending.toString()}</Text>
      <Button title='Change Status' onPress={() => setPending(!pending)} />
    </View>
  );
};

export default UseDebugValueHook;