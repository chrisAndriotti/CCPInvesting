import {BUSCAR_COMPRAS, ENVIAR_COMPRA, ARMAZENAR_COMPRAS } from "../compra/types"

const INITIAL_STATE = {}

const CompraReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ENVIAR_COMPRA:
            console.log('reducer',action.payload)
            return{...state, compra: action.payload }

        case ARMAZENAR_COMPRAS:
            return armazenarCompras(state, action);
            
        default: {
            console.log("Saída default compra")
            return state;
        }
    }
}

const armazenarCompras = (state, action) => {
    console.log("state >>>",state,"action >>>", action)
    return { ...state, compras: action.payload }
   
}

export default CompraReducer;