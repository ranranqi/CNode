import Vue from 'vue'
import Router from 'vue-router'
import Postlist from '../components/Postlist'
import Article from '../components/Article'
import UserInfo from '../components/UserInfo'
import SilderBar from '../components/SilderBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components:{
        main: Postlist
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id&&author=:name',
      components:{
        main: Article,
        silderBar: SilderBar
      }
    },
    {
      name: 'user_info',
      path: '/topic/:name',
      components:{
        main: UserInfo
      }
    }
  ]
})
