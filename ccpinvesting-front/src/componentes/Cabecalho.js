import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo4.png';


const Cabecalho = (props) => {
  return (
    
    <div>
      <div className="jumbotron text-center">
        <h1>CCP Investing</h1>
        <p>Especialista em bolsa de valores</p>
        <form className="form-inline">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              size="50"
              placeholder="Ações"
              required
            />
            <div className="input-group-btn">
              <button type="button" className="btn btn-danger">
                Pesquisar
              </button>
            </div>
          </div>
        </form>
      </div>

      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img src={logo} width="50px"/>
            </Link>
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
              aria-controls="myNavbar"
              aria-expanded="false"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/">INICIO</Link>
              </li>
              <li>
                <Link to="/portfolio">PORTFOLIO</Link>
              </li>
              <li>
                <Link to="/acao">COMPRAR AÇÕES</Link>
              </li>
              <li>
                <Link to="/fale-conosco/salvar">FALE CONOSCO</Link>
              </li>
              <li>
                <Link to="/investidor/cadastrar">CADASTRE-SE</Link>
              </li>
              <li>
                <Link to="/seguranca/login">LOGIN</Link>
              </li>
              <li>
                <Link to="/perfil">PERFIL</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Cabecalho;
