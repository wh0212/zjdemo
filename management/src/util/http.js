import axios from "axios"
import router from '../router/index'

axios.interceptors.response.use(
    response => {
        console.log(response)
        if (response.data.code !=1) {
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
            ...params
        }).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}


export default Request