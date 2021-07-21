import axios from 'axios'

const iProdcution = process.env.NODE_ENV === 'production'

const baseURL = iProdcution ? "https://ironprojects.herokuapp.com/api" : "http://localhost:3001/api"

axios.defaults.withCredentials = true

export  const _api = axios.create({
    baseURL,
    timeout:10000
})