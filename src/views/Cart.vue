<script setup>
import { inject } from 'vue';
const cart = inject('cart')

const emptycart = () => {
    cart.length = 0
    console.log(cart)
}

</script>

<template>
    <div class="cart-container">
    <h1>Cart</h1>
    <h3>Numero de items: {{ cart.length }} </h3>
    <ul>
        <li v-for="item in cart" :key="item.id">
            <p>{{ item.name }}</p> - <p>{{ item.price }} €</p>
        </li>
    </ul>
    <button @click="emptycart">Vaciar carrito</button>
    </div>

</template>