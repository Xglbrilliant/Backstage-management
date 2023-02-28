<!-- 针对LoginTwo中validateName和validatePass基本一样（除了正则和callback函数），因此进行封装 -->
<!-- 创建utils文件夹用来存放的封装方法 -->
<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>后台管理系统</span>
            </div>
            <el-form :model="form" ref="form" label-width="80px" :rules="rules">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">登录</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { nameRule, passRule } from '../utils/validate.js'
import { setToken } from '@/utils/token.js'
import { login } from '@/api/api.js'

export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [{ validator: nameRule, trigger: 'blur' }],
                password: [{ validator: passRule, trigger: 'blur' }]
            }
        }
    },
    methods: {
        login(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    console.log(this.form);
                    //一、这样写太麻烦了(每次均要写完全路径），所以对axios进行二次封装
                    // this.axios.post('http://rapserver.sunmi.com/app/mock/340/login', this.form)
                    // .then(res => {
                    //     console.log(res);
                    //     if(res.data.status === 200) {
                    //         setToken('username', res.data.username)   //把信息存放在localstorage中供以后使用
                    //         this.$message({message: res.data.message, type: 'success'})
                    //         this.$router.push('/home')
                    //     }
                    // })
                    // .catch(err => {
                    //     console.error(err);
                    // })

                    //二、对axios进行二次封装后简写成以下形式，但是更可以把登录封装成api进行调用
                    // this.service.post('/login', this.form)
                    //     .then((res) => {
                    //         if(res.data.status === 200) {
                    //             setToken('username', res.data.username)
                    //             setToken('token', res.data.token)
                    //             this.$message({message: res.data.message, type: 'success'})
                    //             this.$router.push('/home') 
                    //         }
                        
                    login(this.form).then((res) => {
                        if(res.data.status === 200) {
                            setToken('username', res.data.username)
                            setToken('token', res.data.token)
                            this.$message({message: res.data.message, type: 'success'})
                            this.$router.push('/home') 
                        }
                        console.log(res);
                        })
                } else {
                    console.log(this.form);
                }
            });
        },
        resetForm(form) {
            this.$refs[form].resetFields();
        }
    }
}
</script>

<style lang="scss">
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    // background: #409EFF;
    background: url('../assets/bg.webp') center repeat;
    .el-card {
        background: #65768557;
    }
    .box-card {
        width: 500px;
        margin: 200px auto;
        color: #fff;
        .el-form .el-form-item__label {
            color: #fff;
        }
        .el-card__header {
            font-size: 34px;
        }

        .el-button {
            width: 90px;
        }
    }
}
</style>