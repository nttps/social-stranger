<template>
  <div
    class="w-max border-b border-t first:border-t-0 border-slate-300 py-2 px-3 mb-2"
    :class="{ 'ml-auto bg-white': owner, 'bg-slate-500 text-white': !owner }"
  >
    <div class="flex items-center">
      <div class="message-title">
        <span class="message-title-name font-bold mr-2">{{
          message.name
        }}</span>
        <div
          class="text-sm message-title-date"
          :class="{ 'text-gray-400': owner }"
        >
          {{ message.last_message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
  },
  owner: {
    type: Boolean,
  },
});
defineEmits(["openConversation"]);
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
