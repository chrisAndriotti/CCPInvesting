import * as types from './types'

export const buscarToken = login => ({ type: types.ENVIAR_LOGIN, payload: login });
// export const retornoOk = () => ({type: types.API_SUCCESS})