<template>
  <div class="fixed top-0 right-0 w-full h-screen bg-white z-10">
    <div class="flex justify-between p-2">
      <div>
        <button type="button" @click="$emit('closeEdit')">
          <Icon icon="mdi:close" width="28px" height="28px" />
        </button>
      </div>
      <div>
        <button
          type="button"
          class="rounded-full bg-[color:var(--color-primary)] p-1 text-white"
          @click="$emit('post')"
        >
          <Icon icon="mdi:success-bold" width="24px" height="24px" />
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-2 items-center mt-4">
      <div>
        <img :src="user.avatar" alt="" class="w-36 h-36" />
      </div>
      <div class="flex flex-col self-start w-full p-4">
        <label for="name" class="label-input">Name</label>
        <input v-model="user.name" type="text" class="form-input" />
        <label for="username" class="label-input">Username</label>
        <input v-model="user.username" type="text" class="form-input" />

        <label for="bio" class="label-input">Bio</label>
        <input v-model="user.bio" type="text" class="form-input" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useAuthStore } from "../../stores";

defineEmits(["post", "closeEdit"]);

const auth = useAuthStore()
const user = ref(JSON.parse(auth.user));

console.log(user);
</script>

<style lang="scss" scoped>
.label-input {
  @apply text-xs font-medium mb-1;
}

.form-input {
  @apply mb-2 pb-1 w-full text-sm bg-transparent border-b border-gray-500 outline-none;
}
</style>
