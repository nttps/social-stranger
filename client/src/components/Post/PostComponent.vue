<template>
  <div class="fixed top-0 right-0 w-full h-screen bg-white p-2 z-10">
    <div class="flex justify-between">
      <div>
        <button type="button" @click="$emit('closePost')">
          <Icon icon="mdi:close" width="24px" height="24px" />
        </button>
      </div>
      <div>
        <button type="button" class="btn-primary" @click="$emit('post')">
          Post
        </button>
      </div>
    </div>
    <div class="py-4">
      <textarea
        ref="newMessage"
        :value="content"
        type="text"
        class="w-full min-h-[144px] resize-none rounded-md p-1 outline-none border border-gray-400 bg-slate-100"
        placeholder="Mesage"
        @change="resize"
        @input="$emit('update:content', $event.target.value)"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const newMessage = ref();

defineEmits("post", "closePost", "update:content");

defineProps(["content"]);

const resize = () => {
  newMessage.value.style.height = "18px";
  newMessage.value.style.height = newMessage.value.scrollHeight + "px";
};
</script>

<style lang="scss" scoped></style>
