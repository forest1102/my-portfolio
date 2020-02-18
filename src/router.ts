import Vue from 'vue'
import Router from 'vue-router'
import i18n from './i18n'
// @ts-ignore

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
      path: '/:locale',
    }
  ],
  scrollBehavior: async (to, from, savedPosition): Promise<any> => {
    await waitForReadystate()

    let scrollTo: number | string = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }
    return scrollTo
  }
})
router.beforeEach((to, from, next) => {
  const lang = (navigator.language.split('-')[0] === 'ja') ? 'ja' : 'en'
  if (!to.params.locale) {
    next('/' + lang)
  }
  else if (to.params.locale === 'ja' || to.params.locale === 'en') {
    i18n.locale = to.params.locale
    next()
  }
  else {
    next('/en')
  }
})

export default router
