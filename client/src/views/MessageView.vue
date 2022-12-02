<template>
  <message-container
    v-for="(message, index) in messages"
    :key="index"
    :message="message"
  />
</template>

<script setup>
import MessageContainer from "@/components/MessageContainer.vue";

const messages = ref([
  {
    created_at: Date.now(),
    last_message: "Hello, world",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON DOE",
    slug: "jondoe",
    id: 1,
  },
  {
    created_at: Date.now(),
    last_message: "Hello, world again",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON DOE",
    slug: "jondoe",
    id: 2,
  },
  {
    created_at: Date.now(),
    last_message: "Hello, world again and again",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON",
    slug: "jondoe",
    id: 3,
  },
  {
    created_at: Date.now(),
    last_message: "Hello, world again and again",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON",
    slug: "jondoe",
    id: 4,
  },
]);
</script>

<style lang="scss" scoped></style>
