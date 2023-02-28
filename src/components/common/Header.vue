<template>
    <div class="header">
        <el-header>
            <div class="title">后台管理系统</div>
            <div>{{ name }}</div>
        </el-header>
    </div>
</template>

<script>
// import { getToken } from '@/utils/token.js'

export default {
    data() {
        return {
            name: ''
        }
    },
    created() {
        // console.log(localStorage.username);
        //this.name = getToken('username');  //undefined,获取不到用户名
        this.name = localStorage.username;
    }
}
</script>

<style lang="scss" scoped>
.header {
    .el-header {
        background: #2578b5;
        color: #fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        .title {
            width: 200px;
            font-size: 24px;
        }
    }
}

</style>