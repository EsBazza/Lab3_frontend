import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles';

export default function UserListPage({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.20.220:8000/registration/api/users/')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleEdit = (user) => {
    navigation.navigate('EditUser', { user });
  };

  const handleDelete = (id) => {
    Alert.alert(
      'Confirm Delete',
      `Are you sure you want to delete user with ID: ${id}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            axios
              .delete(`http://192.168.20.220:8000/registration/api/users/${id}/`)
              .then(() => {
                Alert.alert('Success', 'User deleted successfully');
                setUsers(prev => prev.filter(u => u.id !== id));
              })
              .catch(err => {
                console.error(err);
                Alert.alert('Error', 'Failed to delete user');
              });
          }
        }
      ]
    );
  };

  return (
    <View style={styles.listContainer}>
      <Text style={styles.pageTitle}>Registered Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => String(item.id)}
        style={styles.list}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.userText}>First Name: {item.first_name}</Text>
            <Text style={styles.userText}>Last Name: {item.last_name}</Text>
            <Text style={styles.userText}>Email: {item.email}</Text>
            <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between' }}>
              <Button title="Edit" onPress={() => handleEdit(item)} />
              <Button title="Delete" onPress={() => handleDelete(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}; 