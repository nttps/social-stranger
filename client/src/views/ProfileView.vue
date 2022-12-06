<template>
  <div class="overflow-y-hidden h-full">
    <div
      ref="profileContainer"
      class="flex gap-8 px-4 justify-between border-b border-zinc-300 py-4"
    >
      <div class="flex flex-col justify-center items-center gap-2">
        <img :src="profile.avatar" alt="" class="md:w-20 md:h-20 w-14 h-14" />

        <button class="btn-primary-small" @click="toggleEdit">
          Edit profile
        </button>
      </div>
      <div class="flex-1 flex flex-col">
        <div class="font-bold md:text-xl">@{{ profile.username }}</div>
        <div class="text-zinc-500 md:text-base text-sm mb-1">
          {{ profile.bio }}
        </div>
        <div class="flex gap-4 md:text-base text-sm">
          <div class="text-center">
            <span class="font-bold">{{ profile.totalPost }} </span>
            <span> Posts</span>
          </div>
          <div class="text-center">
            <span class="font-bold">{{ profile.totalCall }} </span>
            <span> Calls</span>
          </div>
        </div>
      </div>
      <div class="self-center">
        <button type="button" class="btn-primary">follow</button>
      </div>
    </div>
    <div ref="feedContainer" class="overflow-y-auto">
      <PostItem v-for="(item, index) in PostItems" :key="index" :post="item" />
    </div>
    <transition name="slide-up-full" appear>
      <EditProfile v-if="editProfile" @close-edit="toggleEdit" />
    </transition>
  </div>
</template>

<script setup>
import PostItem from "@/components/Post/PostItem.vue";
import EditProfile from "@/components/Profile/EditProfile.vue";

const profile = reactive({
  created_at: Date.now(),
  content: "Hello, world again",
  avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
  name: "NTTPS",
  username: "nttps",
  id: 5,
  totalPost: 500,
  totalCall: 10,
  bio: "my bio",
});

const profileContainer = ref();
const feedContainer = ref();

const editProfile = ref(false);
const toggleEdit = () => {
  editProfile.value = !editProfile.value;
};

onMounted(() => {
  const heightWindow = document.querySelector("html").offsetHeight;
  const heightProfileContainer = profileContainer.value.offsetHeight;
  const heightHeader = 49;
  const heightFooter = 49;

  const heightNonset = heightProfileContainer + heightHeader + heightFooter;
  const heightCut = heightWindow - heightNonset;

  feedContainer.value.style.height = heightCut + "px";
});
const PostItems = reactive([
  {
    created_at: Date.now(),
    content: "Hello, world",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "NTTPS",
    username: "nttps",
    id: 5,
    liked: false,
    likeQuantity: 10,
    commentQuantity: 5,
    comments: [],
  },
  {
    created_at: Date.now(),
    content: "Hello, world again",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "NTTPS",
    username: "nttps",
    id: 5,
    liked: true,
    likeQuantity: 1,
    commentQuantity: 1,
    comments: [],
  },
  {
    created_at: Date.now(),
    content: "Hello, world again and again",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    name: "NTTPS",
    username: "nttps",
    id: 5,
    liked: false,
    likeQuantity: 0,
    commentQuantity: 5,
    comments: [],
  },
]);
</script>

<style lang="scss" scoped></style>
