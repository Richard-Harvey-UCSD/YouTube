import { View, Text, Alert } from 'react-native';
import React, { forwardRef, useImperativeHandle } from 'react';

const CustomComponent = (props, ref) => {

  useImperativeHandle(ref, () => {
    return { alertMessage: () => Alert.alert(`Alert Message:\n 'Hi'`) };
  }, []);

  return (
    <View>
      <Text>CustomComponent</Text>
    </View>
  );
};

export default forwardRef(CustomComponent);