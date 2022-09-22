import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ImageComponent = ({ children, size }) => {
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
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    margin: 5,
    padding: 5,
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