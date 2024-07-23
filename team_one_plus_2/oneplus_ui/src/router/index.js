import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VideoView from '../views/VideoView.vue'
import VisionView from '../views/VisionView.vue'
import LogView from '../views/LogView.vue'


Vue.use(VueRouter)

const routes = [

   {
     path: '/',
     name: '',
     component: HomeView
   },

  {
    path: '/Video',
    name: 'Video',
    component: VideoView
  },
  {
    path: '/vision',
    name: 'vision',
    component:  VisionView
  },
  {
    path: '/log',
    name: 'Log',
    component: LogView
  }
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
