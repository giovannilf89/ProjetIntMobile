import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiLocal from "../../API/apiLocal/api";

export default function CriarCliente() {
  const navigation = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [celular, setCelular] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [senha, setSenha] = useState("");

  const Cadastro = async (e) => {
    e.preventDefault();
    if (
      !nome ||
      !email ||
      !cpf ||
      !celular ||
      !cep ||
      !rua ||
      !bairro ||
      !cidade ||
      !estado ||
      !senha
    ) {
      toast.warn("Existem campos em branco");
      return;
    }

    try {
      await apiLocal.post("/CriarUsuario", {
        nome,
        email,
        cpf,
        celular,
        cep,
        rua,
        complemento,
        bairro,
        cidade,
        estado,
        senha,
      });
      toast.success("Cliente cadastrado com sucesso");
      navigation("/Dashboard");
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className="cdcontainer">
      <div>
        <h1 className="tituloh1">Cadastro Cliente</h1>
      </div>
      <div className="ccentral">
        <form onSubmit={Cadastro}>
          <label className="label">Nome:</label>
          <input
            className="inputF"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <br />
          <label className="label">Email:</label>
          <input
            className="inputF"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label className="label">Cpf:</label>
          <input
            className="inputF"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <br />
          <label className="label">Celular:</label>
          <input
            className="inputF"
            type="text"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
          <br />
          <label className="label">Cep:</label>
          <input
            className="inputF"
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <br />
          <label className="label">Rua:</label>
          <input
            className="inputF"
            type="text"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
          />
          <br />
          <label className="label">Complemento:</label>
          <input
            className="inputF"
            type="text"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
          <br />
          <label className="label">Bairro:</label>
          <input
            className="inputF"
            type="text"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
          <br />
          <label className="label">Cidade:</label>
          <input
            className="inputF"
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <br />
          <label className="label">Estado:</label>
          <input
            className="inputF"
            type="text"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />
          <br />
          <label className="label">Senha:</label>
          <input
            className="inputF"
            type="text"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <br />
          <div className="cdbtn">
            <button className="btnenviar" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <button className="btnvoltar" onClick={() => navigation("/Dashboard")}>
        Voltar
      </button>
    </div>
  );
}
