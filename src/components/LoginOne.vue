<!-- 最简单登录验证，适用于检验规则（rules）较少时使用 -->
<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>后台管理系统</span> 
            </div>
            <el-form :model="form" ref="form" label-width="80px">
                <el-form-item label="用户名" prop="username"
                :rules="[
                    {required: true, message: '请输入用户名！', trigger: 'blur'},  //blur失去焦点,change数据改变
                    {min: 4, max: 10, message: '长度在4-10位字符之间', trigger: 'blur'},
                ]">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password"
                :rules="[
                    {required: true, message: '请输入密码！', trigger: 'blur'},
                    {min: 6, max: 12, message: '长度在6-12位字符之间', trigger: 'blur'},
                ]">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">登录</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login(form) {
            // console.log(this);
            // 利用自带的refs来检验
            this.$refs[form].validate((valid) => {
                if(valid) {
                    console.log(this.form);
                }else {
                    console.error(this.form);
                }
            })
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
        width: 400px;
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
