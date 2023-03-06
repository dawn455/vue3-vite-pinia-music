// 首页轮播图请求数据
import service from ".."

export function getBanner(){
  return service({
    method:'get',
    url:'/banner?type=0'
  })
}

// 首页推荐歌单
export function getMusicList(){
  return service({
    method:'get',
    url:'/personalized?limit=10',
    
  })
}

// 首页最新音乐推荐
export function getNewMusic(){
  return service({
    method:'get',
    url:'/personalized/newsong',
    
  })
}

// 播放音乐
// 首页最新音乐推荐
export function playMusicApi(params){
  return service({
    method:'get',
    url:`/song/url?id=${params}`,
  })
}