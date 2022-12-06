<script setup>
import PostItem from "@/components/Post/PostItem.vue";

const PostItems = ref([
  {
    created_at: Date.now(),
    content: "Hello, world",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON DOE",
    username: "jondoe",
    id: 1,
    liked: false,
    likeQuantity: 10,
    commentQuantity: 5,
    edited: false,
    comments: [
      {
        created_at: Date.now(),
        content: "reply Hello, world",
        avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
        name: "JON DOE",
        username: "jondoe",
        id: 30,
        liked: false,
        likeQuantity: 10,
      },
    ],
  },
]);
</script>

<template>
  <div class="overflow-y-auto h-full">
    <PostItem v-for="(item, index) in PostItems" :key="index" :post="item" />
  </div>
</template>

<style lang="scss" scoped></style>
