import { createRouter, createWebHashHistory } from 'vue-router'
import Charts from '../pages/Charts.Vue'
import HomeView from '../pages/HomeView.vue'
import ContactIndex from '../pages/contactIndex.vue'
import ContactDetails from '../cmps/ContactDetails.vue'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/contact/:id',
        name: 'details',
        component: ContactDetails,
      },
      {
        path: '/contact',
        name: 'contacts',
        component: ContactIndex,
      },
      {
        path: '/charts',
        name: 'charts',
        component: Charts,
      },
     
    ],
  }
  
  const router = createRouter(routerOptions)

  export default router