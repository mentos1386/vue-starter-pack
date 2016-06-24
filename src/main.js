import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Config from '../config/config'

import { configRouter } from './routes.js'

// Bootstrap 4
require('bootstrap')

// install vue-resource
Vue.use(VueResource)
Vue.http.options.root = Config.API_ROOT

// install router
Vue.use(VueRouter)

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

// configure router
configRouter(router)

// bootstrap the app
router.start(require('./App.vue'), 'app')
