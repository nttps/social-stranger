import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores";
import nProgress from "nprogress";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

nProgress.configure({ showSpinner: false });

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/",
      name: "feed",
      component: () => import("@/views/FeedView.vue"),
    },
    {
      path: "/call",
      name: "call",
      component: () => import("@/views/CallView.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("@/views/MessageView.vue"),
    },
    {
      path: "/message/:username",
      name: "message-conversation",
      component: () => import("@/views/ConversationView.vue"),
    },
    {
      path: "/post/:id/edit",
      name: "edit-post",
      component: () => import("@/views/PostEditView.vue"),
    },
    {
      path: "/notification",
      name: "notification",
      component: () => import("@/views/NotificationView.vue"),
    },
    {
      path: "/:username",
      name: "profile",
      component: () => import("@/views/ProfileView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  nProgress.start();
  next();
});
router.afterEach(() => {
  nProgress.done();
});

router.beforeEach(async (to) => {
  // // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const notAuthRequired = publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    return "/login";
  }

  if (notAuthRequired && auth.user) {
    return "/";
  }
});
