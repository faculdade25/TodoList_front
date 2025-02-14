import React from "react";
import { FaList, FaPlus, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";


const MeuComponente = () => {
  return (
    <div className="sidebar">
    <h2  className="header">Olá! *Guest*</h2>
    <nav>
      <button className="list-item"><FaList /> Minha lista</button>
      <button className="list-item"><FaList /> Minha listinha</button>
      <button className="add-list"><FaPlus /> Criar lista</button>
    </nav>
    <button className="logout"><FaSignOutAlt /> Sair</button>
  </div>
  );
};

export default MeuComponente;
