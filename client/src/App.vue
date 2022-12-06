<script setup>
import Header from "./components/Partials/Header.vue";
import Footer from "./components/Partials/Footer.vue";

import { useAuthStore } from "./stores";

const authStore = useAuthStore();

</script>

<template>
  <Header v-if="authStore.user" />
  <main class="h-full overflow-hidden">
    <router-view v-slot="{ Component }">
      <transition name="fade-page">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <Footer v-if="authStore.user" />
</template>

<style scoped></style>
