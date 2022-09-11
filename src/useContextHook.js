import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PageOne from '../components/PageOne';
import PageTwo from '../components/PageTwo';
import FontSizeContext from '../components/FontSizeContext';

function UseContextHook() {
  const [size, setSize] = useState(16);
  console.log('size: ', size);

  return (
    <FontSizeContext.Provider value={size}>
      <View style={styles.container}>

        <PageOne />
        <PageTwo />

        <View style={{ flexDirection: 'row', marginTop: 50 }}>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            disabled={size === 46}
            onPress={() => setSize(size + 5)}
          >
            <Text style={{ marginRight: 30, fontSize: 50 }}>
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            disabled={size === 11}
            onPress={() => setSize(size - 5)}
          >
            <Text style={{ fontSize: 50 }}>
              -
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </FontSizeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default UseContextHook;