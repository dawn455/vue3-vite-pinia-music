<template>
  <div class="discover" v-loading="state.loading">
    <!-- 轮播图 -->
    <div class="discover-banner">
        <el-carousel :interval="4000" type="card" height="100px">
          <el-carousel-item v-for="item in state.images" :key="item">
            <img :src="item.imageUrl" alt="banner" class="item-img" text="2xl" justify="center">
          </el-carousel-item>
        </el-carousel>
    </div>

    <!-- 推荐歌单 -->
    <div class="discover-songs">
      <h4>推荐歌单</h4>
      <div class="list">
        <ul>
          <li v-for="item in state.musics" :key="item.id" class="iconfont icon-play">
            <p class="p1"><el-icon color="#ece1e1" size=50><VideoPlay  /></el-icon></p>
            <img  :src="item.picUrl" :alt="item.name">
            <p class="p2">
              <a href="/">{{ item.name }}</a></p>
          </li>
        </ul>
      </div>
    </div>

     <!-- 最新音乐 -->
     <div class="discover-songs">
      <h4>最新音乐</h4>
        <ul class="new-songs">
          <li v-for="item in state.newMusic" :key="item.id">
            <div class="music-img-wrap">
              <img :src="item.picUrl">
              <p @click="playMusic(item)"><el-icon color="#ece1e1" size=50><VideoPlay  /></el-icon></p>
            </div>

            <div class="music-info">
              <p class="music-name">{{ item.name }}</p>
              <p class="music-singer" 
                v-for="singer in item.song.artists" 
                :key="singer.id">{{ singer.name }}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- <audio :src='state.musicUrl' controls autoplay></audio> -->
      
  </div>
</template>

<script setup>
import { getBanner,getMusicList,getNewMusic,playMusicApi } from '../../request/api/discover'
import { onMounted, reactive} from 'vue';
import {usePlayUrl} from '../../store/index'

// const loading = ref(true)
const state = reactive({
  images:[],
  musics:[],
  newMusic:[],
  musicUrl:'',
  loading:true
})


onMounted(async () =>{
// 获取轮播图数据
let res = await getBanner()
state.images = res.data.banners
state.loading =false

// 获取推荐歌单数据
let res1 = await getMusicList()
state.musics = res1.data.result


// 获取最新推荐音乐
let res2 = await getNewMusic()
state.newMusic = res2.data.result

})

const store = usePlayUrl()
let {musicUrl} = store
// console.log(musicUrl);

// 点击播放音乐
async function  playMusic(item){
  let res3 = await playMusicApi(item.id)
  // state.musicUrl = res3.data.data[0].url
  // const Test = getPlayUrl()
  //   Test.$patch((state)=> {
      state.musicUrl = res3.data.data[0].url
      console.log(state.musicUrl);
      store.musicUrl = state.musicUrl
      console.log(store.musicUrl);
    }
// }
</script>

<style lang="less" scoped>
.el-carousel__item{
  height: 160px;
  border-radius: 15px;
}
.discover-banner{
  height: 190px;
}
.el-carousel__item img {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
  // color: #ece1e1;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.item-img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  // scale: 1;
  border-radius: 15px;
}
.el-carousel__indicators{
  position: absolute;
  bottom: -50px;
  left: 50px;
}
.el-carousel--horizontal{
  height: 100%;
}
.el-carousel__indicators--outside{
  position: absolute;
  bottom: 0;
  left: 32%;
}



// 推荐音乐
.discover-songs{
  // margin-bottom: 20px;
}
.discover-songs h4 {
    color: #2764cd;
    margin: 15px 0;
    // margin-bottom: 20px;
  }
.discover-songs .list ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

  }
.discover-songs .list ul li {
      width: 18%;
      margin: 10px 0;
      position: relative;
      overflow-y: hidden;
      
      // border: 2px solid #ccc;
      list-style: none;
      height: 204px;
    }
    .discover-songs .list ul li img{
        width: 100%;
        border-radius: 15px;
        cursor: pointer;
      }
      .list li .p1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      color: #fff;
      font-size: 12px;
      padding: 5px;
      box-sizing: border-box;
      transform: translateY(-100%);;
      transition: .5s;
      opacity: 0;
      text-align: center;
  }
  .list li:hover .p1{
      // height: 20px;
      transform: translateY(45px);
      opacity: 1; 
  }

    .list ul li .p2{
      width: 100%;
      // height: 10px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: wrap;
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;
      line-height: 20px;
    }
    .list ul li .p2 a{
      color: #000;
      text-decoration: none;
    }

    .list ul li .p2 a:hover{
      text-decoration: underline;
    }


// 最新音乐
.new-songs {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
  }
  
  .new-songs li {
      width: 50%;
      display: flex;
      padding: 10px;
      box-sizing: border-box;
      position: relative;
  }
  .new-songs li:hover {
      background-color: #ddd;
      cursor: pointer;
  }

   .new-songs li:hover::before {
       opacity: 1;
  }

.music-img-wrap {
        position: relative;
        width: 100px;
        cursor: pointer;
        // width: 100px;
    }
 .music-img-wrap img{
  width: 100%;
 }   
 .music-name{
  font-size: 14px;
 }

 .music-img-wrap p{
  position: absolute;
  top: 50%;
  margin-top: -25px;
  left: 50%;
  margin-left: -25px;
  // transform: translateY(-100%);;
      transition: 1s;
      opacity: 0;
 }
.music-img-wrap:hover p {
        opacity: 1;
    }


  .music-info {
      flex: 1;
      padding: 0 10px;
  }



  .new-songs li p:first-child {
      margin-bottom: 20px;
  }

  .music-singer {
    font-size: 12px;
    display: inline-block;
    margin: 0 5px;
    color: #a5a1a1;
  }

</style>