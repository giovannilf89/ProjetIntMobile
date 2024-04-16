import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Inicio from "./pages/Inicio/inicio";
import Dashboard from "./pages/Dashboard/dashboard";
import Header from "../src/componentes/header";
import Agendamentos from "./pages/Agendamentos/agendamentos";
import AgendamentoUnico from "./pages/Agendamentos/agendamentoUnico";
import CriarDentista from "./pages/Dentista/criarDentista";
import CriarCliente from "./pages/Cliente/criarCliente";
import Footer from '../src/componentes/footer'

function HeaderWithConditionalRendering() {
  const location = useLocation();
  const isNotHome = location.pathname !== "/";

  return isNotHome ? <Header /> : null;
}
// function FooterWithConditionalRendering() {
//   const location = useLocation();
//   const isNotHome = location.pathname !== "/";

//   return isNotHome ? <Footer /> : null;
// }

export default function Rotas() {
  return (
    <BrowserRouter>
      <HeaderWithConditionalRendering />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Agendamentos" element={<Agendamentos />} />
        <Route path="/AgendamentoUnico/:id" element={<AgendamentoUnico />} />
        <Route path="/CriarDentista" element={<CriarDentista />} />
        <Route path="/CriarCliente" element={<CriarCliente />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
