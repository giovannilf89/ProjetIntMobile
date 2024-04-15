import axios from "axios";

const apiDental = axios.create({
    baseURL: 'http://192.168.0.120:3333'
})

export default apiDental