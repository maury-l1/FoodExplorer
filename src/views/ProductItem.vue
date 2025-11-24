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
    <li>
        <p>{{ props.name }}</p>
        <p>{{ props.price }}</p>
        <button @click="addToCart" >Add to cart</button>
    </li>

</template>