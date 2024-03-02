<template>
  <Header class="absolute top-0 left-0 w-full z-10" />
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>