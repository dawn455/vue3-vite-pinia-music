<template>
  <div class="header">
    <el-container>
      <!-- logo -->
      <el-header>
        <h1 class="logo">
          <a hidefocus="true" href="/#"></a>
        </h1>
        <!-- 搜索框 -->
        <el-input
          placeholder="请输入内容"
          v-model="input"
          clearable
          class="m-input"
          prefix-icon="search">
        </el-input>
      </el-header>
      <el-container>
        <el-aside>
            <el-row class="tac">
              <el-col >
                <el-menu
                  default-active="1"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <router-link to="/discover">
                    <el-menu-item index="1">
                      <el-icon><Headset /></el-icon>
                    <span>发现音乐</span>
                  </el-menu-item>
                  </router-link>

                  <router-link to="/recommend">
                    <el-menu-item index="2">
                      <el-icon><List /></el-icon>
                    <span>推荐歌单</span>
                  </el-menu-item>
                  </router-link>
                 
                  <router-link to="/newsongs">
                    <el-menu-item index="3">
                    <el-icon><document /></el-icon>
                    <span>最新音乐</span>
                  </el-menu-item>
                  </router-link>
                  
                  <router-link to="/mvs">
                    <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <span>最新MV</span>
                  </el-menu-item>
                  </router-link>
               
                </el-menu>
              </el-col>
            </el-row>
        </el-aside>

        <el-main>
            <router-view></router-view>
        </el-main>
        
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const input = ref('')
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.header{
  width: 1100px;
  
  // background-color: #333;
  margin: 0 auto;
  .el-header {
    overflow-y: auto;
    // position: fixed;
    // top: 0;
    --el-header-padding:0;
    --el-header-height: 70px;
    background-color: #242424;
    color: #333;
    text-align: center;
    line-height: 70px;
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
      float: left;
      width: 176px;
      height: 69px;
      background-position: 0 0;
      background: url(../assets/img/topbar.png) no-repeat;
    }
  .m-input{
    :deep(.el-input__wrapper){
      border-radius: 15px;
      
    }
    }
    .el-input{
      width: 158px;
      height: 32px;
      .prefix-icon{
        color: #333;
      }
    }
  }
  
  .el-aside {
    width: 200px;
    background-color: #aca8a8;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
    box-sizing: border-box;
    // height: 1000px;

  }
  .el-menu-item{
      // border: 1px solid #E9EEF3;
      // background: #C20C0C;
    }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    // text-align: center;
    // line-height: 140px;
    // height: 1000px;
    overflow-y: auto;
  }
}
// .el-footer{
//   position: fixed  ;
//   width: 1100px;
//   bottom: 0;
//   background-color: #fff;
// }
.el-container{
  margin-bottom: 60px;
}
</style>