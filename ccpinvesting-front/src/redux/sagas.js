import { all } from 'redux-saga/effects';
import acaoSaga from './acao/sagas';
import investidorSaga from './investidor/sagas';

export default function* rootSaga(){
    yield all([
        acaoSaga(),
        investidorSaga()
    ])
}