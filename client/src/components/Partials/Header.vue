<template>
  <div class="grid p-2.5 pr-4 border-b border-gray-300">
    <div class="col-start-1 row-start-1 justify-self-center">Counter</div>
    <div class="col-start-1 row-start-1 justify-self-end flex">
      <router-link to="/notification" type="button" class="relative mr-4">
        <Icon icon="carbon:notification" width="27" height="27" />

        <span
          class="notification-alert absolute bg-red-600 top-0 right-0 w-2 h-2 rounded-full"
        ></span>
      </router-link>

      <router-link v-if="currentRoute === 'call'" to="/new-call" type="button">
        <Icon icon="ph:phone-call-bold" width="27" height="27" />
      </router-link>
      <button v-else type="button" @click="toggleNewPost">
        <Icon icon="mdi:post-it-note-add" width="27" height="27" />
      </button>
    </div>

    <transition name="slide-up-full" appear>
      <PostComponent v-if="newPost" @close-post="toggleNewPost" />
    </transition>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import PostComponent from "@/components/Post/PostComponent.vue";

const currentRoute = computed(() => {
  return useRouter().currentRoute.value.name;
});

const newPost = ref();

const toggleNewPost = () => {
  newPost.value = !newPost.value;
};
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
