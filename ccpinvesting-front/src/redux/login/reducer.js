// import { SET_LOADER } from "./actions/ui";

import { ENVIAR_LOGIN, API_SUCCESS, API_ERROR, LOGOUT } from "./types";

const INITIAL_STATE = {
    isAuthUser: !!localStorage.getItem("ccp-investing"),
    'ccp-investing': JSON.parse(localStorage.getItem("ccp-investing")) || {},
    isLoading: false,
    error: null
}
const LoginReducer = (state = INITIAL_STATE, action) =>{

    switch (action.type) {
      case API_SUCCESS:
        console.log('API_SUCESS reducer')
        localStorage.getItem("ccp-token"); //TODO recuperar o id do cara
        return { ...state, isAuthUser: true, 'ccp-investing': action.payload };
  
      case API_ERROR:
        return { ...state, error: action.payload };
  
      case ENVIAR_LOGIN:
          console.log('enviar_login')
        return { ...state, isLoading: action.payload };
  
      case LOGOUT:
        localStorage.removeItem("ccp-token");
        return { ...state, isAuthUser: false, 'ccp-investing': {} };
  
      default:
       return state;

  }

};

export default LoginReducer;