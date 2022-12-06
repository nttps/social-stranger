<template>
  <div
    class="fixed top-0 right-0 w-full h-screen bg-white flex flex-col justify-between z-10"
  >
    <div class="flex items-center space-x-2 p-2 border-b-gray-200 border-b">
      <button type="button" @click="$emit('closeComment')">
        <Icon
          icon="material-symbols:arrow-right-alt"
          width="30px"
          height="30px"
          flip="horizontal"
        />
      </button>
      <div class="font-bold">Comments</div>
    </div>
    <div class="flex flex-col flex-auto">
      <CommentCard :post="commentConversation" owner />
      <CommentCard
        v-for="comment in comments"
        :key="comment.id"
        :post="comment"
      />
    </div>
    <form
      class="px-4 py-2 flex justify-between text-sm"
      @submit.prevent="sendMessage"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        class="w-8 h-8 mr-2"
      />
      <input
        v-model="content"
        type="text"
        class="flex-1 outline-none"
        placeholder="Add a comment..."
      />
      <button
        type="submit"
        :disabled="!content"
        :class="{
          'text-gray-300': !content,
          'text-[color:var(--color-primary)]': content,
        }"
      >
        Post
      </button>
    </form>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import CommentCard from "./CommentCard.vue";
import { useAuthStore } from "@/stores";
defineEmits(["closeComment"]);

const commentConversation = inject("commentConversation");

const comments = reactive(commentConversation?.comments);

const content = ref(null);

const auth = useAuthStore();

const sendMessage = () => {
  const newComment = {
    created_at: Date.now(),
    content: content.value.trim(),
    id: auth.user.id,
    avatar: auth.user.avatar,
    username: auth.user.username || "Anonymous",
    name: auth.user.name || "Anonymous",
    liked: false,
    likeQuantity: 0,
  };

  comments.push(newComment);

  content.value = "";
};
</script>

<style lang="scss" scoped>
.label-input {
  @apply text-xs font-medium mb-1;
}

.form-input {
  @apply mb-2 pb-1 w-full text-sm bg-transparent border-b border-gray-500 outline-none;
}
</style>
