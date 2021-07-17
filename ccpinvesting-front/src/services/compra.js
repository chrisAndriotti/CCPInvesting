import axios from './auth'
import {PATH_BACKEND} from './caminhos';

const BASE_URL = `${PATH_BACKEND}/compra`;

export const compraAcao = compra => {
    return axios.post(BASE_URL, compra)
        .catch(error => {
            throw error;
        })
}