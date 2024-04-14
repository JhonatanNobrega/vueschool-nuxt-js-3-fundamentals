<script lang="ts" setup>
  interface Movies {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  };
  interface Request {
    Response: string;
    Search: Movies[];
    totalResults: string;
  };

  const query = ref<string>("batman");
  const movies = ref<Movies[]>([]);
  function search(){
    $fetch<Request>(`https://www.omdbapi.com/?apikey=18c38304&s=${query.value}`)
      .then(r => {
        movies.value = r.Search;
      });
  }
  search();
</script>

<template>
  <form @submit.prevent="search">
    <input type="text" v-model="query"/>
    <button>Search</button>
  </form>
  <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
        <img :src="movie.Poster" :alt="movie.Title" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
