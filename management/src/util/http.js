import axios from "axios"
import router from '../router/index'
const baseUrl = "https://tgadmin.clvtmcn.cn/"
axios.interceptors.response.use(
    response => {
        if (response.data.code ==-1) {
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
            url:baseUrl+params.url
        }).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}


export default Request