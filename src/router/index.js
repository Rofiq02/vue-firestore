import VueRouter from 'vue-router'
import BoardList from '@/components/BoardList'
import ShowBoard from '@/components/ShowBoard'
import AddBoard from '@/components/AddBoard'
import EditBoard from '@/components/EditBoard'
import NProgress from 'nprogress';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/nprogress/nprogress.css'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/show-board/:id',
      name: 'ShowBoard',
      component: ShowBoard
    },
    {
      path: '/add-board',
      name: 'AddBoard',
      component: AddBoard
    },
    {
      path: '/edit-board/:id',
      name: 'EditBoard',
      component: EditBoard
    }
  ]
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})


export default router;