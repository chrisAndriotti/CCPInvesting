import { combineReducers } from "redux";
import investidor from "./investidor/reducers";
import login from "./login/reducers";

export default combineReducers({
    login:login,
    investidor:investidor
});
