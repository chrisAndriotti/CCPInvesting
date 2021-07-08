import { all } from 'redux-saga/effects';
import acaoSaga from './acao/sagas';

export default function* rootSaga(){
    yield all([
        acaoSaga()
    ])
}