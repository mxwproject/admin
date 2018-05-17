import Vue from "vue";
import Router from "vue-router";
import Index from "@/view/index";
import Login from "@/view/login/login";
import Nosend from "@/view/nosend";
import Send from "@/view/send";
import Finish from "@/view/finish";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "首页",
            component: Index,
            children: [
                {
                    path: "/nosend",
                    name: "未发货订单",
                    component: Nosend
                },
                {
                    path: "/send",
                    name: "已发货订单",
                    component: Send
                },
                {
                    path: "/finish",
                    name: "已完成订单",
                    component: Finish
                }
            ]
        },
        {
            path : '/login',
            name : '登录页',
            component : Login
        }
    ]
});
