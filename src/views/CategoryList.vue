<script setup>
    import ProductItem from './ProductItem.vue';
    import { inject } from 'vue';
    const items = inject('items')

</script>

<template>

    
    
    <div>
       
       <ProductItem v-for="i in items" :key="i.id" :id="i.id" :name ="i.name" :price = "i.price" />
   
    </div>

    

</template>