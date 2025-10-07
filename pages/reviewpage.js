import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from "../styles";
import axios from 'axios';

export default function ReviewPage({ route, navigation }) {
    const { formData } = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/registration/api/register/", formData);
            Alert.alert("Success", "User Registered successfully");
            navigation.goBack();
        } catch (error) {
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
        }
    };

    return (
        <View style={styles.reviewContainer}>
            <Text style={styles.title}>Review Information</Text>
            
            <View style={styles.reviewCard}>
                <Text style={styles.reviewText}>First Name: {formData.first_name}</Text>
            </View>
            
            <View style={styles.reviewCard}>
                <Text style={styles.reviewText}>Last Name: {formData.last_name}</Text>
            </View>
            
            <View style={styles.reviewCard}>
                <Text style={styles.reviewText}>Email: {formData.email}</Text>
            </View>
            
            <View style={styles.reviewCard}>
                <Text style={styles.reviewText}>Password: {formData.password}</Text>
            </View>
            
            <View style={styles.reviewCard}>
                <Text style={styles.reviewText}>Gender: {formData.gender}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Go back to edit</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.primaryButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}