<template>
  <div class="grid p-2 pr-4 border-b border-gray-300">
    <div class="col-start-1 row-start-1 justify-self-center">Counter</div>
    <div class="col-start-1 row-start-1 justify-self-end flex">
      <router-link to="/notification" type="button" class="relative mr-4">
        <Icon icon="carbon:notification" width="24" height="24" />

        <span
          class="notification-alert absolute bg-red-600 top-0 right-0 w-2 h-2 rounded-full"
        ></span>
      </router-link>
      <router-link to="/new-post" type="button">
        <Icon icon="mdi:post-it-note-add" width="24" height="24" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
.fade-notification-enter-active,
.fade-notification-leave-active {
  transition: opacity 0.2s ease;
}

.fade-notification-enter-from,
.fade-notification-leave-to {
  opacity: 0;
}
</style>
