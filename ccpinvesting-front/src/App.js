import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Inicio from './componentes/Inicio';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import Negociacoes from './componentes/Negociacoes';
import Portifolio from './componentes/Portifolio';
import CompraAcoes from './componentes/CompraAcoes';
import Contato from './componentes/Contato';
import Login from './componentes/Login';
import Painel from './componentes/Painel';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Cabecalho />

            <Route path="/" exact component={Inicio} />
            <Route path="/negociacoes" component={Negociacoes} />
            <Route path="/portifolio" component={Portifolio} />
            <Route path="/CompraAcoes" component={CompraAcoes} />
            <Route path="/contato" component={Contato} />
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
