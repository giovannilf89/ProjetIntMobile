import React, { useState } from "react";
import {
  StatusBar,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  View,
} from "react-native";
import apiDental from "../services/apiDental";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function CadUser() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();

  async function handleCad() {
    try {
      const resposta = await apiDental.post("/CriarUsuario", {
        nome,
        email,
        celular,
        cpf,
        cep,
        rua,
        complemento,
        bairro,
        cidade,
        estado,
        senha,
      });
      clearFields();
      navigation.navigate("Login");
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  const clearFields = () => {
    setNome("");
    setEmail("");
    setCelular("");
    setCpf("");
    setCep("");
    setRua("");
    setComplemento("");
    setBairro("");
    setCidade("");
    setEstado("");
    setSenha("");
  };

  function handleVoltar() {
    navigation.navigate("Dashboard");
  }

  return (
    <SafeAreaView style={styles.container}>
      <>
        <StatusBar style="auto" />
        <Text style={styles.logo}>AppDental</Text>
        <ScrollView>
          <View style={styles.fundoCad}>
            <View style={styles.fundoCad1}>
              <Text style={styles.cad}>Faça seu cadastro</Text>
            </View>
            <View style={styles.fundoCad3}>
              <Text style={styles.inputField}>Nome:</Text>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
              />

              <Text style={styles.inputField}>Email:</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />

              <Text style={styles.inputField}>Celular:</Text>
              <TextInput
                style={styles.input}
                placeholder="Celular"
                value={celular}
                onChangeText={setCelular}
              />

              <Text style={styles.inputField}>CPF:</Text>
              <TextInput
                style={styles.input}
                placeholder="CPF"
                value={cpf}
                onChangeText={setCpf}
              />

              <Text style={styles.inputField}>CEP:</Text>
              <TextInput
                style={styles.input}
                placeholder="CEP"
                value={cep}
                onChangeText={setCep}
              />

              <Text style={styles.inputField}>Rua:</Text>
              <TextInput
                style={styles.input}
                placeholder="Rua"
                value={rua}
                onChangeText={setRua}
              />

              <Text style={styles.inputField}>Complemento:</Text>
              <TextInput
                style={styles.input}
                placeholder="Complemento"
                value={complemento}
                onChangeText={setComplemento}
              />

              <Text style={styles.inputField}>Bairro:</Text>
              <TextInput
                style={styles.input}
                placeholder="Bairro"
                value={bairro}
                onChangeText={setBairro}
              />

              <Text style={styles.inputField}>Cidade:</Text>
              <TextInput
                style={styles.input}
                placeholder="Cidade"
                value={cidade}
                onChangeText={setCidade}
              />

              <Text style={styles.inputField}>Estado:</Text>
              <TextInput
                style={styles.input}
                placeholder="Estado"
                value={estado}
                onChangeText={setEstado}
              />

              <Text style={styles.inputField}>Senha:</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
              />
              <View style={styles.cadCentro}>
                <TouchableOpacity style={styles.buttonact2} onPress={handleCad}>
                  <Text>Cadastrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.voltar}>
          <TouchableOpacity
            style={styles.buttonact}
            onPress={() => {
              handleVoltar();
            }}
          >
            <Text>Voltar</Text>
          </TouchableOpacity>
        </View>
      </>
    </SafeAreaView>
  );
}
