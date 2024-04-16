import { Link } from "react-router-dom";
import "./header.css";
import AppDental from "../assets/AppDental.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="logoHeader">
        <Link to="/">
          <img src={AppDental} alt="App Dental" />
        </Link>
      </div>
      <div className="links">
        <h1 className="hLinks">
          <Link to="/Dashboard" className="link">
            Dashboard
          </Link>
          <Link to="/Agendamentos" className="link">
            Agendamentos
          </Link>
          <Link to="/CriarDentista" className="link">
            Criar Dentista
          </Link>
          <Link to="/CriarCliente" className="link">
            Criar Cliente
          </Link>
        </h1>
      </div>
    </div>
  );
}
