var HomeComponent = { template: '<p>Home page</p>' }
var AboutComponent = { template: '<p>About page</p>' }

var routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

const app = Vue.createApp({})
app.use(router)

app.mount('#app')

