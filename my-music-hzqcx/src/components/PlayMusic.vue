<template>
  <div>
    <el-footer>
      <div class="footer-l"></div>
      <div class="footer-c"><audio :src='store.musicUrl' controls autoplay></audio></div>
      <div class="footer-r"></div>
    </el-footer>
  </div>
</template>

<script setup>
import {usePlayUrl} from '../store/index'
import {reactive} from 'vue'

const store = usePlayUrl()
let {musicUrl} = store

// const state = reactive({
//   url:''
// })
// const playUrl = usePlayUrl()
// state.url = playUrl.musicUrl
console.log(store.musicUrl);
</script>

<style lang="less" scoped>
.el-footer{
  position: fixed  ;
  // width: 1100px;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.footer-l{
  width: 200px;
  height: 60px;
  background-color: pink;
}
.footer-c{
  width: 200px;
  height: 60px;
  background-color: pink;
}
.footer-r{
  width: 200px;
  height: 60px;
  background-color: pink;
}
</style>
