<template>
  <div
    class="fixed top-0 px-4 pt-2 left-0 w-full h-screen bg-white flex flex-col"
  >
    <div class="flex items-center">
      <button type="button" class="mr-4" @click="backRoute">
        <Icon
          icon="material-symbols:arrow-right-alt"
          width="30px"
          height="30px"
          flip="horizontal"
        />
      </button>
      <span class="font-bold">แจ้งเตือน</span>
    </div>

    <div class="notification-alert-container overflow-y-auto flex-grow">
      <div class="flex flex-col">
        <div
          v-for="i in 10"
          :key="i"
          class="border-b border-zinc-300 p-1 last:border-none text-left flex py-2 items-center text-sm"
        >
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="..."
              class="w-9 h-9 mr-4"
            />
          </div>
          <div>
            <span class="font-medium">Name </span>
            <span>แจ้งเตือน </span>
            <span class="text-gray-500">7w</span>
          </div>
        </div>
      </div>
    </div>

    <div class="p-1 border-t border-zinc-300">view all notifications</div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const router = useRouter();

const backRoute = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped></style>
