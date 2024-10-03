import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'root',
		component: () => import(/* webpackChunkName: "home" */ '@/AppLayout.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				redirect: "dashboard"
			},
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: () =>
					import(/* webpackChunkName: "home" */ '@/views/home/HomeView.vue'),
			},
			{
				path: 'about',
				name: 'About',
				component: () =>
					import(/* webpackChunkName: "home" */ '@/views/about/AboutView.vue'),
			},
			{
				path: 'todo',
				name: 'Todo',
				component: () =>
					import(/* webpackChunkName: "home" */ "@/views/todo/TodoListView.vue")
			},
			{
				path: 'calender',
				name: 'Calender',
				component: () =>
					import(/* webpackChunkName: "home" */ '@/views/calender/CalenderView.vue'),
			},
			{
				path: 'reports',
				name: 'Reports',
				component: () =>
					import(/* webpackChunkName: "home" */ '@/views/reports/ReportsView.vue'),
			},
			{
				path: 'setting',
				name: 'Setting',
				component: () =>
					import(/* webpackChunkName: "home" */ '@/views/setting/SettingView.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
