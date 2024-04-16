import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiLocal from "../../API/apiLocal/api"
import "../geral.css";
import AppDental from "../../assets/AppDental.jpg";

export default function Inicio() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !senha) {
      //   toast.warn("Existem campos em branco");
      return;
    }
    try {
      const resposta = await apiLocal.post("/LoginDentista", {
        email,
        senha,
      });
      if (resposta.data.id) {
        localStorage.setItem("@token", JSON.stringify(resposta.data.token));
        localStorage.setItem("@nome", JSON.stringify(resposta.data.name));
        localStorage.setItem("@id", JSON.stringify(resposta.data.id));
        

        // toast.success("Login efetuado com sucesso");
        navigation("/Dashboard");
      }
    } catch (err) {
      //   toast.error(err.response.data.error);
      return;
    }
  }

  return (
    <div className="container">
      <div className="logo">
        <img src={AppDental} />
      </div>
      <form className="formulario" onSubmit={handleLogin}>
        <h1 className="tituloh1">Login</h1>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Enviar</button>
        <h2 >
          <Link  className="cadastre" to="/CriarDentista">Cadastre-se aqui</Link>
        </h2>
      </form>
    </div>
  );
}
