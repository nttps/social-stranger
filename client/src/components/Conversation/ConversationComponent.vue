<template>
  <div
    class="fixed top-0 right-0 w-full h-screen bg-white flex flex-col justify-between z-10"
  >
    <div class="flex items-center space-x-2 p-2 border-b-gray-200 border-b">
      <button type="button" @click="$emit('closeConversation')">
        <Icon
          icon="material-symbols:arrow-right-alt"
          width="30px"
          height="30px"
          flip="horizontal"
        />
      </button>
      <router-link
        :to="conversationUser.username"
        class="flex items-center cursor-pointer"
      >
        <img :src="conversationUser.avatar" class="w-8 h-8 mr-2" alt="..." />

        <div class="message-title">
          <div class="message-title-name font-bold">
            {{ conversationUser.name }}
          </div>
        </div>
      </router-link>
    </div>

    <div class="flex-1 py-2 h-full overflow-y-auto px-5 bg-slate-200">
      <message-card
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
        :owner="message.owner"
      />
      <message-card
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
        :owner="message.owner"
      />
      <message-card
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
        :owner="message.owner"
      />
      <message-card
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
        :owner="message.owner"
      />
      <message-card
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
        :owner="message.owner"
      />
    </div>
    <div
      class="px-4 py-2 flex justify-between text-sm border-t border-t-gray-400"
    >
      <input
        type="text"
        class="flex-1 outline-none"
        placeholder="Add a message..."
      />
      <button type="button" class="text-[color:var(--color-primary)]">
        Send
      </button>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import MessageCard from "./MessageCard.vue";

defineEmits(["closeConversation"]);

const conversationUser = reactive({
  avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
  name: "NTTPS",
  username: "nttps",
});

const messages = ref([
  {
    created_at: Date.now(),
    last_message: "Hello, world",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON DOE",
    slug: "jondoe",
    id: 1,
    owner: true,
  },
  {
    created_at: Date.now(),
    last_message: "Hello, world again",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON DOE",
    slug: "jondoe",
    id: 2,
    owner: false,
  },
  {
    created_at: Date.now(),
    last_message: "Hello, world again and again",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON",
    slug: "jondoe",
    id: 3,
    owner: true,
  },
  {
    created_at: Date.now(),
    last_message: "Hello, world again and again",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "JON",
    slug: "jondoe",
    id: 4,
    owner: false,
  },
]);
</script>

<style lang="scss" scoped>
</style>
