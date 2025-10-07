import { View, Text, FlatList} from "react-native";
import styles from "../styles";
import axios from "axios";
import { useState, useEffect } from "react";


export default function userlistpage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/registration/api/users/')
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    }
    , []);

    return (
        <View style={styles.listContainer}>
            <Text style={styles.pageTitle}>Registered Users</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                style={styles.list}
                renderItem={({item}) => (
                    <View style={styles.userCard}>
                        <Text style={styles.userText}>First Name: {item.first_name}</Text>
                        <Text style={styles.userText}>Last Name: {item.last_name}</Text>
                        <Text style={styles.userEmail}>Email: {item.email}</Text>
                    </View>
                )}
            />
        </View>
    )
}