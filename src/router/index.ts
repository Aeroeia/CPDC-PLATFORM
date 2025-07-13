import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import AboutView from '@/views/About/AboutView.vue'
import ExhibitionView from '@/views/Exhibition/ExhibitionView.vue'
import CollectionsView from '@/views/Collections/CollectionsView.vue'
import CollectionDetailView from '@/views/Collections/CollectionDetailView.vue'
import ViewerView from '@/views/Exhibition/ViewerView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/collections',
      name: 'collections',
      component: CollectionsView,
    },
    {
      path: '/collections/:id',
      name: 'collection-detail',
      component: CollectionDetailView,
    },
    {
      path: '/exhibition_hall',
      name: 'exhibition_hall',
      component: ExhibitionView,
    },
    {
      path: '/exhibition_hall/:id',
      component: ViewerView,
    },
  ],
})

export default router
