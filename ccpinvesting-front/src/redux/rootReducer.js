import { combineReducers } from "redux";
import acao from "./acao/reducer";
import investidor from "./investidor/reducer";
import login from './login/reducer'

console.log('root reducer')
export default combineReducers({
    acao: acao,
    investidor: investidor,
    login:login

});

