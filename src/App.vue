<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/boule.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/groups">Gruppen</RouterLink>
        <RouterLink to="/tournaments">Gruppenphase</RouterLink>
        <RouterLink to="/results">Ergebnisse</RouterLink>
        <RouterLink to="/bracket">K.O. Phase</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="centered"/>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.centered {
  margin: 0 auto;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    justify-content: center;
  }

  .logo {
    margin: 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
