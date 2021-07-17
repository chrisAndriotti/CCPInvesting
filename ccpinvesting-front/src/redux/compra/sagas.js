import * as types from './types'
import * as CompraAPI from '../../services/compra'
import { all, call, takeLatest } from '@redux-saga/core/effects'

function* watchCompra(){
    yield takeLatest(types.ENVIAR_COMPRA, compra)
}

function* watchBuscarCompras(){
    yield takeLatest(types.ENVIAR_COMPRA, buscarCompras)
}

function* compra(action){
    yield call(CompraAPI.compraAcao, action.payload)
}

function* buscarCompras(){
    yield call(CompraAPI.buscarCompras)
}


export default function* compraSaga(){
    yield all([
        watchCompra(),
        watchBuscarCompras(),
    ])
}