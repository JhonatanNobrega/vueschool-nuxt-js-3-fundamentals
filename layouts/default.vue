<script setup>
const user = useUser();
</script>
<template>
  <nav style="display: flex; gap: 1rem; ">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://google.com">Google</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" :to="{name: 'login'}">Login</NuxtLink>
    <a href="#" v-else @click.prevent="user.isLoggedIn = false">Logout</a>
  </nav>
  <slot />
</template>
