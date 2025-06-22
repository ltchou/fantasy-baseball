<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <p>This is the about page of our Nuxt 3 application.</p>
    <p>Here you can find more information about our project and team.</p>
  </div>
</template>
<script lang="ts" setup>
const pageTitle = ref<string>('About Us - Nuxt 3 Application')
</script>
