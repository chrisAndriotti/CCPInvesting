import { combineReducers } from "redux";
import acao from "./acao/reducer";
import investidor from "./investidor/reducer";

export default combineReducers({
    acao: acao,
    investidor: investidor

});