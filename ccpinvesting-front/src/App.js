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
import CompraAcoes from './pages/compraAcoes/CompraAcoes';
import CadastroInvestidor from './pages/cadastroInvestidor/CadastroInvestidor'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Cabecalho />

            <Route path="/" exact component={Inicio} />
            {/* <Route path="/negociacoes" component={Negociacoes} /> */}
            <Route path="/portifolio" component={Portifolio} />
            <Route path="/comprar" component={CompraAcoes} />
            <Route path="/contato" component={Contato} />
            <Route path="/cadastre-se" component={CadastroInvestidor} />
            <Route path="/login" component={Login} />
            <Route path="/painel" component={Painel} />

            <Rodape />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
