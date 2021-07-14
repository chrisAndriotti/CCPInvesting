import * as types from './types'
import * as LoginAPI from '../../services/login';
import {all, call, put, takeEvery} from 'redux-saga/effects';

function* watchLogar(){
    yield takeEvery(types.ENVIAR_LOGIN, logar)
}

// function* wathcRecuperarToken(){
//     yield takeEvery(types.RECUPERAR_TOKEN, recuperarToken)
// }

function* logar(action){
    const token = yield call(LoginAPI.logar, action.payload);
    console.log("token: ",token)
    localStorage.setItem("ccp-token", token.data);
    yield put({ type: types.API_SUCCESS, payload: action.payload.login})
}

export default function* loginSaga(){
    yield all([
        watchLogar(),
        // wathcRecuperarToken()
    ])
}