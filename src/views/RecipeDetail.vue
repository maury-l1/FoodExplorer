<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { recipesList } from '@/recipesList';


const route = useRoute();
const id = route.params.id
const recipe = ref(null)



const loadRecipe = (id) => {
recipe.value = recipesList.value.find(r => r.id == id);
}

loadRecipe(id)

</script>

<template>
    <h1>{{ recipe.name }}</h1>
    <p>{{ recipe.desc }}</p>
    <ul>
     <li v-for="r in recipe.ingred" >
        <p>{{ r }}</p>
        </li>
    </ul>
    <img :src="recipe.img" :alt="recipe.name">
</template>   ingred: ["500g de pollo", "1 cebolla", "2 dientes de ajo", "200ml de leche de coco", "Curry en polvo", "Aceite", "Sal"],