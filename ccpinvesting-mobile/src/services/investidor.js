import axios from 'axios'
import {PATH_BACKEND} from './caminho';

const BASE_URL = `${PATH_BACKEND}/investidor`;

export const buscarInvestidorPorLogin = login => {
    console.log("chamou api buscar-usuario")
    return axios.get(`${BASE_URL}/buscar-usuario/${login}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}