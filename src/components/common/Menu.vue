<template>
  <div class="menu">
    <el-aside width="200px">
      <!-- 添加router是为了点击子目录时url会跳转 -->
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#2578b5"
        text-color="#fff"
        active-text-color="#ffd04b">
        <!-- 用template包裹是为了方便使用v-for，且避免与v-if一起使用 -->
        <template v-for="(item, index) in menus">
          <!-- 通过v-if="!item.hidden"与router/index.js中的hidden来控制item的展示与隐藏 -->
          <el-submenu :index="index + ''" :key="index" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group v-for="(child, index) in item.children" :key="index">
              <!-- 子目录 -->
              <el-menu-item :index="child.path">
                <i :class="child.iconClass"></i>
                {{ child.name }}
              </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: []
    };
  },
  methods: {},
  created() {
    console.log(this.$router.options.routes);
    this.menus = [...this.$router.options.routes]
    // console.log(this.menus);
  }
};
</script>

<style lang="scss" scoped>
.menu {
    .el-aside {
    // 上下铺满，不要滚动条
        height: 100%;
        .el-menu {
            height: 100%;
        }
        .fa {
          margin-right: 10px;
        }
        .el-submenu .el-menu-item {
            min-width: 0;
        }
    }
}
</style>