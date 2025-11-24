<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, provide, reactive } from 'vue';
import CategoryList from '@/views/CategoryList.vue'
import Cart from './Cart.vue';


const items = ref([
    {
        id: 1,
        name: "Auriculares HyperX",
        price: 150
    },
    {
        id: 2,
        name: "Teclado Logitech",
        price: 200
    },
    {
        id: 3,
        name: "Ratón Logitech",
        price: 140
    },
    {
        id: 4,
        name: "Monitor Samsung",
        price: 450
    }
])

const cart = reactive([])


provide('items', items);
provide('cart', cart);

</script>

<template>
    <h1>
        Tienda de accesorios
    </h1>
    <div>
        <CategoryList />
        <Cart />
    </div>

</template>