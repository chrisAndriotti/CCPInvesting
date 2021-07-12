// import { SET_LOADER } from "./actions/ui";

import { ENVIAR_LOGIN, API_SUCCESS, API_ERROR, LOGOUT } from "./types";

const INITIAL_STATE = {
    isAuthUser: !!localStorage.getItem("user"),
    usuario: JSON.parse(localStorage.getItem("user")) || {},
    isLoading: false,
    error: null
}
const LoginReducer = (state = INITIAL_STATE, action) =>{

    switch (action.type) {
      // case API_SUCCESS:
      //   localStorage.setItem("usuario", JSON.stringify(action.payload.usuario));
      //   return { ...state, isAuthUser: true, usuario: action.payload.usuario };
  
      case API_ERROR:
        return { ...state, error: action.payload };
  
      case ENVIAR_LOGIN:
          console.log('enviar_login')
        return { ...state, isLoading: action.payload };
  
      case LOGOUT:
        localStorage.removeItem("user");
        return { ...state, isAuthUser: false, usuario: {} };
  
      default:
       return state;

  }

};

export default LoginReducer;