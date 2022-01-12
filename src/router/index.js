import { defineAsyncComponent } from "vue"
import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../views/NotFound.vue"
import Inbox from "../views/Inbox.vue"
const NewEmail = defineAsyncComponent(() => import("../views/NewEmail.vue"))
import AllEmail from "../views/AllEmail.vue"
import Register from "../views/Register.vue"
import Main from "../views/Main.vue"
import store from "../store/index.js"
// const routes =[

// ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {name : "Main" , path: "/main", redirect : "/all-email" , component : Main, meta: { requiresAuth: true }   , children : [
      {name : "NewEmail" , path:"/new-email" , component : NewEmail},
      {name : "Inbox", path: "/inbox" , component : Inbox , children : [
        {name : "AllEmail", path : "/all-email" , component : AllEmail},
        {name : "sd", path : "/d"}
      ]},
    ]},
    {name : "register" , path : "/register" , component : Register},
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass : "active-link"
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters["register/showToken"]) {
      next({
        path: '/register',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
