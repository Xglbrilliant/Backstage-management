<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />
      <el-container>
        <el-main>Main</el-main>
        <el-footer><Footer /></el-footer>
      </el-container>
    </el-container>
    <!-- element-ui的使用 -->
    <!-- <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button> -->
    
    <!-- 图标库font-awesome的使用：每个类都有一个'fa'的类名 -->
    <!-- <i class="fa fa-etsy"></i> -->
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Menu from '@/components/common/Menu.vue'

export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {
    Header,
    Footer,
    Menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
  }
}
</style>
