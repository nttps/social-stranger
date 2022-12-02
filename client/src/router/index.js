import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/RegisterView.vue"),
    },
    {
      path: "/",
      name: "feed",
      component: () => import("@/views/FeedView.vue"),
    },
    {
      path: "/call-history",
      name: "call-history",
      component: () => import("@/views/HistoryCallView.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("@/views/MessageView.vue"),
    },
    {
      path: "/new-post",
      name: "new-post",
      component: () => import("@/views/PostNewView.vue"),
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
      path: "/:slug/edit",
      name: "edit-profile",
      component: () => import("@/views/ProfileEditView.vue"),
    },
    {
      path: "/:slug",
      name: "profile",
      component: () => import("@/views/ProfileView.vue"),
    },
  ],
});

export default router;
