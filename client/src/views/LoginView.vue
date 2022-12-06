<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useAuthStore } from "../stores";

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
          class="px-2 py-0.5 rounded border-gray-400 border"
          :class="{ 'border-red-600 border-2': errors.username }"
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
          class="px-2 py-0.5 rounded border-gray-200 border-2"
          :class="{ 'border-red-600 border-2': errors.password }"
        />
        <div class="text-sm text-red-600 font-medium">
          {{ errors.password }}
        </div>
      </div>
      <div class="flex flex-col mt-5">
        <button class="btn btn-primary" :disabled="isSubmitting">
          <span
            v-show="isSubmitting"
            class="spinner-border spinner-border-sm mr-1"
          ></span>
          Login
        </button>

        <button
          class="btn btn-primary"
          type="button"
          @click="authStore.signInWithGoogle"
        >
          Sign in with Google
        </button>
      </div>
      <div v-if="errors.apiError" class="text-red-600 font-medium mt-3 mb-0">
        {{ errors.apiError }}
      </div>
    </Form>
  </div>
</template>
