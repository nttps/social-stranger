<template>
  <div class="grid grid-cols-4 justify-between py-2 border-t border-gray-300">
    <RouterLink to="/" class="flex justify-center items-center cursor-pointer">
      <Icon
        v-if="currentRoute === 'feed'"
        icon="mingcute:message-4-fill"
        color="#4262ff"
        width="24"
        height="24"
      />
      <Icon v-else icon="mingcute:message-4-line" width="24" height="24" />
    </RouterLink>
    <RouterLink
      to="/call-history"
      replace
      class="flex justify-center cursor-pointer"
      ><Icon
        v-if="currentRoute === 'call-history'"
        icon="mdi:phone"
        color="#4262ff"
        width="24"
        height="24" />
      <Icon v-else icon="mdi:phone-outline" width="24" height="24"
    /></RouterLink>
    <RouterLink to="/message" class="flex justify-center cursor-pointer">
      <Icon
        v-if="currentRoute === 'message'"
        icon="fluent:person-feedback-24-filled"
        color="#4262ff"
        width="24"
        height="24"
      />
      <Icon
        v-else
        icon="fluent:person-feedback-24-regular"
        width="24"
        height="24"
      />
    </RouterLink>
    <RouterLink to="/slug" class="flex justify-center cursor-pointer"
      ><img
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        class="w-5 h-5"
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
