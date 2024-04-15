import {
  StatusBar,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Dashboard() {
  const [user, setUser] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    async function handleName() {
      const iNome = await AsyncStorage.getItem("@nome");
      const nome = JSON.parse(iNome);
      setUser(nome);
    }
    handleName();
  }, []); // Remova user do array de dependências

  async function handleLogoff() {
    await AsyncStorage.removeItem("@nome");
    setUser("");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  }

  function redirect() {
    navigation.navigate("CreateSchedule");
  }
  function redirect1() {
    navigation.navigate("ListSchedule");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <>
        <Text style={styles.logo}>AppDental</Text>
        <Text style={styles.bemVindo}>Seja bem-vindo(a), {user}</Text>
        <View style={styles.dashCad1}>
          <View style={styles.dashCad2}>
            <Text style={styles.titleDash}>Dashboard</Text>
          </View>
          <View style={styles.grupoMenu}>
            <TouchableOpacity style={styles.menu} onPress={redirect}>
              <Text style={styles.textoMenu}>Agende sua consulta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu} onPress={redirect1}>
              <Text style={styles.textoMenu}>Agendamentos efetuados</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonSair} onPress={handleLogoff}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
}
