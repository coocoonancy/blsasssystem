<template>
<el-container style="height: 100vh">
  <el-aside width="200px">Aside</el-aside>
  <el-container style="background: #F2F6FC;">
    <el-header>Header</el-header>
    <el-main>
      <div class="main_container"></div>
    </el-main>
    <el-footer>Copyright © 2020 Broadlink  保留所有权利</el-footer>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: 'Index',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .el-header {
    background-color: #fff;
    color: #333;
  }
  .el-footer {
    color: #333;
    text-align: center;
  }
  .el-aside {
    color: #333;
    text-align: center;
    box-shadow: 4px 4px 4px #EBEEF5;
  }
  .el-main {
    color: #333;
    .main_container {
      background: #fff;
      height: 100%;
    }
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
