/**
 * uni.request 请求
 * @param {*} url 请求地址
 * @param {*} option 配置项
 */
const request = (url, { method = 'get', data, header }) => {
    console.log(url, data);
    return new Promise((resolve, reject) => {
        uni.request({
            url,
            method,
            data,
            header,
            success: res => {
                if (res.data.code === 200) {
                    resolve(res.data)
                } else {
                    reject(res.data.code)
                }
            },
            fail: err => {
                reject(err)
            },
        })
    })
}

/**
 * get 请求
 * @param {string} url 请求地址
 * @param {object} data 请求参数
 */
export const get = (url, data) => {
    return request(url, {
        data,
    })
}


/**
 * post 请求
 * @param {string} url 请求地址
 * @param {object} data 请求参数
 */
export const post = (url, data) => {
    return request(url, {
        data,
        method: 'post',
        header: {
            'content-type': 'application/json',
        },
    })
}


export default {
    get,
    post,
}
