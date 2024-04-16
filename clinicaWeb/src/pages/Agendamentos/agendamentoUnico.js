import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiLocal from "../../API/apiLocal/api";

export default function AgendamentoUnico() {
  const navigation = useNavigate();
  const { id } = useParams();
  const [listAgendamento, setListAgendamento] = useState({});

  const iToken = localStorage.getItem("@token");
  const token = JSON.parse(iToken);

  useEffect(() => {
    async function ListarAgendamento() {
      try {
        const response = await apiLocal.get(`/AgendamentoDetalhes/${id}`);
        setListAgendamento(response.data);
      } catch (error) {
        console.error("Erro ao buscar o agendamento:", error);
      }
    }
    ListarAgendamento();
  }, [id]);

  // Função para formatar a data no formato desejado (xx/xx/xxxx)
  function formatarData(dataHora) {
    const data = new Date(dataHora);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = String(data.getFullYear()).padStart(4);
    return `${dia}/${mes}/${ano}`;
  }

  async function handleDelete(id) {
    await apiLocal.delete("/DeletarAgendamento", {
      data: {
        remove: id,
      },
      headers: {
        Authorization: "Bearer " + `${token}`,
      },
    });
    navigation("/Dashboard");
  }
  function handleRedirect() {
    navigation("/Agendamentos");
  }

  return (
    <div className="agendcontainer">
      <h1 className="tituloh1">Agendamento</h1>
      <div className="agendcentral">
      <div className="agendvisualizar">
        <p>Data: {formatarData(listAgendamento.date)}</p>
        <p>Horario: {listAgendamento.time}</p>
        <p>Cliente: {listAgendamento.client && listAgendamento.client.name}</p>
        <p>
          Dentista: {listAgendamento.dentist && listAgendamento.dentist.name}
        </p>
        <button className="btnsair" onClick={() => handleDelete(listAgendamento.id)}>
          Cancelar
        </button>
        </div>
      </div>
      <button  className="btnvoltar" onClick={() => handleRedirect()}>Voltar</button>
    </div>
  );
}
