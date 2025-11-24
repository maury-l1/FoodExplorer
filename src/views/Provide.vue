<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import { ref, provide } from 'vue';


    const items = ref([
        {
            id: 1,
            name: "Auriculares HyperX",
            price: "150 €"
        },
        {
            id: 2,
            name: "Teclado Logitech",
            price: "200 €"
        },
        {
            id: 3,
            name: "Ratón Logitech",
            price: "140 €"
        },
        {
            id: 4,
            name: "Monitor Samsung",
            price: "450 €"
        }
    ])

        provide('items', items)

</script>

<template>
    <h1>
        Tienda de accesorios
    </h1>
    <div>
        <RouterView></RouterView>
    </div>

</template>