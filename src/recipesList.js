import { ref } from 'vue'

export const recipesList = ref([
  {
    id: 1,
    name: "Pasta carbonara",
    desc: "Uno de los clasicos italianos mas cremosos",
    ingred: [
      "200g de pasta",
      "100g de panceta",
      "2 huevos",
      "50g de queso parmesano",
      "Pimienta negra"
    ],
    img: "/img/carbonara.jpg"
  },
  {
    id: 2,
    name: "Chicken curry",
    desc: "Pollo especial con salsa cremosa",
    ingred: [
      "500g de pollo",
      "1 cebolla",
      "2 dientes de ajo",
      "200ml de leche de coco",
      "Curry en polvo",
      "Aceite",
      "Sal"
    ],
    img: "/img/chickenCurry.jpg"
  }
])