<template>
  <div class="fixed top-0 left-0 w-full h-screen bg-white">
    <div class="flex justify-between p-2">
      <div>
        <button type="button" @click="backRoute">
          <Icon icon="mdi:close" width="24px" height="24px" />
        </button>
      </div>
      <div>
        <button
          type="button"
          class="rounded-full bg-[color:var(--color-primary)] p-1 text-white"
          @click="$emit('post')"
        >
          <Icon icon="mdi:success-bold" />
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-2 items-center mt-4">
      <div>
        <img :src="profile.avatar" alt="" class="w-36 h-36" />
      </div>
      <div class="flex flex-col self-start w-full p-4">
        <label for="name" class="label-input">Name</label>
        <input v-model="profile.name" type="text" class="form-input" />
        <label for="username" class="label-input">Username</label>
        <input v-model="profile.username" type="text" class="form-input" />

        <label for="bio" class="label-input">Bio</label>
        <input v-model="profile.bio" type="text" class="form-input" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const router = useRouter();

const backRoute = () => {
  router.go(-1);
};

const profile = reactive({
  created_at: Date.now(),
  message: "Hello, world again",
  avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
  name: "JON DOE",
  username: "jondoe",
  id: 5,
  totalPost: 500,
  totalCall: 10,
  bio: "my bio",
});
</script>

<style lang="scss" scoped>
.label-input {
  @apply text-xs font-medium mb-1;
}

.form-input {
  @apply mb-2 pb-1 w-full text-sm bg-transparent border-b border-gray-500 outline-none;
}
</style>
