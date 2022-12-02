<template>
  <div
    class="bg-[color:var(--color-primary-lighter)] border-b border-t first:border-t-0 border-slate-300 mb-2"
  >
    <div class="flex items-center justify-between p-2 pb-0">
      <router-link :to="post.slug" class="flex cursor-pointer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          class="w-8 h-8 mr-2"
          alt="..."
        />

        <div class="message-title">
          <div class="message-title-name font-bold">{{ post.name }}</div>
          <div class="text-xs text-gray-600 message-title-date">12m</div>
        </div>
      </router-link>

      <div class="message-action self-start relative">
        <button type="button" class="btn-action" @click="showAction = true">
          <Icon icon="mdi:dots-vertical" class="pointer-events-none" />
        </button>
      </div>
    </div>
    <div class="break-words p-2 border-b border-gray-300">
      {{ post.message }}
    </div>
    <div class="my-1 flex gap-2 px-2">
      <button type="button" class="flex items-center gap-1">
        <Icon
          v-if="!post.liked"
          icon="icon-park-outline:like"
          class="pointer-events-none text-gray-500"
        />
        <Icon
          v-else
          icon="icon-park-solid:like"
          class="pointer-events-none text-red-500/90"
        />
        <span class="text-xs text-gray-500">{{ post.likeQuantity }} likes</span>
      </button>
      <button type="button" class="flex items-center gap-1">
        <Icon
          icon="uil:comment"
          class="pointer-events-none text-gray-500"
          :horizontal-flip="true"
        />
        <span class="text-xs text-gray-500"
          >{{ post.commentQuantity }} comments</span
        >
      </button>
    </div>

    <PostAction
      v-if="showAction"
      :id="post.id"
      @close-action="toggleAction"
      @delete="deletePost"
      @report="reportPost"
    />
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import PostAction from "./PostAction.vue";

defineProps(["post"]);

const showAction = ref(false);

const deletePost = (id) => {};

const reportPost = (id) => {};

const toggleAction = () => {
  showAction.value = !showAction.value;
};
</script>

<style lang="scss" scoped>
.message {
  &-title {
    &-name,
    &-date {
      line-height: 1.2;
    }
  }
}
</style>
