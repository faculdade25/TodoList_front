import React from "react";
import { FaList, FaPlus, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";


const MeuComponente = ({ lists, onSelectList }) => {

    

  
  return (
    <div className="sidebar">
    <h2  className="header-sidebar">Olá! *Guest*</h2>
    <nav>
        {lists.map((list, index) => (
          <button key={index} onClick={() =>  onSelectList(index)} className="list-item">
            <FaList /> {list.name}
          </button>
        ))}
        <button className="add-list"><FaPlus /> Criar lista</button>
      </nav>
    <button className="logout"><FaSignOutAlt /> Sair</button>
  </div>
  );
};

// MeuComponente.propTypes = {
//   lists: PropTypes.array.isRequired,  // Espera um array de listas
//   onSelectList: PropTypes.func.isRequired,  // Espera uma função
// };

export default MeuComponente;
