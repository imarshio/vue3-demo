<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <HelloWorld msg="this is MessageChannel" />
  </header>

  <main>
    <TheWelcome />


    <Footer style="display: block;" />
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
