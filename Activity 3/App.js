import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>
          Kenny O. Cabubas 
        <Text style={styles.innerText1}> I am  currently taking BSIT in Global Reciprocal </Text>
        <Text style={styles.innerText2}>  Colleges </Text>
      </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    textAlign: 'center',
    color: 'pink',
    fontWeight: 'bold',
  },
  innerText1: {
    color: 'red',
  },
});

export default BoldAndBeautiful;