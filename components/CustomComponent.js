import { View, Text, Alert, TextInput } from 'react-native';
import React, { forwardRef, useImperativeHandle } from 'react';

const CustomInput = (props, ref) => {

  useImperativeHandle(ref, () => {
    return { alertMessage: () => Alert.alert(`Alert Message:\n 'Hi'`) };
  }, []);

  return (
    <View>
      <Text>Click to see alert message</Text>
    </View>
  );
};

export default forwardRef(CustomInput);