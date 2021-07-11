import axios from 'axios'
import {PATH_BACKEND} from './caminhos';

const BASE_URL = `${PATH_BACKEND}/seguranca/login`;

export const cadastrarInvestidor = login => {
    return axios.post(BASE_URL, login)
            .catch(error => {
                throw error;
            })
}