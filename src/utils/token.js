// 登录实际的接口地址后需要获取对应的token并将它携带到请求头，因此进行token的封装

// 重启项目，即可进行登录页的登录功能的数据交互,登录成功需要存储用户名和token。
// 这里我们去新建一个token.js去封装一下设置token和获取token以及删除token的方法
// 然后在axios的二次封装的请求头里携带上token,至此,我们的axios二次封装和跨域完美解决。


// 添加token
export function setToken(tokenKey, token) {
    localStorage.setItem(tokenKey, token)
}

// 获取token
export function getToken(tokenKey) {
    localStorage.getItem(tokenKey);
}
// 移除token
export function removeToken(tokenKey) {
    localStorage.removeItem(tokenKey)
}