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
  import MeetTeam from "@components/home/MeetTeam.vue";
  import Sponsors from "@components/home/Sponsors.vue";
  import About from '@/components/home/About.vue';

  import { useMainStore } from "@/store";
  const mainStore = useMainStore();
</script>

<style scoped>

</style>