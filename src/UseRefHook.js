import React, { useRef } from 'react';
import { View, TextInput, Button } from 'react-native';

const Focus = () => {
  const inputElement = useRef();

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
            padding: 5,
            fontSize: 20,
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TextInput
          placeholder='Signature'
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            flex: 0.5,
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

export default Focus;