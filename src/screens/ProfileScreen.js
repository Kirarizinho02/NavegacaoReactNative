import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function ProfileScreen  ({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Detalhes"
                    onPress={() => navigation.navigate("Details")}
                />                
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Voltar"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e6e6fa",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        borderRadius: 5,    
        width: windowWidth * 0.5,
        margin: 10,
        backgroundColor: "#dda0dd",
    },
});