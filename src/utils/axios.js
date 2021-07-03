import axios from "axios"
const instance = axios.create({
    baseURL: 'http://120.25.239.165:8889/api/default',
    timeout: 10000
})

export default instance