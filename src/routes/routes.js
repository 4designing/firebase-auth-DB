import Welcome from '../components/welcome/Welcome.vue'
import Signup from '../components/auth/Signup.vue'
import Signin from '../components/auth/Signin.vue'
import Dashboard from '../components/dashboard/Dashboard.vue'
import {store} from '../store/store.js'

export const routes=[
	{
		path:'',
		component: Welcome,
		name:'welcome',
		beforeEnter(to, from, next) {
			if(store.state.idToken)
				next('/dashboard');
			else next()
		}
		
	},
	{
		path:'/sign-up',
		component: Signup,
		name:'signup'
	},
	{
		path:'/sign-in',
		component: Signin,
		name:'signin',

	},
	{
		path:'/dashboard',
		component: Dashboard,
		name:'dashboard',
		
	},

]