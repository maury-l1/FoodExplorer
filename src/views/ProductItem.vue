<script setup>
import { inject } from 'vue'

const props = defineProps({
    id: Number,
    name: String,
    price: Number,
})

const cart = inject('cart')

const addToCart = () => {
    cart.push({ ...props })
    console.log(cart)
}
</script>

<template>
    <div class="product-item">
        <span>{{ name }}</span>
        <span>{{ price }} €</span>
        <button @click="addToCart" class="add-button">Agregar</button>
    </div>

</template>