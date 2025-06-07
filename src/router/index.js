import { createRouter, createWebHashHistory } from "vue-router";

// const User = () => import("../views/User.vue");
const Login = () => import("../view/Login.vue");

// 路由嵌套
// 创建一个路由对象，并且包含子路由
const listRoutes = {
}

// 定义路由映射
const routes = [
    listRoutes,
    {
        path: "/login", // 根路径
        // name: "login", // 路由名称
        component: Login, // 组件
    }
];


// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(), // 使用哈希模式
    routes // 路由映射
});

// 定义一个全局守卫，去判断请求链接有没有token字段
// router.beforeEach(
//     (to, from, next) => {
//         console.log("to", to);
//         console.log("from", from);
//         console.log("next", next);
//         // 如果id不是123，直接跳转到根
//         if (to.query.token !== '123' && to.path == "/list") {
//            next('/');
//            return false; 
//         } else {
//             next(); 
//         }

//         // next(); // 放行
//     }
// )

// 导出路由实例
export default router;