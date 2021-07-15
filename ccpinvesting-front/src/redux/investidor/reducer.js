import { ARMAZENAR_INVESTIDOR, SETAR_INVESTIDOR_ATUAL, BUSCAR_INVESTIDOR_LOGADO, INVESTIDOR_LOCALIZADO } from "../investidor/types"

const INITIAL_STATE = {}

const InvestidorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BUSCAR_INVESTIDOR_LOGADO:
            return{...state, usuario: action.payload.usuario}

        case INVESTIDOR_LOCALIZADO:
            return{...state, investidor: action.investidor}

        case ARMAZENAR_INVESTIDOR:
            console.log("Entrou no Reducer investidor", action.payload);
            return armazenarInvestidor(state, action);

        case SETAR_INVESTIDOR_ATUAL:
            return { ...state, investidorAtual: action.investidorAtual };

        default: {
            console.log("Saída default")
            return state;
        }
    }
}

const armazenarInvestidor = (state, action) => {
    return { ...state, investidore: action.payload }
}

export default InvestidorReducer;