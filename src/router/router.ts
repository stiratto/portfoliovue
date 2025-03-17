import { createWebHistory, createRouter } from 'vue-router'
import Index from '@/views/Index.vue'
import Projects from '@/views/Projects.vue'
import Blogs from '@/views/Blogs.vue'
import BlogComponent from '@/components/BlogComponent.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/home', redirect: '/' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/projects', component: Projects },
  { path: '/blogs', component: Blogs, name: 'blogs' },
  { path: '/blogs/:name', name: 'blog', component: BlogComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from) {
    return { top: 0, behavior: 'smooth' }
  },
})
export default router
