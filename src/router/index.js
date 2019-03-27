import Vue from 'vue'
import Router from 'vue-router'
//import home from '@/components/homePage/home'
import commonpage from '@/components/common/commonpage'
import viewPage from '@/components/viewPage/viewPage'
import linkPage from '@/components/linkPage/link'
import echartsIndex from '@/components/echarts/echartsIndex'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'commonpage'
      
    },
    {
      path: '/commonpage',
      name: 'commonpage',
      component: commonpage
    },
    {
      path: '/viewPage',
      name: 'viewPage',
      component: viewPage,
      children:[
        {
          path: '/linkPage',
          name: 'linkPage',
          component: linkPage,
          children:[
            {
              path: '/echartsIndex',
              name: 'echartsIndex',
              component: echartsIndex,
            }
          ]

        }
      ]
    },
   
]
})
