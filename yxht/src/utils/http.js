import axios from "axios"
import router from '../router/index'


axios.interceptors.request.use(config => {    //配置axios请求头，axios每次发起请求携带token，在Network中的headers看的到
    config.headers.Authorization = window.localStorage.getItem('token')
    // `Bearer ${window.localStorage.getItem('token')}`
    return config
})

axios.interceptors.response.use(
    response => {
        if (response.data.code == -1) {
            router.push({
                path: "/login"
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)

const Request = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            ...params,
        }).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}


export default Request