<template>
  <div class="fixed top-0 left-0 w-full h-screen bg-white p-2">
    <div class="flex justify-between">
      <div>
        <button type="button" @click="backRoute">
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
        v-model="message"
        type="text"
        class="w-full min-h-[144px] resize-none rounded-md p-1 outline-none border border-gray-400 bg-slate-100"
        placeholder="Mesage"
        @input="resize"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const router = useRouter();
const newMessage = ref();

// eslint-disable-next-line vue/require-prop-types
const props = defineProps(["message"]);

defineEmits("post");

const message = ref(props.message);

const resize = () => {
  newMessage.value.style.height = "18px";
  newMessage.value.style.height = newMessage.value.scrollHeight + "px";
};

const backRoute = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped></style>
