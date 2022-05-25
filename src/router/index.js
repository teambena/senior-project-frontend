
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
let routes = [
	{
		name: 'main',
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			//Dashboard routes


//customer routes
			{ 
				path: '/customer/', 
				name: 'customerlist', 
				component: () => import('pages/customer/list.vue'), 
				props: true
			},
			{ 
				path: '/customer/(list|index)/:fieldName?/:fieldValue?', 
				name: 'customerlistfilter', 
				component: () => import('pages/customer/list.vue'), 
				props: true
			},
	
			{ 
				path: '/customer/view/:id', 
				name: 'customerview', 
				component: () => import('pages/customer/view.vue'), 
				props: true
			},
	
			{ 
				path: '/customer/add', 
				name: 'customeradd', 
				component: () => import('pages/customer/add.vue'), 
				props: true
			},
	
			{ 
				path: '/customer/edit/:id', 
				name: 'customeredit', 
				component: () => import('pages/customer/edit.vue'), 
				props: true
			},
		

//manager routes
			{ 
				path: '/manager/', 
				name: 'managerlist', 
				component: () => import('pages/manager/list.vue'), 
				props: true
			},
			{ 
				path: '/manager/(list|index)/:fieldName?/:fieldValue?', 
				name: 'managerlistfilter', 
				component: () => import('pages/manager/list.vue'), 
				props: true
			},
	
			{ 
				path: '/manager/view/:id', 
				name: 'managerview', 
				component: () => import('pages/manager/view.vue'), 
				props: true
			},
	
			{ 
				path: '/index/register', 
				name: 'manageruserregister', 
				component: () => import('pages/index/userregister.vue'), 
				props: true
			},
	
			{ 
				path: '/account/edit', 
				name: 'manageraccountedit', 
				component: () => import('pages/account/accountedit.vue'), 
				props: true
			},
	
			{ 
				path: '/account', 
				name: 'manageraccountview', 
				component: () => import('pages/account/accountview.vue'), 
				props: true
			},
	
			{ 
				path: '/manager/add', 
				name: 'manageradd', 
				component: () => import('pages/manager/add.vue'), 
				props: true
			},
	
			{ 
				path: '/manager/edit/:id', 
				name: 'manageredit', 
				component: () => import('pages/manager/edit.vue'), 
				props: true
			},
		

			
			
//Password reset routes
			{ 
				path: '/index/forgotpassword', 
				name: 'forgotpassword', 
				component: () => import('pages/index/forgotpassword.vue'), 
				props: true
			},
			{ 
				path: '/index/resetpassword', 
				name: 'resetpassword', 
				component: () => import('pages/index/resetpassword.vue'), 
				props: true
			},
			{ 
				path: '/index/resetpassword_completed', 
				name: 'resetpassword_completed', 
				component: () => import('pages/index/resetpassword_completed.vue'), 
				props: true
			},
	
			
			
			{ 
				path:  '/error/forbidden', 
				name: 'forbidden', 
				component: () => import('pages/errors/forbidden.vue'),
				props: true
			},
			{ 
				path: '/error/notfound', 
				name: 'notfound',
				component: () => import('pages/errors/pagenotfound.vue'),
				props: true
			}
		]
	},
];


/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default async function ({ store, ssrContext }) {
	let mainRoute = routes.find(x => x.name = "main");

	
	let loginToken = store.getters["auth/getLoginToken"];
	if(loginToken){
		try{
			await store.dispatch('auth/getUserData'); //get current user data from api on page load

			mainRoute.children.push({ 
				path: '/(home)?', 
				name: 'home', 
				component: () => import('pages/home/home.vue'),
				props: true
			});
		}
		catch(e){
			/*
			 * getting current user detail failed
			 * token must be invalid
			*/
			mainRoute.children.push({ 
				path: '/(index)?', 
				name: 'index', 
				component: () => import('pages/index/index.vue') ,
				props: true
			});
		}
	}
	else{
		/*
		 * user has not loggedIn
		 * show login page
		*/
		mainRoute.children.push({ path: '/(index|home)?', name: 'index', component: () => import('pages/index/index.vue') });
	}


	// Always leave this as last one
	if (process.env.MODE !== 'ssr') {
		mainRoute.children.push({path: '*', component: () => import('pages/errors/pagenotfound.vue')});
	}

	const Router = new VueRouter({
		scrollBehavior: () => ({ x: 0, y: 0 }),
		routes,
		// Leave these as they are and change in quasar.conf.js instead!
		// quasar.conf.js -> build -> vueRouterMode
		// quasar.conf.js -> build -> publicPath
		mode: process.env.VUE_ROUTER_MODE,
		base: process.env.VUE_ROUTER_BASE
	});
	return Router
}
