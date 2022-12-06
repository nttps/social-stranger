<script setup>
import HistoryCall from "@/components/HistoryCall.vue";

const HistoryCallItems = reactive([
  {
    created_at: Date.now(),
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "Stranger",
  },
  {
    created_at: Date.now(),
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "Stranger",
  },
  {
    created_at: Date.now(),
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON",
  },
  {
    created_at: Date.now(),
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON",
  },
]);
</script>
<template>
  <HistoryCall :items="HistoryCallItems" />
</template>
<style lang="scss" scoped></style>
