<template>
  <div class="flex rounded-3xl aspect-square" :class="mainStore.spooky ? 'bg-zinc-900':'bg-off-white'" style="box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);">
    <v-slot></v-slot>
  </div>
</template>

<script setup lang="ts">
import {useMainStore} from "@/store";

const mainStore = useMainStore();

</script>