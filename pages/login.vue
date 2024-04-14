<script lang="ts" setup>
// const isLoggedIn = useInLoggedIn();
const user = useUser();

definePageMeta({
  layout: 'plain'
})
</script>

<template>
  <form @submit.prevent="user.login">
    <h1>Login</h1>
    <label>
      Name:
      <input type="text" />
    </label>
    <label>
      Password
      <input type="password" />
    </label>
    <button>Login</button>
  </form>
</template>

<style scoped></style>
