import axios from 'axios'
import { Promise } from 'core-js'
import { getToken } from '@/utils/token.js'
import { Message } from 'element-ui'

//它会有一个基础路径(baseURL)，因此需要在vue.config.js中配置对应的代理
const service = axios.create({
    baseURL: '/api',  //baseURL会自动地加在请求地址上
    timeout: 10000  //如果请求超过这个时间就会中断请求
})


//添加请求拦截器
service.interceptors.request.use((config) => {
    //在请求之前做些什么（获取并设置token）
    config.headers['token'] = getToken('token')  //在每次请求之前将token携带上去，否则无法访问
    return config
},(error) => {
    return Promise.reject(error)
})


//添加请求响应拦截器
service.interceptors.response.use((response) => {
    //对响应数据做些什么（如对不同的状态码做出提示）
    let { status, message } = response.data
    if(status !== 200) {
        Message({message: message || 'error', type: 'warning'})
    }
    // return Promise.resolve(response.data)
    return response
}, (error) => {
    return Promise.reject(error)
})

export default service