import { View, Text, TextInput, Button } from 'react-native';
import React, { useRef } from 'react';

const useRefHook = () => {
  const inputElement = useRef('');

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <TextInput
          ref={inputElement}
          placeholder='Signature'
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            flex: 0.5,
            paddingLeft: 10,
            padding: 5,
            fontSize: 20,
          }}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <Button title='Focus' onPress={focusInput} />
      </View>
    </>
  );
};

export default useRefHook;