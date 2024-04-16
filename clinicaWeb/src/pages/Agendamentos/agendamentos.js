import { useState, useEffect } from "react";
import apiLocal from "../../API/apiLocal/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Agendamentos() {
  const [dados, setDados] = useState([]);
  const [dentistId, setDentistId] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    async function GetId() {
      try {
        const myId = localStorage.getItem("@id");
        const dentist = JSON.parse(myId);
        setDentistId(dentist);
        console.log(dentist);
      } catch (error) {
        console.error("Erro ao recuperar o token:", error);
      }
    }
    GetId();
  }, []); // Adiciona uma dependência vazia para garantir que este efeito seja executado apenas uma vez

  useEffect(() => {
    if (dentistId !== "") {
      // Verifica se o ID do dentista está definido
      async function verAgendamento() {
        try {
          const response = await apiLocal.get(
            `/ListarDentistaAgendamento/${dentistId}`
          );
          setDados(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Erro ao buscar os agendamentos:", error);
        }
      }
      verAgendamento();
    }
  }, [dentistId]); // Adiciona dentistId como dependência para executar este efeito quando o ID do dentista mudar

  // Função para formatar a data no formato desejado
  function formatarDataHora(dataHora) {
    const data = new Date(dataHora);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = String(data.getFullYear()).padStart(4);
    return `${dia}/${mes}/${ano}`;
  }
  function handleRedirect() {
    navigation("/Dashboard");
  }

  return (
    <div className="agendcontainer">
      <h1 className="tituloh1">Seus agendamentos</h1>
      <div className="agendcentral">

        {dados.length > 0 ? (
          dados.map((result) => {
            const id = result.id; // Armazena o id do agendamento
            return (
              <div className="agendvisualizar">
                <div key={id}>
                  <h3>Agendamento</h3>
                  <h3>Data: {formatarDataHora(result.date)}</h3>
                  <h3>Horário: {result.time}</h3>
                  <h3>Cliente: {result.client.name}</h3>
                  <h3>Dentista:{result.dentist.name}</h3>
                  <div className="ver">
                  <strong>
                    <Link to={`/AgendamentoUnico/${id}`}>
                      <p>Detalhes</p>
                    </Link>
                  </strong>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Nenhum agendamento encontrado.</p>
        )}
      </div>
      <button className="btnvoltar" onClick={() => handleRedirect()}>
        Voltar
      </button>
    </div>
  );
}
