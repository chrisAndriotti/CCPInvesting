import { combineReducers } from "redux";
import acao from "./acao/reducer";
import investidor from "./investidor/reducer";
import login from './login/reducer'
import compra from './compra/reducer'

export default combineReducers({
    acao: acao,
    investidor: investidor,
    login:login,
    compra:compra

});

