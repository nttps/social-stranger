<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <main class="h-full overflow-hidden">
    <router-view v-slot="{ Component }">
      <transition name="fade-page">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <Footer />
</template>

<style scoped></style>
