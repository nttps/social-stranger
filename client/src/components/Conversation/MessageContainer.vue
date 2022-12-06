<template>
  <div
    class="bg-[color:var(--color-primary-lighter)] border-b border-t first:border-t-0 border-slate-3 00 p-2 mb-2 cursor-pointer"
    @click="$emit('openConversation')"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img :src="message.avatar" class="w-8 h-8 mr-4" alt="..." />

        <div class="message-title">
          <span class="message-title-name font-bold mr-2">{{
            message.name
          }}</span>
          <div class="text-sm text-gray-400 message-title-date">
            {{ message.last_message }}
          </div>
        </div>
      </div>

      <div class="message-action self-start relative">
        <button type="button" class="btn-action" @click="showAction = true">
          <Icon icon="mdi:dots-vertical" class="pointer-events-none" />
        </button>
      </div>
    </div>
    <MessageAction
      v-if="showAction"
      :id="message.id"
      @close-action="toggleAction"
      @delete="deleteMessage"
      @report="reportMessage"
    />
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import MessageAction from "./MessageAction.vue";

defineProps(["message"]);
defineEmits(["openConversation"]);

const showAction = ref(false);

const deleteMessage = (id) => {};

const reportMessage = (id) => {};

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
