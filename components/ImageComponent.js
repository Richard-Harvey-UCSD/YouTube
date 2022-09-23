import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ImageComponent = ({ size, children }) => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, { height: size, width: size }]}
        source={{ uri: 'https://picsum.photos/200' }}
      />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    backgroundColor: 'white',
    margin: 5,
  },
  image: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
  }
});