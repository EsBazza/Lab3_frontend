import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homepage</Text>

      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UserList')}
      >
        <Text style={styles.buttonText}>User List</Text>
      </TouchableOpacity>
    </View>
  );
}