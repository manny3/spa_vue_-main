import CallbackPage from "@/pages/callback-page.vue";
import HomePage from "@/pages/home-page.vue";
import { authGuard } from "@auth0/auth0-vue";
import { createRouter, createWebHistory } from "vue-router";

const NotFoundPage = () => import("@/pages/not-found-page.vue");
const ProfilePage = () => import("@/pages/profile-page.vue");
const PublicPage = () => import("@/pages/public-page.vue");
const ProtectedPage = () => import("@/pages/protected-page.vue");
const AdminPage = () => import("@/pages/admin-page.vue");
const CallbackPagev2 = () => import("@/pages/callback.vue");
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
    beforeEnter: authGuard,
  },
  {
    path: "/public",
    name: "public",
    component: PublicPage,
  },
  {
    path: "/protected",
    name: "protected",
    component: ProtectedPage,
    beforeEnter: authGuard,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
    beforeEnter: authGuard,
  },
  {
    path: "/callback",
    name: "callback",
    component: CallbackPagev2,
  },
  {
    path: "/callbackv2",
    name: "callbackv2",
    component: CallbackPagev2,
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
