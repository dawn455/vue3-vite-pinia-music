import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path:"/",
    redirect:'/discover'
  },
  { 
    path:"/discover", //访问的路径
    component: ()=> import('../views/discover/discover.vue') //对应的组件
 },
 { 
  path:"/recommend", //访问的路径
  component: ()=> import('../views/recommend/recommend.vue') //对应的组件
},
{ 
  path:"/newsongs", //访问的路径
  component: ()=> import('../views/newsongs/newsongs.vue') //对应的组件
},
{ 
  path:"/mvs", //访问的路径
  component: ()=> import('../views/mvs/mvs.vue') //对应的组件
},
]
const router = createRouter({
  history:createWebHashHistory(),
  routes:routes,
})

export default router