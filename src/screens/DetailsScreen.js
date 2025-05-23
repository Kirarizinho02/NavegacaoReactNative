import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function DetailsScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes</Text>
            <Text>Essa é a tela de detalhes :)</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Perfil"
                    onPress={() => navigation.navigate("Profile")}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Home"
                    onPress={() => navigation.navigate("Home")}
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
        backgroundColor: "#EBE755",
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
        backgroundColor: "#ffebcd",
    },
});