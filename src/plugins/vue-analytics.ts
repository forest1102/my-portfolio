import Vue from 'vue'
// @ts-ignore
import VueAnalytics from 'vue-analytics'
import router from '@/router'

Vue.use(VueAnalytics, {
  id: 'UA-115646300-1',
  router
})
