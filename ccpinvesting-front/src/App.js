import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Inicio from './componentes/Inicio';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
// import Negociacoes from './componentes/Negociacoes';
import Portifolio from './componentes/Portifolio';
import Contato from './componentes/Contato';
import Login from './pages/login/Login';
import Painel from './componentes/Painel';
// import CompraAcoes from './pages/compraAcoes/CompraAcoes';
import CadastroInvestidor from './pages/cadastroInvestidor/CadastroInvestidor'
import Listagem from './acao/Listagem';
import Perfil from './investidor/Perfil';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Cabecalho />
            <Route path="/inicio" exact component={Inicio} />
            <Route path="/acao" component={Listagem} />
            <Route path="/fale-conosco/salvar" component={Contato} />
            <Route path="/investidor/cadastrar" component={CadastroInvestidor} />
            <Route path="/seguranca/login" component={Login} />
            <Route path="/perfil" component={Perfil} />
            <Rodape />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
