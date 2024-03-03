<template>
  <div class="flex justify-between w-full px-24 my-5 bg-transparent">
    <div class="flex">
      <img @click="mainStore.spooky = !mainStore.spooky" src="@/assets/logo.png" alt="FSAE EV logo" class="w-44" />
    </div>
    <div class="flex gap-x-10 my-auto" :class="mainStore.spooky ? 'text-black' : 'text-white'">
      <router-link to="/" class="text-xl">Home</router-link>
      <router-link to="/about" class="text-xl">About</router-link>
      <p class="text-xl">Gallery</p>
      <p class="text-xl">Sponsor</p>
    </div>
  </div>

</template>

<script setup lang="ts">
import { useMainStore } from "@/store";

const mainStore = useMainStore();
</script>