<template>
  <div class="flex justify-between w-full px-8 md:px-24 my-5 bg-transparent">
    <div class="flex">
      <img @click="mainStore.spooky = !mainStore.spooky" src="@/assets/logo.png" alt="FSAE EV logo" class="w-44" />
    </div>
    <div class="hidden md:flex gap-x-10 my-auto" :class="mainStore.spooky ? 'text-black' : 'text-white'">
      <router-link to="/" class="text-xl">Home</router-link>
      <router-link to="/about" class="text-xl">About</router-link>
      <p class="text-xl">Gallery</p>
      <p class="text-xl">Sponsor</p>
    </div>
    <div class="md:hidden my-auto">
      <button
          class="md:hidden text-white text-xl w-11 h-11 mr-2 leading-10 rounded-md border-[1px] transition-all"
          @click="toggleNav()"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>

    <MobileMenu
        :class="{ 'show-mobile-menu': navOpen }"
        @toggle="toggleNav()"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import MobileMenu from "@components/MobileMenu.vue";
import { useMainStore } from "@/store";

const mainStore = useMainStore();

const navOpen = ref(false);
const toggleNav = (): void => {
  navOpen.value = !navOpen.value;
};
</script>

<style scoped lang="postcss">
.show-mobile-menu {
  @apply opacity-100 visible;
}
</style>