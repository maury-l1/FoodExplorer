<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
import { recipesList } from '@/recipesList';


</script>

<template>
    <h1>Recipes</h1>
    <ul>
        <li v-for="recipe of recipesList" :key="recipe.id">
            <h3>{{ recipe.name }}</h3>
            <p>{{ recipe.desc }}</p>
            <RouterLink :to="`/Recipes/${recipe.id}`">Ver receta</RouterLink>
        </li>
    </ul>
    <RouterView :key="$route.fullPath"></RouterView>

</template>

