<!-- 针对LoginOne中的:rules进行进阶验证 -->
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
export default {
    data() {
        const validateName = (rule, value, callback) => {
            let reg = /(^[a-zA-Z0-9]{4,10}$)/
            if(value === '') {
                callback(new Error('用户名不能为空!'))
            }else if(!reg.test(value)) {
                callback(new Error('用户名必须在4-10位之间!'))
            }else {
                callback()
            }
        };
        const validatePass = (rule, value, callback) => {
            let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
            if(value === '') {
                callback(new Error('密码不能为空!'))
            }else if(!pass.test(value)) {
                callback(new Error('密码必须在6-12位之间,且必须包含大小写字母、数字和特殊符号!'))
            }else {
                callback()
            }
        };
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [{ validator: validateName, trigger: 'blur' }],
                password: [{ validator: validatePass, trigger: 'blur' }]
            }
        }
    },
    methods: {
      login(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            console.log(this.form);
            // this.axios.post('http://rapserver.sunmi.com/app/mock/340/login', this.form)
            // .then(res => {
            //     console.log(res);
            //     if(res.data.status === 200) {
            //         localStorage.setItem('username', res.data.username)   //把信息存放在localstorage中供以后使用
            //         this.$message({message: res.data.message, type: 'success'})
            //         this.$router.push('/home')
            //     }
            // })
            // .catch(err => {
            //     console.error(err);
            // })
          } else {
            console.log('error submit!!');
            return false;
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
    background: #409EFF;
    .box-card {
        width: 500px;
        margin: 200px auto;
        .el-card__header {
            font-size: 34px;
        }
        .el-button {
            width: 90px; 
        }
    }
}

</style>
