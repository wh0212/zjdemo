import axios from "axios"

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