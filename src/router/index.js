import Router from 'vue-router'
import Vue from 'vue'

// bundled
import Home from '@/pages/Home'

// lazy
const About = () => import ("@/pages/About")


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
	{
		path: '/',
		name: 'home',
		components: {
			default: Home
		}
	},
	{
		path: '/about',
		name: 'about',
		components: {
			default: About
		}
	}
]
})