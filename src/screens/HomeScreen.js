import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Text>Bem-vindo ao aplicativo!</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Perfil"
                    onPress={() => navigation.navigate("Profile")}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Detalhes"
                    onPress={() => navigation.navigate("Details")}
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
        backgroundColor: "#e8eabc",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    buttonContainer: {
        borderRadius: 5,    
        width: windowWidth * 0.5,
        margin: 10,
        backgroundColor: "#add8e6",
    },
});