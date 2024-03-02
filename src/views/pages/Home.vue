<template>
  <div :class="mainStore.spooky ? 'bg-black text-white' : ''">
    <Landing></Landing>
    <Stats></Stats>
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