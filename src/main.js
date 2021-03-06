// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from '@/components/layout'
import VueRouter from 'vue-router'
import indexPage from './pages/index'

Vue.use(VueRouter)
let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: indexPage
		}
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
