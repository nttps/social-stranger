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
