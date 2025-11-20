<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const id = 2


const recipes = ref([
    {id: 1, name: "Pasta carbonara", desc: "Uno de los clasicos italianos mas cremosos", img: ""},
    {id: 2, name: "Chicken curry", desc: "Pollo especial con salsa cremosa", img: ""}
])


</script>

<template>
    <h1>Recipes</h1>
    <ul>
        <li v-for="recipe in recipes" :key="recipe.id">
            <h3>{{ recipe.name }}</h3>
            <RouterLink :to="`/Recipes/${recipe.id}`">Ver receta</RouterLink>
        </li>
    </ul>
    <RouterView :key="$route.fullPath"></RouterView>

</template>

