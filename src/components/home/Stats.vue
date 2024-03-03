<template>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3" :class="mainStore.spooky ? 'bg-black text-white' : 'text-black'">
        <!-- borders or nah???? -->
      <div class="text-center text-sm">
        <div class="mt-7 text-center font-semibold ">Power</div>
        <div class="text-2xl font-bold">75 kW</div>
        <div class="mb-7">hopefully</div>
      </div>

      <div class="text-center text-sm">
        <div class="mt-7 text-center font-semibold ">Top Speed</div>
        <div class="text-2xl font-bold">80 MPH</div>
        <div class="mb-7">on E85</div>
      </div>

      <div class="text-center text-sm">
        <div class="mt-7 text-center font-semibold ">Torque</div>
        <div class="text-2xl font-bold">577 Nm</div>
        <div class="mb-7">at wheels</div>
      </div>

      <div class="text-center text-sm">
        <div class="mt-7 text-center font-semibold ">Battery Size</div>
        <div class="text-2xl font-bold">7.76 kWh</div>
        <div class="mb-7">if built correctly</div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store";

const mainStore = useMainStore();
</script>