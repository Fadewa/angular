<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文化头条</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <i class="el-icon-menu"></i>栏目管理
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-menu"></i>资讯管理
          </el-menu-item>
          <el-menu-item index="1-3">
            <i class="el-icon-menu"></i>发布管理
          </el-menu-item>
          <el-menu-item index="1-4">
            <i class="el-icon-menu"></i>排序管理
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文化活动</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <i class="el-icon-menu"></i>栏目管理
          </el-menu-item>
          <el-menu-item index="2-2">
            <i class="el-icon-menu"></i>资讯管理
          </el-menu-item>
          <el-menu-item index="2-3">
            <i class="el-icon-menu"></i>发布管理
          </el-menu-item>
          <el-menu-item index="2-4">
            <i class="el-icon-menu"></i>排序管理
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
<script>
export default {
  name: "SiderBar",
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


