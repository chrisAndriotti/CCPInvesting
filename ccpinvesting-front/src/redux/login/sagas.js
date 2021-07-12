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
    const token = yield call(LoginAPI.cadastrarInvestidor, action.payload);
    console.log("token: ",token)
    // yield put({ type: types.RECUPERAR_TOKEN, payload: token})
}

// function* recuperarToken(action){

// }


export default function* loginSaga(){
    yield all([
        watchLogar(),
        // wathcRecuperarToken()
    ])
}