import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function RegisterPage({ navigation }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    gender: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // No validation: allows navigating to Review with empty fields
  const goReview = () => {
    navigation.navigate('Review', { formData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="First name"
        value={formData.first_name}
        onChangeText={v => handleChange('first_name', v)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last name"
        value={formData.last_name}
        onChangeText={v => handleChange('last_name', v)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={v => handleChange('email', v)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={v => handleChange('password', v)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={formData.gender}
        onChangeText={v => handleChange('gender', v)}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={goReview}>
          <Text style={styles.buttonText}>Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}