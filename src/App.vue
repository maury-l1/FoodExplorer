<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useRoute } from 'vue-router'

const route = useRoute()

// Función para determinar la ruta activa
const isActive = (path) => route.path === path
</script>

<template>

<nav class="header">
    <p class="logo">FoodExplorer</p>
    <div class="links">
      <RouterLink to="/" :class="{ active: isActive('/') }">Home</RouterLink>
      <RouterLink to="/Recipes" :class="{ active: isActive('/Recipes') }">Recipes</RouterLink>
      <RouterLink to="/Provide" :class="{ active: isActive('/Provide') }">Provide & Inject</RouterLink>
      
    </div>
  </nav>

<div>
  <RouterView></RouterView>
</div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;       /* Centrado vertical */
  justify-content: space-between; /* Logo a la izquierda, links a la derecha */
  padding: 16px 32px;
  background-color: #f8f8f8; /* Color de fondo suave */
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  font-family: 'Playfair Display', serif; /* Elegante */
}

.logo {
  font-family: 'Roboto Condensed';
  font-size: 1.5rem;
  font-weight: bold;
}

.links {
  display: flex;
  gap: 24px; /* Separación entre enlaces */
}

.links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.links a:hover {
  color: #d4af37; /* Color “gold” al pasar el mouse */
}

/* Enlace activo */
.links a.active {
  color: #d4af37; /* Mismo color que hover para resaltar la página */
}
</style>