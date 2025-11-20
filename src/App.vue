<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>

<nav id="">
  <p>FoodExplorer</p>
  <RouterLink to="/">Home</RouterLink>    
  <RouterLink to="/Recipes">Recipes</RouterLink>          
</nav>

<div>
  <RouterView></RouterView>
</div>
</template>

<style scoped></style>
