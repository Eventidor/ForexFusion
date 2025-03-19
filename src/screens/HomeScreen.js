import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import theme from '../theme';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ForexFusion</Text>
      <Button title="Transactions" onPress={() => navigation.navigate('Transactions')} />
      <Button title="Convert Currency" onPress={() => navigation.navigate('CurrencyConverter')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background },
  title: { color: theme.colors.text, fontSize: 24, marginBottom: 20 },
});

export default HomeScreen;
