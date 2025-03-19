import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import theme from '../theme';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#888" keyboardType="phone-pad" />
      <Button title="Verify" color={theme.colors.primary} onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: theme.colors.background },
  title: { color: theme.colors.text, fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: theme.colors.inputBackground, color: theme.colors.text, marginBottom: 10, padding: 10 },
});

export default LoginScreen;
