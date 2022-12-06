<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useAuthStore } from "../stores";
import { Icon } from "@iconify/vue";

const authStore = useAuthStore();

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});
</script>

<template>
  <div class="flex flex-col h-full items-center justify-center">
    <h2>Login</h2>
    <Form v-slot="{ errors, isSubmitting }" :validation-schema="schema">
      <div class="flex flex-col">
        <label class="font-medium">Username</label>
        <Field
          name="username"
          type="text"
          class="px-2 py-0.5 rounded border"
          :class="{
            'border-gray-400': !errors.username,
            'border-red-600 border-2': errors.username,
          }"
        />
        <div class="text-sm text-red-600 font-medium">
          {{ errors.username }}
        </div>
      </div>
      <div class="flex flex-col">
        <label class="font-medium">Password</label>
        <Field
          name="password"
          type="password"
          class="px-2 py-0.5 rounded border"
          :class="{
            'border-gray-400': !errors.username,
            'border-red-600 border-2': errors.password,
          }"
        />
        <div class="text-sm text-red-600 font-medium">
          {{ errors.password }}
        </div>
      </div>
      <div class="flex flex-col mt-5">
        <button class="btn btn-primary mb-2" :disabled="isSubmitting">
          <span
            v-show="isSubmitting"
            class="spinner-border spinner-border-sm mr-1"
          ></span>
          Login
        </button>

        <button
          class="bg-white hover:bg-gray-200 px-2 rounded-lg py-1.5 border border-gray-200 mb-2 flex items-center gap-2 font-medium"
          type="button"
          @click="authStore.signInWithGoogle"
        >
          <Icon icon="flat-color-icons:google" width="20px" /> Sign in with
          Google
        </button>
        <button
          class="bg-[#1877f2] hover:bg-[#0853b4] pl-2 pr-8 text-white rounded-lg py-1.5 border border-gray-200 mb-2 flex items-center gap-2 font-medium"
          type="button"
          @click="authStore.signInWithFacebook"
        >
          <Icon icon="bxl:facebook-circle" color="#fff" width="20px" /> Sign in
          with Facebook
        </button>
      </div>
      <div v-if="errors.apiError" class="text-red-600 font-medium mt-3 mb-0">
        {{ errors.apiError }}
      </div>
    </Form>
  </div>
</template>
