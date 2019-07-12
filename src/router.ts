import Vue from 'vue'
import Router from 'vue-router'
import i18n from './i18n'
// @ts-ignore
import goTo from 'vuetify/es5/components/Vuetify/goTo'

Vue.use(Router)
async function waitForReadystate() {
  if (
    typeof document !== 'undefined' &&
    document.readyState !== 'complete'
  ) {
    await new Promise(resolve => {
      const cb = () => {
        window.requestAnimationFrame(resolve)
        window.removeEventListener('load', cb)
      }
      window.addEventListener('load', cb)
    })
  }
}
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
  ],
  scrollBehavior: async (to, from, savedPosition): Promise<any> => {
    await waitForReadystate()

    let scrollTo: number | string = 0
    const options = {}

    if (to.hash) {
      if (to.hash === '#none') {
        return
      }
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return new Promise(resolve => {
      setTimeout(() => {
        try {
          goTo(scrollTo, options)
        } catch (err) {
          console.log(err)
        }

        resolve()
      }, 100)
    })
  }
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
