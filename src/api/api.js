// 在项目中大多数都会将对应的接口请求封装成api来调用
import service from '@/service.js'

// 登录接口
export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data  //data: data的简写
    })
}