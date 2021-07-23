import axios from 'axios'
axios.defaults.withCredentials = true;
const baseURL = "http://localhost:3001/api"

export const _api = axios.create({
    baseURL,
})