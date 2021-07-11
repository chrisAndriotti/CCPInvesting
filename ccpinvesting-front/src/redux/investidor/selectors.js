import { INVESTIDOR_INICIAL } from "../../util/constantes";

export const getInvestidores = state => state.investidor.investidores || [];
export const getInvestidorAtual =  state => state.investidor.investidorAtual || INVESTIDOR_INICIAL;