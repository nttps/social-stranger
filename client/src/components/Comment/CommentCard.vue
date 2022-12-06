<template>
  <div
    class="flex justify-between items-center py-2 px-4"
    :class="{ 'border-b border-gray-200': owner }"
  >
    <img :src="post.avatar" class="w-8 h-8 mr-2" alt="..." />
    <div class="flex-1 text-xs">
      <div class="message-title">
        <router-link :to="post.username" class="mb-2"
          ><span class="message-title-name font-bold mr-1">{{
            post.name
          }}</span>
          <span class="text-gray-600 message-title-date font-medium">12m</span>
        </router-link>

        <div class="break-words message-content pr-6 my-0.5">
          {{ post.content }}
        </div>

        <div class="flex items-center space-x-2 text-gray-500 font-medium">
          <span v-if="likeQuantity">{{ likeQuantity }} likes</span>

          <button type="button">reply</button>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="flex items-center space-x-1"
      @click="likeEvent"
    >
      <Icon
        v-if="!likeComment"
        icon="icon-park-outline:like"
        class="pointer-events-none text-gray-500"
        width="10px"
      />
      <Icon
        v-else
        icon="icon-park-solid:like"
        class="pointer-events-none text-red-500/90"
        width="10px"
      />
    </button>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineEmits(["like"]);
const props = defineProps({
  post: {
    type: Object,
  },
  owner: [Boolean, Number],
});
const likeComment = ref(props.post.liked);
const likeQuantity = ref(props.post.likeQuantity);

const likeEvent = () => {
  likeComment.value = !likeComment.value;

  likeComment.value ? (likeQuantity.value += 1) : (likeQuantity.value -= 1);
};
</script>

<style lang="scss" scoped>
.message-content {
  word-break: break-word;
}
</style>
