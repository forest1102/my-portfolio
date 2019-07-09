import Vue from 'vue'
import Router from 'vue-router'
import i18n from './i18n'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '',
  routes: [
    {
      path: '/',
      redirect: '/ja'
    },
    {
      path: '/:locale',
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.params.locale === 'ja' || to.params.locale === 'en') {
    i18n.locale = to.params.locale
    next()
  }
  else {

    next('/ja')
  }
})

export default router