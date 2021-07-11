import * as types from './types'
import * as LoginAPI from '../../services/login';
import {all, call, takeEvery} from 'redux-saga/effects';

function* watchLogar(){
    yield takeEvery(types.ENVIAR_LOGIN, logar)
}

function* logar(action){
    yield call(LoginAPI.cadastrarInvestidor, action.payload);
}

export default function* loginSaga(){
    yield all([
        watchLogar()
    ])
}