import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
const router = new VueRouter({
  // 设置路由模式,默认为hash(路径中#后面的内容是hash值,不会包含在http请求中上传给服务器)
  mode:'history',
  routes:[
    {
      path:'/about',
      component:About,
      // meta属性用于在路由中添加程序员自定义的属性
      meta:{title:'about'}
    },
    {
      path:'/home',
      component:Home,
      meta:{title:'home'},
      children:[ //嵌套路由 路径前不用加"/"
        {
          name:'news',
          path:'news',
          component:News,
          meta:{isAuth:true,title:'news'},
          // 独享路由守卫 对路由进行单独限制 没有后置守卫,但可与全局的后置守卫搭配使用
          // beforeEnter(to,from,next){
          //   console.log('@',to,from)
          //   if(to.meta.isAuth){
          //     if(localStorage.getItem('name')==='kaylee1'){
          //       next()
          //     }else{
          //       alert('姓名错误')
          //     }
          //   }else{
          //     next()
          //   }
          // },
        },
        {
          path:'message',
          component:Message,
          meta:{isAuth:true,title:'message'},
          children:[
            {
              // 命名路由
              name:'xiangxi',
              // 使用占位符接收相应的params参数
              path:'detail/:id/:title',
              // props的第三种写法，值为函数，默认接收$route参数
              props(r){
                return{
                  id:r.params.id,
                  title:r.params.title
                }
              },
              component:Detail
            }
          ]
        }
      ]
    }
  ]
})
// 全局路由守卫 前置路由守卫beforeEach和后置路由守卫afterEach
// router.beforeEach((to,from,next)=>{
//   console.log('@',to,from)
//   if(to.meta.isAuth){
//     if(localStorage.getItem('name')==='kaylee1'){
//       next()
//     }else{
//       alert('姓名错误')
//     }
//   }else{
//     next()
//   }
// })
router.afterEach((to,from)=>{
  document.title=to.meta.title || 'Vue Router'
})
export default router