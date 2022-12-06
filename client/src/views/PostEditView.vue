<template>
  <PostComponent :content="infomationPost.message" @post="createPost" />
</template>

<script setup>
import PostComponent from "@/components/Post/PostComponent.vue";

const infomationPost = reactive({
  id: 2,
  message: "TEST MEssage edit",
});

const createPost = () => {};
</script>

<style lang="scss" scoped></style>
