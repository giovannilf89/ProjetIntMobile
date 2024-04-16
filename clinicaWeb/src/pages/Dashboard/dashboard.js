import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const navigation = useNavigate();
  const [user, setUser] = useState("");

  useEffect(() => {
    async function handleName() {
      const iNome = localStorage.getItem("@nome");
      const nome = JSON.parse(iNome);
      setUser(nome);
    }
    handleName();
  }, []);

  async function handleSair() {
    localStorage.removeItem("@nome");
    localStorage.removeItem("@id");
    localStorage.removeItem("@token");

    navigation("/");
  }

  return (
    <div className="dashcontainer">
      <div className="dashtitulo">
        <h1 className="tituloh1">Dashboard</h1>
      </div>
      <h2>Seja bem-vindo(a), {user}</h2>
      <div className="dashcentral">
        <Link to="/Agendamentos">Ver agendamentos</Link>
        <Link to="/CriarDentista">Criar Usuário de Dentista</Link>
        <Link to="/CriarCliente">Criar Cadastro de Cliente</Link>
      </div>
      <button className="btnsair" onClick={handleSair}>
        Sair
      </button>{" "}
      {/* Removed () after handleSair */}
    </div>
  );
}
