<template>
  <div
    class="fixed bottom-0 w-full grid grid-cols-4 justify-between py-2.5 border-t border-gray-300 bg-white"
  >
    <RouterLink to="/" class="flex justify-center items-center cursor-pointer">
      <Icon
        v-if="currentRoute === 'feed'"
        icon="mingcute:message-4-fill"
        color="#4242ff"
        width="27"
        height="27"
      />
      <Icon v-else icon="mingcute:message-4-line" width="27" height="27" />
    </RouterLink>
    <RouterLink to="/call" replace class="flex justify-center cursor-pointer"
      ><Icon
        v-if="currentRoute === 'call'"
        icon="mdi:phone"
        color="#4242ff"
        width="27"
        height="27" />
      <Icon v-else icon="mdi:phone-outline" width="27" height="27"
    /></RouterLink>
    <RouterLink to="/message" class="flex justify-center cursor-pointer">
      <Icon
        v-if="currentRoute === 'message'"
        icon="fluent:person-feedback-24-filled"
        color="#4242ff"
        width="28"
        height="28"
      />
      <Icon
        v-else
        icon="fluent:person-feedback-24-regular"
        width="28"
        height="28"
      />
    </RouterLink>
    <RouterLink to="/slug" class="flex justify-center cursor-pointer"
      ><img
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        class="w-7 h-7"
    /></RouterLink>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";


const currentRoute = computed(() => {
  return useRouter().currentRoute.value.name;
});

</script>

<style lang="scss" scoped></style>
