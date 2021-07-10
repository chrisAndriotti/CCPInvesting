import { ARMAZENAR_INVESTIDOR, SETAR_INVESTIDOR_ATUAL } from "../investidor/types"

const INITIAL_STATE = {}

const InvestidorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ARMAZENAR_INVESTIDOR:
            console.log("Entrou no Reducer investidor", action.payload);
            return armazenarAcao(state, action);
        case SETAR_INVESTIDOR_ATUAL:
            return { ...state, investidorAtual: action.investidorAtual };
        default: {
            console.log("Saída default")
            return state;
        }
    }
}

const armazenarAcao = (state, action) => {
    return { ...state, investidores: action.payload }
}

export default InvestidorReducer;