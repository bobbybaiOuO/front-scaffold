// 封装 axios
/*
    1. 封装可以简化接口调用的代码，可以去掉一些重复的代码
    2. 替换掉axios也是较为简单的
    3. 可以对接口进行统一的管理，方便维护
*/
import axios from 'axios'

const request = (url, data = {}, method='GET', timeout = 5000) => {
    console.log("使用封装函数去处理请求")
    
    return new Promise((resolve, reject) => {
        console.log("使用axios请求接口")
        methodLower = method.toLowerCase()
        if (methodLower === 'get') {
            axios({
                method: method.toLowerCase(),
                params: data,
                url: url,
                timeout: timeout,
            }).then((response)=>{
                // 正常拿到数据
                resolve(response.data)
            }).catch((error)=>{
                // 接口请求失败
                reject(error) 
            })
        } else if (methodLower === 'post') {
            axios({
                method: method.toLowerCase(),
                data: data,
                url: url,
                timeout: timeout,
            }).then((response)=>{
                // 正常拿到数据
                resolve(response.data)
            }).catch((error)=>{
                // 接口请求失败
                reject(error) 
            })
        }
    })
}

export default request
