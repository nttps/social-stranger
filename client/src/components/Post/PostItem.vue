<template>
  <div
    class="bg-[color:var(--color-primary-lighter)] border-b border-t first:border-t-0 border-slate-300 mb-2"
  >
    <div class="flex items-center justify-between p-2 pb-0">
      <router-link :to="post.username" class="flex cursor-pointer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          class="w-8 h-8 mr-2"
          alt="..."
        />

        <div class="message-title">
          <div class="message-title-name font-bold">{{ post.name }}</div>
          <div class="text-xs text-gray-600 message-title-date">12m</div>
        </div>
      </router-link>

      <div class="message-action self-start relative">
        <button type="button" class="btn-action" @click="showAction = true">
          <Icon icon="mdi:dots-vertical" class="pointer-events-none" />
        </button>
      </div>
    </div>
    <div class="break-words p-2 border-b border-gray-300">
      {{ post.content }}
    </div>
    <div class="my-1 flex gap-2 px-2">
      <button type="button" class="flex items-center gap-1" @click="likeEvent">
        <Icon
          v-if="!likePost"
          icon="icon-park-outline:like"
          class="pointer-events-none text-gray-500"
        />
        <Icon
          v-else
          icon="icon-park-solid:like"
          class="pointer-events-none text-red-500/90"
        />
        <span class="text-xs text-gray-500">{{ likeQuantity }} likes</span>
      </button>
      <button
        type="button"
        class="flex items-center gap-1"
        @click="openComment"
      >
        <Icon
          icon="uil:comment"
          class="pointer-events-none text-gray-500"
          :horizontal-flip="true"
        />
        <span class="text-xs text-gray-500"
          >{{ post?.comments ? post.comments.length : 0 }} comments</span
        >
      </button>
    </div>

    <PostAction
      v-if="showAction"
      :id="post.id"
      @close-action="toggleAction"
      @delete="deletePost"
      @report="reportPost"
      @edit="toggleEditPost"
    />

    <transition-group name="slide-up-full" appear>
      <CommentConversation v-if="showComment" @close-comment="openComment" />
      <PostComponent
        v-if="showEditPost"
        v-model:content="content"
        @post="editPost"
        @close-post="toggleEditPost"
      />
    </transition-group>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import PostAction from "./PostAction.vue";
import PostComponent from "./PostComponent.vue";
import CommentConversation from "@/components/Comment/CommentConversation.vue";

const router = useRouter();
const props = defineProps({
  post: Object,
});

const post = reactive(props.post);

const content = ref(post.content);

provide("commentConversation", props.post);

const showComment = ref(false);
const openComment = () => {
  showComment.value = !showComment.value;
};

const showEditPost = ref();

const toggleEditPost = () => {
  showEditPost.value = !showEditPost.value;
};

const editPost = () => {

  console.log(content);
  router.go(0);
};

const showAction = ref(false);

const deletePost = (id) => {};

const reportPost = (id) => {};

const toggleAction = () => {
  showAction.value = !showAction.value;
};

const likePost = ref(props.post.liked);
const likeQuantity = ref(props.post.likeQuantity);

const likeEvent = () => {
  likePost.value = !likePost.value;

  likePost.value ? (likeQuantity.value += 1) : (likeQuantity.value -= 1);
};
</script>

<style lang="scss" scoped>
.message {
  &-title {
    &-name,
    &-date {
      line-height: 1.2;
    }
  }
}
</style>
