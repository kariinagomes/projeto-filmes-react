import React from "react";
import logo from "../../assets/imgs/logo-sciensa-pb2.png";
import "./header.css";

const Header = () => {
  return (
    <div className="fixed-menu">
      <div className="logo-content">
        <img src={logo} alt="Logo da sciensa" />
      </div>
      <div className="menu-content">
        <button>Adicionar Filme</button>
      </div>
    </div>
  );
};

export default Header;
