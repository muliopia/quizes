import {createRouter,createWebHistory} from "vue-router"
import quizesview from "../views/quizesview.vue"
import quizview from "../views/quizview.vue"

const router =createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
routes:[{
    path:"/",
     name: 'quizes',
     component:quizesview
    },
    {
        path:"/quiz/:id",
         name: 'quiz',
         component:quizview
        }
]
})
export default router