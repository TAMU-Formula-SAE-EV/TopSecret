<template>
  <Header class="absolute top-0 left-0 w-full bg-white z-10" />
  <router-view></router-view>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>