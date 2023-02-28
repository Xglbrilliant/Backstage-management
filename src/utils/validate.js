// 用户名匹配
export function nameRule(rule, value, callback) {
    let reg = /(^[a-zA-Z0-9]{4,10}$)/
    if(value === '') {
        callback(new Error('用户名不能为空!'))
    }else if(!reg.test(value)) {
        callback(new Error('用户名必须在4-10位之间!'))
    }else {
        callback()
    }
}

// 密码正则匹配
export function passRule(rule, value, callback) {
    let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    if(value === '') {
        callback(new Error('密码不能为空!'))
    }else if(!pass.test(value)) {
        callback(new Error('密码必须在6-12位之间,且必须包含大小写字母、数字和特殊符号!'))
    }else {
        callback()
    }
}