<script setup lang="ts">
import TodoList from './components/TodoList.vue'
</script>

<template>
  <div class="wrapper">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <TodoList />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
  }
}
</style>
