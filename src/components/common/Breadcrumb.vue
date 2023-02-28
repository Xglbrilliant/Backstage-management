<template>
    <div class="breadcrumb">
        <el-card>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <!-- 在这里this.$route.matched与$route.matched都可以，why??? -->
                <el-breadcrumb-item v-for="(item, index) in this.$route.matched" :key="index">{{ item.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-card>
    </div>
</template>