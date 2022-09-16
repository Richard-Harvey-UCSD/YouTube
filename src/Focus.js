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
          placeholder='First Name'
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            flex: 0.5,
            padding: 5
          }}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <Button title='focus' onPress={focusInput} />
      </View>
    </>
  );
};

export default Focus;