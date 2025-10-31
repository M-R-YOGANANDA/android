import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Hello React Native 👋</Text>
      <Button title="Click Me" onPress={() => Alert.alert('hello friends!')} />
    </View>
  );
}
