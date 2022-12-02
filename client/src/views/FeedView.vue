<script setup>
import FeedItem from "@/components/FeedItem.vue";

const feedItems = ref([
  {
    created_at: Date.now(),
    message: "Hello, world",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON DOE",
    slug: "jondoe",
    id: 1,
    liked: false,
    likeQuantity: 10,
    commentQuantity: 5,
  },
  {
    created_at: Date.now(),
    message: "Hello, world again",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON DOE",
    slug: "jondoe",
    id: 2,
    liked: false,
    likeQuantity: 30,
    commentQuantity: 6,
  },
  {
    created_at: Date.now(),
    message: "Hello, world again and again",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON",
    slug: "jondoe",
    id: 3,
    liked: true,
    likeQuantity: 160,
    commentQuantity: 1,
  },
  {
    created_at: Date.now(),
    message: "Hello, world again and again",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON",
    slug: "jondoe",
    id: 4,
    liked: true,
    likeQuantity: 120,
    commentQuantity: 0,
  },
]);
</script>

<template>
  <div class="overflow-y-auto h-full">
    <FeedItem v-for="(item, index) in feedItems" :key="index" :post="item" />
  </div>
</template>
