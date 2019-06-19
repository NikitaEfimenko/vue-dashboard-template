import Router from 'vue-router'
import Vue from 'vue'

// bundled
import Home from '@/pages/Home'

// lazy
const About = () => import ("@/pages/About")
const Timeserias = () => import ("@/components/Timeserias")
const PostGraph = () => import ("@/components/PostGraph")
const Twits = () => import ("@/pages/Twits")

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
		path: '/twits',
		name: 'twits',
		components: {
			default: Twits,
			sidemenu: Timeserias
		}
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		components: {
			default: PostGraph,
			sidemenu: Timeserias
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