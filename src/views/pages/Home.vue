<template>
  <div class="text-center" :class="mainStore.spooky ? 'bg-black text-white' : ''">
    <Landing></Landing>
    <Stats></Stats>

    <div class="border-t-2 w-1/2 mx-auto" :class="mainStore.spooky ? 'border-sky-500' : 'border-aggie-maroon'">
    </div>
    <h1 class="text-6xl font-semibold italic my-5">"Design for testing time and quality."</h1>

    <div class="w-2/3 mx-auto flex mt-24 mb-8">
      <div class="w-full">
        <img v-if="!mainStore.spooky" class="mt-10 rounded-2xl ring-4 ring-aggie-maroon ring-offset-8" src="@/assets/home/rsz_quote.jpeg" />
        <img v-else class="mt-10 rounded-2xl ring-4 ring-purple-500 ring-offset-8 ring-offset-black" src="@/assets/home/spooky-quote.png" />
      </div>
      <div class="z-10 w-1/2 -ml-32 rounded-xl">
        <p class="rounded-xl p-6  font-semibold" :class="mainStore.spooky ? 'bg-black' : 'bg-white'">Hi, we're Texas A&M Formula SAE Electric. We're engineering the future of racing –  high-performance electric vehicles designed, built, and raced by students. We tackle every aspect of race car development, from cutting-edge battery systems and powertrain design to advanced aerodynamics and lightning-fast data analysis. </p>
      </div>
    </div>

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