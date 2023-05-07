import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Calculadora from './Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Calculadora />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});