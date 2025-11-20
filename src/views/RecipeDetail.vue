<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const id = route.params.id
const recipe = ref(null)

const recipes = ref([
    {id: 1, name: "Pasta carbonara", desc: "Uno de los clasicos italianos mas cremosos",
     ingred:[
        "200g de pasta", "100g de panceta", "2 huevos", "50g de queso parmesano", "Pimienta negra"
    ],
      img: '/img/carbonara.jpg'},
    {id: 2, name: "Chicken curry", desc: "Pollo especial con salsa cremosa",
       ingred: 
       ["500g de pollo", "1 cebolla", "2 dientes de ajo", "200ml de leche de coco", "Curry en polvo", "Aceite", "Sal"],
        img: '/img/chickenCurry.jpg'}
])


const loadRecipe = (id) => {
recipe.value = recipes.value.find(r => r.id == id);
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