<template>
  <div class="flex flex-col overflow-y-auto h-full gap-y-2">
    <div
      v-for="message in props.items"
      :key="message.name"
      class="bg-[color:var(--color-primary-lighter)] border-b border-t first:border-t-0 border-slate-3 00 p-2"
    >
      <div class="flex items-center justify-between">
        <div class="flex cursor-pointer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            class="w-8 h-8 mr-2"
            alt="..."
          />

          <div>
            <Icon icon="name" />
          </div>

          <div class="message-title self-center">
            <div class="message-title-name font-bold">{{ message.name }}</div>
          </div>
        </div>

        <div class="message-action self-center flex">
          <button type="button" class="mr-4">
            <Icon
              icon="fluent:call-checkmark-24-filled"
              color="#00c58e"
              width="22px"
              height="22px"
            />
          </button>
          <button type="button">
            <Icon
              icon="fluent:call-dismiss-16-filled"
              color="#ff4700"
              width="22px"
              height="22px"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});
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
