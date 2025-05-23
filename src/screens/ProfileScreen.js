import React from "react";
import { View, Text, Button, StyleSheet, Dimensions, Image } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function ProfileScreen  ({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <Text>Nome: Rafael Cruz</Text>
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
        backgroundColor: "#BEC0A0",
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 10,
    },
    buttonContainer: {
        borderRadius: 5,    
        width: windowWidth * 0.5,
        margin: 10,
        backgroundColor: "#dda0dd",
    },
});