import React, { useEffect, useState } from "react";
import {
  StatusBar,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import apiDental from "../services/apiDental";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const formatarData = (data) => {
  const date = new Date(data);
  const dia = String(date.getDate()).padStart(2, "0");
  const mes = String(date.getMonth() + 1).padStart(2, "0"); // Mês começa do zero, então adicionamos 1
  const ano = date.getFullYear();
  return `${dia}/${mes}/${ano}`;
};

export default function ListSchedule() {
  const [list, setList] = useState(null); // Inicializa list como null
  const [id, setId] = useState("");
  const [token, setToken] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    async function GetToken() {
      try {
        const iToken = await AsyncStorage.getItem("@tokencli"); 
        const parsedToken = JSON.parse(iToken);
        setToken(parsedToken); 
      } catch (error) {
        console.error("Erro ao recuperar o token:", error);
      }
    }
    GetToken();
  },[]);

  useEffect(() => {
    async function handleClientId() {
      const clienteId = await AsyncStorage.getItem("@clientId");
      const cliId = JSON.parse(clienteId);
      setId(cliId);
    }
    handleClientId();
  }, []);

  useEffect(() => {
    async function Listar() {
      try {
        if (!id) {
          return;
        }
        const resposta = await apiDental.get(
          `/ListarClienteAgendamento/${id}`,
          {
            headers: {
              Authorization: "Bearer " + `${token}`,
            },
          }
        );
        setList(resposta.data);
      } catch (error) {
        console.log(error);
      }
    }
    Listar();
  }, [id, list]);

  async function handleDelete(id) {
    // console.log("id:", id)
    // console.log("token:", token);
    try {
      await apiDental.delete("/DeletarAgendamento", {
        data: {
          remove: id,
        },
        headers: {
          Authorization: "Bearer " + `${token}`,
        },
      });
      console.log("Agendamento removido com sucesso");
    } catch (error) {
      console.log(
        "Erro ao excluir agendamento:",
        error.response ? error.response.data : error.message , error
      );
    }
  }
  function handleVoltar() {
    navigation.navigate("Dashboard");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <>
      <View style={styles.logo}>
          <Image
            source={require("../../assets/AppDental.jpg")}
            style={{
              width: 200,
              height: 200,
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={styles.lSched}>
          <View style={styles.lSched1}>
            <Text style={styles.titleAgend}>Agendamentos</Text>
          </View>

          <ScrollView>
            <View style={styles.lSched2}>
              {/* Verifica se 'list' não é null antes de renderizar */}
              {list !== null ? (
                list.length > 0 ? (
                  list.map((item, index) => (
                    <View style={styles.view}>
                      <React.Fragment key={index}>
                        <Text style={styles.dateText}>
                          Data:
                          {formatarData(item.date)}
                        </Text>
                        <Text>Horario: {item.time}</Text>
                        <Text>Dentista: {item.dentist.name}</Text>
                        <Text>Cliente: {item.client.name}</Text>
                        <View style={styles.buttonCancelAjust}>
                          <TouchableOpacity
                            style={styles.btnCancel}
                            onPress={() => handleDelete(item.id)}
                          >
                            <Text style={styles.cancelText}>Cancelar</Text>
                          </TouchableOpacity>
                        </View>
                      </React.Fragment>
                    </View>
                  ))
                ) : (
                  <Text>Nenhum agendamento encontrado.</Text>
                )
              ) : (
                <Text>Carregando...</Text>
              )}
            </View>
          </ScrollView>
        </View>

        <TouchableOpacity
          style={styles.buttonact}
          onPress={() => {
            handleVoltar();
          }}
        >
          <Text>Voltar</Text>
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
}
