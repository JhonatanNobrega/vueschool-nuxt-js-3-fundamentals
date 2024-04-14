<script setup>
const route = useRoute();
const myTeam = computed(()=>`O meu time é ${route.params.teamSlug}`)
</script>

<template>
  <h1>{{ myTeam }}</h1>
  <p>{{ $route.params.id }}</p>
</template>