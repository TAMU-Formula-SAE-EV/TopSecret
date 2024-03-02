import { createRouter, createWebHistory, Router } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/pages/Home.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("@/views/pages/About.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/pages/errors/ErrorNotFound.vue"),
    },
];

const buildRouter = (): Router => {
    const r = routes;

    return createRouter({
        scrollBehavior(to) {
            if (to.params.section) {
                return {
                    el: `#${to.params.section}`,
                    top: 75,
                    behavior: "smooth",
                };
            }
            return {
                top: 0,
                behavior: "smooth",
            };
        },
        history: createWebHistory(),
        routes: r,
    });
};

const router = buildRouter();

export default router;