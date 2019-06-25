import axios from 'axios'
import { autentica, getUserToken } from './auth'

export function geraJSON(dados){
    return JSON.stringify(dados);
}

const token = autentica() ? getUserToken() : undefined

/**
 * Define a url basica da api bem como o token de auhenicação
 * 
 */
const api = axios.create({
    baseURL: 'https://mwps.com.br/api',
    headers: {
        'Content-type': 'application/json',
        'mwps-auth-token': token
    }
})

export default api;