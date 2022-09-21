import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ViewComponent = ({ children, color }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: color }]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
};

export default ViewComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    padding: 10,
  },
  box: {
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 40,
    flex: 0.75,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
});