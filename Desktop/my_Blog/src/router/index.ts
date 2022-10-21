import {createRouter, createWebHashHistory, RouteRecordRaw,}from "vue-router"

const routes:Array<RouteRecordRaw> = [{
    path:'/',
    component:()=>{
        
    }
},{
    path:'/register',
    component:()=>{
        
    }
}]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router