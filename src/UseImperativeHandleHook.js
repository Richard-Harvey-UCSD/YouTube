import { View, Button } from 'react-native';
import React, { useRef } from 'react';

import CustomComponent from '../components/CustomComponent';

const UseImperativeHandleHook = () => {
  const inputRef = useRef(null);

  return (
    <View>
      <CustomComponent ref={inputRef} />
      <Button title='Alert' onPress={() => inputRef.current.alertMessage()} />
    </View>
  );
};

export default UseImperativeHandleHook;