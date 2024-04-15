import React, { useState } from "react";
import {
  StatusBar,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import apiDental from "../services/apiDental";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  async function handleLogin() {
    try {
      const resposta = await apiDental.post("/LoginUsuario", {
        email,
        senha,
      });

      await AsyncStorage.setItem("@nome", JSON.stringify(resposta.data.nome));
      await AsyncStorage.setItem("@clientId", JSON.stringify(resposta.data.id));
      await AsyncStorage.setItem("@tokencli", JSON.stringify(resposta.data.token))
      navigation.navigate("Dashboard");
      setEmail("");
      setSenha("");
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  function handleCadastrar() {
    navigation.navigate("CadUser");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.logo}>AppDental</Text>
      <View style={styles.fundo}>
        <View style={styles.fundo1}>
          <Text style={styles.titleLogin}>Faça seu login</Text>
        </View>
        <View style={styles.inside}>
          <Text style={styles.inputField}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.inputField}>Senha:</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity style={styles.buttonact2} onPress={handleLogin}>
            <Text>Logar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>Novo por aqui? Crie seu cadastro</Text>
      <TouchableOpacity style={styles.buttonact} onPress={handleCadastrar}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
