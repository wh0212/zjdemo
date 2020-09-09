import axios from "axios"
import router from '../router/index'
const baseUrl = "https://tgadmin.clvtmcn.cn/"
import { isWeiXin, isMobile } from '../util/model'
axios.interceptors.response.use(
    response => {
        if (response.data.code == -1) {
            if (isWeiXin() || isMobile()) {
                router.push({
                    path: "/mblogin"
                })
            } else {
                router.push({
                    path: "/pclogin"
                })
            }

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
            url: baseUrl + params.url
        }).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}


export default Request