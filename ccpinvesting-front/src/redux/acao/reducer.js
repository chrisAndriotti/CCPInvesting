import { ARMAZENAR_ACAO, SETAR_ACAO_ATUAL } from "../acao/types"

const INITIAL_STATE = {}

const AcaoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ARMAZENAR_ACAO:
            console.log("Entrou no Reducer Acao", action.payload);
            return armazenarAcao(state, action);
        case SETAR_ACAO_ATUAL:
            return { ...state, acaoAtual: action.acaoAtual };
        default: {
            console.log("Saída default")
            return state;
        }
    }
}

const armazenarAcao = (state, action) => {
    return { ...state, acoes: action.payload }
}

export default AcaoReducer;