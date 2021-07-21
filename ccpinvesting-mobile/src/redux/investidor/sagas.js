import * as types from './types'
import * as InvestidorAPI from '../../services/investidor';
import {all, call, put, takeLatest, takeEvery} from 'redux-saga/effects';


function* watchBuscarInvestidorPorLogin(){
    yield takeLatest(types.BUSCAR_INVESTIDOR_LOGADO, buscarInvestidorPorLogin)
}

function* buscarInvestidorPorLogin(action){
    const investidor = yield call(InvestidorAPI.buscarInvestidorPorLogin, action.payload);
    console.log("buscarInvestidorPorLogin",investidor)
    yield put({ type: types.INVESTIDOR_LOCALIZADO, investidor: investidor})
}

export default function* investidorSaga(){
    yield all([
        watchBuscarInvestidorPorLogin(),
    ])
}