<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black/20 z-10"
    @click="$emit('close-action')"
  >
    <transition name="slide-up" appear>
      <div
        class="actionContainer w-full fixed bottom-0 right-0 py-4 pl-4 pr-5 rounded-t-lg items-start border-gray-500 border gap-2 flex flex-col min-w-max bg-white"
      >
        <button type="button" class="flex" @click="$emit('edit')">
          <Icon
            icon="ic:outline-edit"
            width="25px"
            height="25px"
            class="mr-2 pointer-events-none"
          />
          <span>Edit</span>
        </button>
        <button
          type="button"
          class="flex text-red-600"
          @click="$emit('delete')"
        >
          <Icon
            icon="iconoir:trash"
            width="25px"
            height="25px"
            class="mr-2 pointer-events-none"
          />
          <span>Delete</span>
        </button>
        <button
          type="button"
          class="flex text-red-600"
          @click="$emit('report')"
        >
          <Icon
            icon="ic:outline-report-problem"
            width="25px"
            height="25px"
            class="mr-2 pointer-events-none"
          />
          <span>Report</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineEmits(["close-action", "delete", "report", "edit"]);
defineProps(["id"]);
</script>

<style lang="scss" scoped>
.fade {
  &-enter-active,
  &-leave-active {
    transition: 0.2s opacity ease-out;
  }

  &-enter-from {
    opacity: 0;
  }
}

.slide-up {
  &-enter-active,
  &-leave-active {
    transition: transform 0.1s ease-in-out, bottom 0.1s ease-in-out;
  }

  &-leave-to {
    transform: translateY(-50%);
    bottom: -50%;
  }

  &-enter-from {
    transform: translateY(-50%);
    bottom: -50%;
  }
}
</style>
