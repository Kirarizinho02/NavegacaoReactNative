import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen ({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const verificarLogin = () => {
        if (email == 'Rafael' && senha == '123') {
            alert('Login realizado com sucesso');
            navigation.navigate('Home');
        } else if (email == '' && senha == '') {
            alert('Erro: Preencha todos os campos');
        } else if (email != 'Rafael' || senha != '123') {
            alert('Erro: Usuário ou senha inválidos');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email:</Text>
                <TextInput style={styles.inputField} value={email} onChangeText={setEmail}></TextInput>
            </View>
            <View style={styles.inputContainer}>    
                <Text style={styles.inputLabel}>Senha:</Text>
                <TextInput style={styles.inputField} secureTextEntry={true} value={senha} onChangeText={setSenha}></TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Entrar"
                    onPress={verificarLogin}
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
        backgroundColor: "#f0f8ff",
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 10,
    },
    inputContainer: {
        width: windowWidth * 0.8,
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 18,
        marginBottom: 5,
    },
    inputField: {
        borderWidth: 1,
        borderColor: "#afacaf",
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        borderRadius: 5,    
        width: windowWidth * 0.5,
        marginTop: 10,
        backgroundColor: "#add8e6",
    },
});