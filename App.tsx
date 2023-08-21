import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from './src/ui/Header';
import {ScrollView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
