<script setup>
const route = useRoute();
const {data, error} = await useFetch(
  `https://www.omdbapi.com/?apikey=18c38304&i=${route.params.id}`,
  {
    key: `/movies/${route.params.id}`,
    pick: ['Title', 'Plot', 'Poster', 'Error'],
  }
);

if(data.value.Error === 'Incorrect IMDb ID.'){
  showError({statusCode: 404, message: 'Pagina não encontrada!'});
}

useHead({
  title: data.value.Title,
  meta: [
    {name: 'description', content: data.value.Plot},
    {property: 'og:description', content: data.value.Plot},
    {property: 'og:image', content: data.value.Poster},
    {name: 'twitter:card', content: `summary_large_image`},
  ]
});

</script>

<template>
  <h1>Movies id {{ $route.params.id }}</h1>
  <pre>
    {{ data }}
  </pre>
</template>