import { createRouter, createWebHistory } from "vue-router";
import UserList from "../views/UserList.vue";
import UserDetail from "../views/UserDetail.vue";

const routes = [
    { path: "/", redirect: "/users" },
    { path: "/users", name: "UserList", component: UserList },
    { path: "/users/:id", name: "UserDetail", component: UserDetail, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
