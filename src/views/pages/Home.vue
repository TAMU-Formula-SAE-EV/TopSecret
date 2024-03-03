<template>
  <div class="text-center" :class="mainStore.spooky ? 'bg-black text-white' : ''">
    <Landing></Landing>
    <Stats></Stats>

    <h1 class="text-6xl font-semibold italic my-5">"Design for testing time and quality."</h1>
    <Sponsors></Sponsors>
  </div>
</template>

<script setup lang="ts">
  import Landing from '@/components/home/Landing.vue';
  import Stats from "@components/home/Stats.vue";
  import Sponsors from "@components/home/Sponsors.vue";

  import { useMainStore } from "@/store";
  const mainStore = useMainStore();
</script>

<style scoped>

</style>